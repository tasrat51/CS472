/**
 * index4_js_scope_chain_demo.js
 */
"use strict";

function a() {
    console.log(x); // look for x in outer scope
}

function b() {
    var x = 10;
    a();
}

var x = 20;
b();