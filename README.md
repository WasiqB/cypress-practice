# Cypress practice

## Pre-requisites

Install the following:

- VS Code
- Node JS v16.16.0
- NPM v8.11.0
- Yarn

## Steps to create Cypress project with TypeScript

### 1. Initialize node project

```shell
npm init -y
```

### 2. Set Yarn stable version

```shell
yarn set version stable
```

### 3. Create `.yarnrc.yml`

Create the file with following content:

```yml
yarnPath: .yarn/releases/yarn-3.2.3.cjs
```

### 4. Install Cypress

```shell
yarn add cypress
```

### 5. Install TypeScript

```shell
yarn add -D typescript
```

### 6. Create `.gitignore` file to ignore unwanted files and folders

```text
.pnp.*
**/.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!**/.yarn/sdks

cypress/screenshots
cypress/videos
```

### 7. Add script to open Cypress

```json
"scripts": {
  "open": "cypress open",
  "test": "cypress run"
}
```

### 8. Setup Cypress

```shell
yarn open
```

- When UI opens, select `E2E Testing`
- Few files will get created
- Click `Continue` at the bottom of the page
- Select the desired browser, recommended `Chrome`
- Click on `Start E2E Testing in Chrome` button
- Click on `Scaffold example specs`
- Some sample tests will be created
- Click on `Okay, I got it` button

### 9. Setup Cypress for TypeScript

#### 9.1. Create `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["ESNext", "DOM"],
    "types": ["cypress", "node"],
    "strict": true
  },
  "include": ["cypress/**/*.ts"]
}
```

#### 9.2. Rename the test files

Rename all test files located at `cypress/e2e` and `cypress/support` folders from `.js` to `.ts`

#### 9.3. Setup VS Code to work with TypeScript

```shell
yarn dlx @yarnpkg/sdks vscode
```

#### 9.4. Select TypeScript version in VS Code

Open any `.ts` file and press `Cmd` + `Shift` + `P` and type and select `Select TypeScript Version` option and then select `Workspace version`

### 10. Run the tests

```shell
yarn test
```

### 11. Setup `yarn` to allow interactive package upgrades

```shell
yarn plugin import interactive-tools
```

### 12. Upgrade outdated dependencies

```shell
yarn upgrade-interactive
```
