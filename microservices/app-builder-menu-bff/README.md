# Entando AppBuilder Menu BFF
Microservice used to process components installed in bundles and provide app builder with the appropriate metadata to assemble pages

# Development

## Project Structure
```
> src            -> Source Folder
> src/api        -> API Controllers
> src/client     -> Client interfaces to access external services
> src/middleware -> Middlewares used in the request chain
> src/service    -> Business Logic
> src/utils      -> Utils functions
> tests          -> Unit and Integration Tests
> coverage       -> Jest coverage report is generated here
> build          -> Typescript build folder
> dist           -> Minified distribution package folder
> package.json   -> App Manifest
```

## Run
Run app in development mode using default port `8080`
```
yarn dev
```

## Build
To build this package and run it in production we use [trace-pkg](https://github.com/FormidableLabs/trace-pkg) to optimize the generated files.

```
$ yarn build && yarn start
```

> Note: Current package size is `811Kb` zipped and `3.4MB` unzipped.

## Lint
Lint and code style validation:

```
yarn lint
```

## Test
This project uses `Jest` to run test suites.

```
yarn test
```

### Coverage Report
Check `coverage` folder for more details.

```
 PASS  tests/app/router/nav.test.ts
  User can list all navs
    ✓ tests listing all navs successfully (51 ms)
    ✓ tests listing all navs without authorization token (3 ms)

----------------------|---------|----------|---------|---------|-------------------------------------------
File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------------|---------|----------|---------|---------|-------------------------------------------
All files             |   68.43 |    62.59 |   75.86 |   68.43 |
 src                  |   75.29 |       60 |   66.66 |   75.29 |
  index.ts            |       0 |        0 |       0 |       0 | 1-15
  server.ts           |   91.42 |    66.66 |     100 |   91.42 | 35-38,44-45
 src/api/health       |   16.66 |      100 |      50 |   16.66 |
  health.router.ts    |   16.66 |      100 |      50 |   16.66 | 3-12
 src/api/nav          |    64.7 |       75 |      80 |    64.7 |
  nav.router.ts       |    64.7 |       75 |      80 |    64.7 | 12-17
 src/client           |   74.52 |    59.09 |    82.6 |   74.52 |
  getKeycloakToken.ts |   76.31 |    58.06 |   81.81 |   76.31 | 10,23-27,45-46,52-54,56,64-65,70-71,74,76
  index.ts            |     100 |      100 |     100 |     100 |
  listBundles.ts      |    72.5 |    57.57 |   81.81 |    72.5 | 7,16-18,48,51-54,56-59,61,66,72,74,76-80
 src/client/response  |       0 |        0 |       0 |       0 |
  IBundle.ts          |       0 |        0 |       0 |       0 | 1-24
 src/error            |   73.68 |    63.63 |   66.66 |   73.68 |
  errors.ts           |   73.68 |    63.63 |   66.66 |   73.68 | 8,10-14,22-25
 src/middleware       |   69.64 |    52.94 |   66.66 |   69.64 |
  errorHandler.ts     |     100 |       60 |     100 |     100 | 6-8
  keycloak.ts         |   96.29 |    54.54 |   66.66 |   96.29 | 5
  validator.ts        |       0 |        0 |       0 |       0 | 1-16
 src/service          |   65.38 |    77.77 |   83.33 |   65.38 |
  index.ts            |     100 |      100 |     100 |     100 |
  listNav.ts          |      64 |    71.42 |      80 |      64 | 5-11,20-21
 src/utils            |     100 |    85.71 |     100 |     100 |
  loadRouters.ts      |     100 |    85.71 |     100 |     100 | 4
----------------------|---------|----------|---------|---------|-------------------------------------------
Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.407 s, estimated 3 s
Ran all test suites.
✨  Done in 3.13s.
```
