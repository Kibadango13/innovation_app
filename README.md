This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React Boilerplate Web

This boilerplate was made to facilitate mundane tasks labours such as: setting up static testing tools, type safety configurations, CI/CD settings and provide additional features to make web development easier such as styled-components, react-testing-library or even enforcing good programing practices according to Trade's coding manifesto.

## New Project Configuration steps:

1. Change your project name and description in package.json.
1. Change default constants value in `src/config/constants.ts`.
1. In .env.[ENV] change the ENV variable to the environment you are currently developing for.
1. Link or configure a new project with Netlify hosting, do not forget to use TRADE'S Credentials.

## File Structure

General representation of the building pieces

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── other configs
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
    |  ├── fonts
    |  └── images
    ├── components
    |   ├── home
    |   └── global
    ├── config
    |   ├── constants
    ├── containers
    |   ├── App
    |   |   ├── App.tsx
    |   |   ├── App.types.tsx
    |   |   └── App.test.tsx
    ├── pages
    |   └── Home
    |   |   ├── Home.page.tsx
    |   |   ├── Home.page.styles.tsx
    |   |   ├── Home.page.types.tsx
    |   |   └── Home.page.test.tsx
    ├── redux
    |   ├── global
    |   |   ├── global.actions.ts
    |   |   └── global.reducer.ts
    |   ├── reducers.ts
    |   └── store.ts
    ├── styles
    ├── services
    ├── types
    ├── util
    ├── index.tsx
    ├── react-app-env.tsx
    └── serviceWorker.ts
```

## Global styles File Structure

```
my-app
└── src
    └── styles
        ├── base
            ├── animations.ts
            ├── base.ts
            └── typography.ts
        ├── theme
            ├── default.ts
            └── dark.ts
        ├── util
            ├── funtions.ts
            ├── mixins.ts
            └── variables.ts
        └── vendors
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

> **Note:** To switch environments create a new .env file followed to the environment you wish to work for. `e.g: .env.production` then in package.json change the npm start script to point to the new .env `e.g: cmd-env -f **.env.production** --fallback react-scripts start`

### `npm dev`

Alias of npm start, for some developers convinience.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:all`

Run every test in a none interactive mode and create a coverage report.

This command is perfect for pre push hooks.

### `npm run test:ci`

Simulates a CI environment before running all tests

### `npm run test:e2e:run`

Run cypress e2e tests without the UI

### `npm run test:e2e:dev`

Run cypress e2e tests with a dedicated UI for debugging purposes

### `npm run test:e2e`

This command will run cypress with either the UI or without it depending on your environment.

For e2e testing, this is the recommended command to run.

### `npm run check-types`

Will attempt to compile the whole project including test files that are normally excluded.

This command is perfect for verifing the project's integrity before commiting changes

### `npm run lint`

Runs the configured linter to check for any lints in your code before deploying, developers must clean any lint before commiting or commints will not go through.

### `npm run prettier`

Configure prettier, the files that should be included and excluded. This command should not be used by itself.

### `npm run format`

Uses the prettier configuration to run prettier in write mode to all selected files. It will fix all format errors.

### `npm run check-format`

Uses the prettier configuration to run prettier in read mode to all selected files. If any is bad formated, it will display a warning.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run start:build`

This command will allow you to run your build folder to verify locally the integrity of the latest build.

### `npm run validate`

It validates the integrity of the project by running many of the static testing, unit/integration testing and e2e testing commands.

### `npm run validate:ci`

Run a different series of commands than validate, the selected commands that are run are the ones appropiate to be run on CI. This command is not met to be run locally.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run deploy`

Will deploy the current project to netlify. This command is only ment to be run on edge cases.

**Please**, do not use this command unless you know what you are doing. The CI process built-in within this boilerplate should be the one that takes care of the deployment process

## Deploying your project

First you will need to go to netlify and configure your project by connecting a netlify project to one of your repositories, this means that **you will not be able to create a different netlify project for the same project for each environment**. You will have to handle each environment following the brand deploy configuration that netlify provides.

## Previewing your deploy

This step is highly discourged but for some edge cases it might be usefull. If you need to preview your changes before pushing to a deploy branch, follow the next steps.

Make sure you have `netlify-cli` installed.

To install it you can run:

```bash
    npm install netlify-cli -g
```

Next, run the build command.

> `npm run build`

Followed, run:

> `npm run deploy`

It will throw you a link to preview the build.

If you are happy with the changes, it is strongly recommend to push your changes to a deploy branch and let the CI/CD workflow handle the rest.

> ### Hope you are enjoying this boilerplate
>
> We are happy to add/update any additional request you may have. For intering ideas, please submit a new issue and we will take care of it.
>
> Happy coding! 🚀
