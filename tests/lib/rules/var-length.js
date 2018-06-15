/**
 * @fileoverview limit variable length
 * @author zhlooking
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/var-length")
const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  }
});

const ERROR_MSG_VAR_LENGTH = 'variable length must greater than 3'

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("var-length", rule, {

  valid: [
    {
      code: "var varLength = 1; te = 1;"
    }
  ],

  invalid: [
    {
      code: "var a = 1",
      errors: [{
        message: ERROR_MSG_VAR_LENGTH,
        type: "VariableDeclarator"
      }]
    }
  ]
});
