Esta aplicación contiene una lista de productos en una tabla de angular material (mat-table) utilizando una REST API falsa. Permite realizar operaciones CRUD como añadir, editar y eliminar. Con ella se pretende familiarizar el manejo de la librería Angular Material por medio de los formularios.

Haz clic en [este enlace](https://j03vincent.github.io/DAW2_ProductForm/), para poder ver el despliegue de la página. Cabe comentar que no se pueden añadir o eliminar productos porque lee de un servidor json (front-end). Para probar la aplicación correctamente, es necesario ejecutarla desde local y seguir los siguientes pasos:
1. git clone o descargar directamente el fichero
2. npm install
3. ir al directorio src/app/services/api.service.ts y cambiar el enlace por http://localhost:3000/productList/
4. json-server --watch db.json
5. npm serve

# DAW2Forms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

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
