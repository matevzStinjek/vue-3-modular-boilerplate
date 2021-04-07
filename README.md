# Vue 3 modular boilerplate

🗂 Vue CLI's Hello world boilerplate refactored to a modular approach (incl. vuex and router)

# Structure
- `src`
    - [`main.js`](#main.js)
    - `modules`
        - [`about`](#about)
        - [`core`](#core)
        - [`home`](#home)
        - [`router`](#router)
        - [`shared`](#shared)
        - [`store`](#store)

### `main.js`
The bootstrap file, where the modules are invoked

## Modules

### `router`
Responsible for creating the router and registering the routes of each module

### `store`
Responsible for creating the Vuex store and registring the stores of each module

### `core`
Creates the Vue application and mounts it

### `home`
An example module, as provided in the Vue CLI 4 example

### `about`
An example module, as provided in the Vue CLI 4 example

### `shared`
The only module that doesn't require registrating in [`main.js`](#main.js). Is used to share styling, util functions, components, etc. across modules

### Example
To see what a potential structure of a simplistic reddit clone might be refer to [STRUCTURE.md](STRUCTURE.md)

# Project setup
```
npm i
npm run serve
```
