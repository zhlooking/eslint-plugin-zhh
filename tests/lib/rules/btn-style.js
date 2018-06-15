/**
 * @fileoverview limit variable length
 * @author zhlooking
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/btn-style.js")
const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  }
});

const ERROR_MSG_VAR_LENGTH = 'button tag must have btn className'

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("btn-style", rule, {
  valid: [
    {
      code: "<button className=\"btn test\">valid</button>"
    }
  ],

  invalid: [
    {
      code: "<button className=\"foo bar\">invalid</button>",
      errors: [{
        message: ERROR_MSG_VAR_LENGTH,
        type: "JSXOpeningElement"
      }]
    }, {
      code: "<button>invalid</button>",
      errors: [{
        message: ERROR_MSG_VAR_LENGTH,
        type: "JSXOpeningElement"
      }]
    }
  ]
});
