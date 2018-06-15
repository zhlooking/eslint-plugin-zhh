# eslint-plugin-zhh

[![Build Status](https://travis-ci.com/zhlooking/eslint-plugin-zhh.svg?branch=master)](https://travis-ci.com/zhlooking/eslint-plugin-zhh)

eslint plugin zhh

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-zhh`:

```
$ npm install eslint-plugin-zhh --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-zhh` globally.

## Usage

Add `zhh` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "zhh"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "zhh/var-length": 2,
        "zhh/btn-style": 2,
    }
}
```

## Supported Rules

* Fill in provided rules here


