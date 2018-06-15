/**
 * @fileoverview eslint-plugin-zcool
 * @author zhlooking
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");
