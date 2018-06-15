# eslint-plugin-zcool

eslint plugin zcool

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-zcool`:

```
$ npm install eslint-plugin-zcool --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-zcool` globally.

## Usage

Add `zcool` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "zcool"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "zcool/var-length": 2,
        "zcool/btn-style": 2,
    }
}
```

## Supported Rules

* Fill in provided rules here


