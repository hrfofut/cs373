#!/usr/bin/env node

/*global
    require
*/

/*jslint
    white: true
*/

// -------------
// Exceptions.js
// -------------

// https://nodejs.org/api/errors.html

"use strict";

var assert = require('assert');

function f (b) {
    if (b) {
        throw new Error("abc");}
    return 0;}

function test1 () {
    try {
        assert(f(false) === 0);}
    catch (e) {
        assert(false);}
    finally {
        assert(true);}}

function test2 () {
    try {
        assert(f(true) === 1);
        assert(false);}
    catch (e) {
        assert(e         instanceof Error);
        assert(e.message ===        "abc");}
    finally {
        assert(true);}}

console.log("Exceptions.js");
test1();
test2();
console.log("Done.");
