#!/usr/bin/env node

/* global
    suite,
    test
*/

// -------------
// UnitTests1.js
// -------------

// http://mochajs.org

"use strict";

var assert = require('assert');

function cycle_length (n) {
    assert(n > 0);
    var c = 0;
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
        test('test_1',
            function () {
                assert.equal(cycle_length( 1), 1);});

        test('test_2',
            function () {
                assert.equal(cycle_length( 5), 6);});

        test('test_3',
            function () {
                assert.equal(cycle_length(10), 7);});});

/*
% which mocha
/usr/local/bin/mocha



% mocha --version
4.1.0



% mocha --help
...



% mocha -u tdd UnitTests1.js
  cycle_length
    1) test_1
    2) test_2
    3) test_3


  0 passing (7ms)
  3 failing

  1) cycle_length
       test_1:

      AssertionError [ERR_ASSERTION]: false == true
      + expected - actual

      -false
      +true

      at cycle_length (UnitTests1.js:22:5)
      at Context.<anonymous> (UnitTests1.js:29:30)

  2) cycle_length
       test_2:

      AssertionError [ERR_ASSERTION]: 5 == 6
      + expected - actual

      -5
      +6

      at Context.<anonymous> (UnitTests1.js:33:24)

  3) cycle_length
       test_3:

      AssertionError [ERR_ASSERTION]: 6 == 7
      + expected - actual

      -6
      +7

      at Context.<anonymous> (UnitTests1.js:37:24)
*/
