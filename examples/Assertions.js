#!/usr/bin/env node

/*jslint
    white: true
*/

// -------------
// Assertions.js
// -------------

// https://nodejs.org/api/assert.html

"use strict";

var assert = require('assert');

function cycle_length (n) {
    assert(n > 0);
    var c = 0;
    while (n > 1) {
        if ((n % 2) === 0) {
            n = (n / 2);}
        else {
            n = (3 * n) + 1;}
        c += 1;}
    assert(c > 0);
    return c;}

console.log("Assertions.js");

assert(cycle_length( 1) === 1);
assert(cycle_length( 5) === 6);
assert(cycle_length(10) === 7);

console.log("Done.");

/*
% node Assertions.js
Assertions.js
assert.js:42
  throw new errors.AssertionError({
  ^

AssertionError [ERR_ASSERTION]: false == true
    at cycle_length (/Users/downing/Dropbox/examples/javascript/Assertions.js:20:5)
    at Object.<anonymous> (/Users/downing/Dropbox/examples/javascript/Assertions.js:25:8)
    at Module._compile (module.js:641:30)
    at Object.Module._extensions..js (module.js:652:10)
    at Module.load (module.js:560:32)
    at tryModuleLoad (module.js:503:12)
    at Function.Module._load (module.js:495:3)
    at Function.Module.runMain (module.js:682:10)
    at startup (bootstrap_node.js:191:16)
    at bootstrap_node.js:613:3
*/
