# Contribute

## Development

### Angular Module application

Run the following three commands one after the other in watch mode.

- `npm run build:watch -w @richkode/salt`: Start and watch the Stencil components found in `packages/salt`
- `npm run build:salt-angular:prod:watch -w @local/angular`: Start and watch the Angular build target for Stencil found in `packages/angular/projects/salt-angular`
- `npm run build:salt-angular-standalone:prod:watch -w @local/angular`: Start and watch the Angular build target for Stencil found in `packages/angular/projects/salt-angular-standalone`
- `npm run start -w @local/angular-web`: Start and watch the Angular web server found in `applications/angular-web`.
