parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";var e=document.querySelector("body"),n=new Promise(function(e,n){document.addEventListener("click",function(){clearTimeout(t),e("First promise was resolved")});var t=setTimeout(function(){n(new Error("First promise was rejected"))},3e3)}),t=new Promise(function(e){document.addEventListener("click",function(){e("Second promise was resolved")}),document.addEventListener("contextmenu",function(n){n.preventDefault(),e("Second promise was resolved")})}),o=new Promise(function(e){var n=!1,t=!1;document.addEventListener("click",function(){(n=!0)&&t&&e("Third promise was resolved")}),document.addEventListener("contextmenu",function(o){o.preventDefault(),t=!0,n&&t&&e("Third promise was resolved")})});function c(n,t){var o=document.createElement("div");o.setAttribute("data-qa","notification"),o.classList.add(n),o.textContent=t,e.appendChild(o)}n.then(function(e){c("success",e)}).catch(function(e){c("error",e.message)}),t.then(function(e){c("success",e)}),o.then(function(e){c("success",e)});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.3ec720ff.js.map