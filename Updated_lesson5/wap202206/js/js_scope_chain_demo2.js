/**
 * js_scope_chain_demo2.js
 */
"use strict";

function b() {
    function a() {
        console.log(x); // looks for x in outscope(s)
    }
    var x = 10;
    a();
}
var x = 20;
b(); // what is the output?