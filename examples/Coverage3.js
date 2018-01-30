#!/usr/bin/env node

/* global
    suite,
    test
*/

// ------------
// Coverage3.js
// ------------

// https://gotwarlost.github.io/istanbul/

"use strict";

var assert = require('assert');

function cycle_length (n) {
    assert(n > 0);
    var c = 1;
    while (n > 1) {
        if ((n % 2) === 0) {
            n = n / 2;}
        else {
            n = (3 * n) + 1;}
        c += 1;}
    assert(c > 0);
    return c;}

suite('cycle_length',
    function () {
        test('test',
            function () {
                assert.equal(cycle_length(3), 8);});});

/*
% istanbul cover _mocha -- -u tdd Coverage3.js
  cycle_length
    ✓ test


  1 passing (5ms)

=============================================================================
Writing coverage object [/Users/downing/Dropbox/examples/javascript/coverage/coverage.json]
Writing coverage reports at [/Users/downing/Dropbox/examples/javascript/coverage]
=============================================================================

=============================== Coverage summary ===============================
Statements   : 100% ( 14/14 )
Branches     : 100% ( 2/2 )
Functions    : 100% ( 3/3 )
Lines        : 100% ( 14/14 )
================================================================================
*/
