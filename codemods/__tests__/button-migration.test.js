'use strict';

const { defineTest } = require('jscodeshift/dist/testUtils');

defineTest(
  __dirname, // test directory
  "transforms/button-migration", // path to transformer (relative to test file)
  null, // options (if any)
  "button-migration" // name of input/output fixture files
);
