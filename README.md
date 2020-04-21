# ContentForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

Simple custom Angular web-component, receive html elements within <ng-content> and a function to return the FormData json of this. Example: the custom element name my-form 
  <my-form> 
    <input type="text" name="name01" value="1"> 
    <input type="hidden" name="name01" value="2"> 
  </my-form> 
  It has a public function that return fomvalues in services and change event that return json value on change to parent element 
  { "name01": "1", "name02":"2" }

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
