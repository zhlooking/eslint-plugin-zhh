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
      description: "Button tag must have btn className",
      category: "eslint-config-zhh",
      recommended: false
    },
    fixable: null,  // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: context => {
    const ERROR_MSG_BTN_STYLE = 'button tag must have btn className'

    return ({
      JSXOpeningElement: node => {
        const nodeType = node.name.name
        if (nodeType !== 'button') {
          return
        }

        const classNameAttributes = node.attributes.filter(attr => {
          return attr.type === 'JSXAttribute' &&
            attr.name.name === 'className' &&
            (attr.value.type !== 'Literal' || attr.value.value.includes('btn'))
        })

        if (!classNameAttributes.length) {
          context.report(node, ERROR_MSG_BTN_STYLE)
        }
      }
    })
  }
};
