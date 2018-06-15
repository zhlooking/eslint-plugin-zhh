/**
 * @fileoverview limit variable length
 * @author zhlooking
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "limit variable length",
      category: "eslint-rule-customize-zhlooking",
      recommended: false
    },
    fixable: null,  // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: context => {
    const ERROR_MSG_VAR_LENGTH = 'variable length must greater than 3'

    return ({
      VariableDeclarator: node => {
        if (node.id.type !== 'Identifier') {
          return
        }

        if (node.id.name.length < 4) {
          context.report(node, ERROR_MSG_VAR_LENGTH);
        }
      }
    })
  }
};
