# ExoplanetSearch

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.1.

## Project Structure

```
exoplanet-search/
├── proxy.conf.json              # dev proxy to NASA
├── angular.json
└── src/app/
    ├── app.config.ts            # provideRouter, provideHttpClient
    ├── app.routes.ts            # route definitions
    ├── app.component.ts         # shell with <router-outlet>
    │
    ├── core/                    # DATA LAYER (app-wide, singleton)
    │   ├── models/
    │   │   └── planet.model.ts          # Planet interface
    │   └── services/
    │       └── exoplanet.service.ts     # HttpClient + query building
    │
    ├── features/                # UI LAYER (one folder per page)
    │   ├── search/
    │   │   ├── search-page.component.ts       # container: calls service, holds state
    │   │   ├── search-form.component.ts       # reactive form, emits criteria
    │   │   └── results-table.component.ts     # sorting + pagination display
    │   └── planet-detail/
    │       └── planet-detail.component.ts     # /planet/:name route
    │
    └── shared/                  # REUSABLE PIECES
        ├── validators/
        │   └── range.validator.ts       # "from <= to" check
        └── components/
            └── pagination.component.ts
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
