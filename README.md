# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## instalaciones 
- Proyecto npm create vite@latest
- Tailwindcss npm i tailwindcss postcss autoprefixer
- npx tailwindcss init -p
```
content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
```
```
@tailwind base;
@tailwind components;
@tailwind utilities;

```

## formularios

- Librerias de formularios (formularios muy grandes)
-- Cuentan con validaciones muy fuertes
-- React Hook Form, Formik con Yup
-- ZOD para validaciones 

** Se utilizara react hook form
npm i react-hook-form 

**Zustand
npm i zustand

```
import { create } from 'zustand'
import {PacientType} from '../types'

type PatientState = {
    patients: PacientType[]
}
export const usePatientStore = create<PatientState>(() =>({
    patients: []
}))

```

npm i uuid
npm i --save-dev @types/uuid

### instalar para las alertar react toastify
npm i react-toastify

