const exclusiveInput = document.querySelector('input#accordion-group-exclusive');
const collapseAllButton = document.querySelector('button#accordion-collapse-all');
const expandAllButton = document.querySelector('button#accordion-expand-all');

const fieldsetOneElement = document.querySelector('fieldset#accordion-one-select');
const fieldsetTwoElement = document.querySelector('fieldset#accordion-two-select');
const fieldsetThreeElement = document.querySelector('fieldset#accordion-three-select');

const accordionGroup = document.querySelector('salt-accordion-group#accordion-group');
const accordionOneElement = document.querySelector('salt-accordion#accordion-one');
const accordionTwoElement = document.querySelector('salt-accordion#accordion-two');
const accordionThreeElement = document.querySelector('salt-accordion#accordion-three');

const fieldsetAndAccordionElements = [
  [fieldsetOneElement, accordionOneElement],
  [fieldsetTwoElement, accordionTwoElement],
  [fieldsetThreeElement, accordionThreeElement],
];

const setStateOnElement = async (element, prop, state) => await element[prop](state);

exclusiveInput.addEventListener('change', ({ target }) => {
  accordionGroup.setAttribute('exclusive', `${target.checked}`);
});

collapseAllButton.addEventListener('click', async e => {
  await accordionGroup.collapseAll();
});

expandAllButton.addEventListener('click', async e => {
  await accordionGroup.expandAll();
});

fieldsetAndAccordionElements.forEach(fieldsetAndAccordionElement => {
  fieldsetAndAccordionElement[0].addEventListener('change', async ({ target }) => {
    await setStateOnElement(fieldsetAndAccordionElement[1], target.name, target.checked);

    if (target.name === 'setDisabledState') {
      const openInputElement = fieldsetAndAccordionElement[0].querySelector(
        'input[name="setOpenState"]',
      );

      if (target.checked) {
        openInputElement.checked = false;
        openInputElement.disabled = true;
      } else {
        openInputElement.disabled = false;
      }
    }
  });

  fieldsetAndAccordionElement[1].addEventListener('salt-toggle', ({ detail }) => {
    const { isOpen } = detail.data;
    const inputElement = fieldsetAndAccordionElement[0].querySelector('input[name="setOpenState"]');

    inputElement.checked = isOpen;
  });
});
