# Running Tests though the cli

[Jest Cli](https://jestjs.io/docs/en/cli)

## Run a test by name

`jest tests/index.test.js`

## Run tests based on git

`jest -o`

## Run tests related to a javascript file

`jest --findRelatedTests built/index.js`

## Run tests with a describe matching the search term

`jest -t "autocodes correctly"`
