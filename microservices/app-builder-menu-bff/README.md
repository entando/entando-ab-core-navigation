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
npm run dev
```

## Build
To build this package and run it in production we use [trace-pkg](https://github.com/FormidableLabs/trace-pkg) to optimize the generated files.

```
$ npm build && npm start
```

## Lint
Lint and code style validation:

```
npm run lint
```

## Test
This project uses `Jest` to run test suites.

```
npm test
```

### Coverage Report
Check `coverage` folder for more details.
