## Setting up the environment

This repository uses [`yarn@v1`](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).
Other package managers may work but are not officially supported for development.

To set up the repository, run:

```bash
yarn
yarn build
```

This will install all the required dependencies and build output files to `dist/`.

## Modifying/Adding code

Most of the SDK is generated code. Modifications to code will be persisted between generations, but may
result in merge conflicts between manual patches and changes from the generator. The generator will never
modify the contents of the `src/lib/` and `examples/` directories.

## Adding and running examples

All files in the `examples/` directory are not modified by the generator and can be freely edited or added to.

```bash
// add an example to examples/<your-example>.ts

#!/usr/bin/env -S npm run tsn -T
…
```

```
chmod +x examples/<your-example>.ts
# run the example against your api
yarn tsn -T examples/<your-example>.ts
```

# With yarn

yarn link
cd ../my-package
yarn link @space-df/sdk

# With pnpm

pnpm link --global
cd ../my-package
pnpm link -—global @space-df/sdk

````

## Running tests

Most tests require you to [set up a mock server](https://github.com/stoplightio/prism) against the OpenAPI spec to run the tests.

```bash
npx prism mock path/to/your/openapi.yml
````

```bash
yarn run test
```

## Linting and formatting

This repository uses [prettier](https://www.npmjs.com/package/prettier) and
[eslint](https://www.npmjs.com/package/eslint) to format the code in the repository.

To lint:

```bash
yarn lint
```

To format and fix all lint issues automatically:

```bash
yarn fix
```

## Publishing and releases

Changes made to this repository via the automated release PR pipeline should publish to npm automatically. If
the changes aren't made through the automated pipeline, you may want to make releases manually.

### Publish manually

If you need to manually release a package, you can run the `bin/publish-npm` script with an `NPM_TOKEN` set on
the environment.
