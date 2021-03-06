# Form Builder

## Project Bootstrap

How this project was bootstrapped:

- `yarn create-next-app --example api-routes-graphql api-routes-graphql-app`
  - In hindsignt, this is a poor way to add GQL support.  TODO: Rip that out and use the Apollo tools
- Typescript & tooling & VSCode config via: <https://github.com/paulintrognon/next-typescript>
- material-ui added via `pages/_app.tsx` and `pages/_document.tsx` as per <https://itnext.io/next-js-with-material-ui-7a7f6485f671>

Minor note: The spec says no back-end.  However, I've never used Next.js before and wanted to go through the exercise of setting it up.  This project would work well with a BFF (Back-end-for-front-end) architecture, such that newly created forms are automatically persisted.

## Dev Setup

- Use VScode with recommended extensions
- NVM will auto-select the LTS version of node.

## Scripts

- `dev` Start the development server with fast refresh
- `build` create a production webpack build
- `start` run the production build
- `lint` run the linter
- `lint:fix` run the linter and auto-fix fixable errors
- `test` run unit tests
- `test:update` run unit tests and update all out of date snapshots
- `typecheck` run typescript to check for typescript errors
