# Autocoder

Solving simple coding problems using keyword analysis, nlp, and templating.

[![GitHub](https://img.shields.io/github/license/reduced-reptile/autocoder)](https://tldrlegal.com/license/gnu-general-public-license-v3-(gpl-3))

## Motivation

`autocoder` is designed to be a simple, understandable, and intelligent way to automatically develop code.
It is written entirely in Javascript, so it can be used entirely offline in a progressive web app.
It is also developed to be entirely customizable to new examples.

## Quick Start

There are three different folders in this application

* autocoder-package is the brains of the autocoder platform. It runs entirely independently of the other two parts of the application
* autocoder-frontend is the beauty of the autocoder platform. It uses the autocoder-package to display a very stylish version of the application to the user
* autocoder-backend is the muscle of the autocoder platform. It serves the frontend, rest api, and a basic version of the application.

## Usage

The recommended way to use `autocoder` is to run the autocoder-backened on a server. The
simplest way to do this is using `npm run dev `:

To use the package:

``` js
const autocoder = require('autocoder');

const autocoderResponse = autocoder('code', 'en', {
    problemTitle: 'This is a sample problem',
    problemDescription: 'Echo the input as output',
    inputSpeciﬁcation: 'One line of input',
    outputSpeciﬁcation: 'One line of output',
    programmingLanguage: 'crystal'
});

console.log(autocoderResponse['code']);
```