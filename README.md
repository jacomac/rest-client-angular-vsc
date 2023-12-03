# Simple Angular ReST client with search result list and details view

This small Angular application shall provide a ReST client with a server-side pageable and sortable search result list 
and a details view for selected ReST endpoints. The UI shall also be 
easy to use on tablets and smartphones.

For a server-side searchable, sortable and pageable data grid, the Angular Material data table component shall be used:
https://blog.angular-university.io/angular-material-data-table/

The app shall be configurable to work with multiple different ReST services via the environment,
so that it can also work for Docker containers ([factor 3 within 12 factor app methodology](https://en.wikipedia.org/wiki/Twelve-Factor_App_methodology)).


# Working with Angular
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
