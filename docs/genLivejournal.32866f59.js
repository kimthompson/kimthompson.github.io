parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"jUVm":[function(require,module,exports) {
var e=[{category:"currently reading",name:"The New Jim Crow"},{category:"currently playing",name:"Persona Q2"},{category:"currently watching",name:"Chernobyl"},{category:"currently playing (mmo edition)",name:"SHADOWBRINGERS"},{category:"currently watching (anime edition)",name:"Evangelion (new dub)"}],a=document.getElementById("livejournal");e.map(function(e){var n=document.createElement("tr");n.classList.add("livejournal_data");var t=document.createElement("td"),r=document.createTextNode(e.category);t.classList.add("livejournal_label"),t.appendChild(r);var d=document.createElement("td"),l=document.createTextNode(e.name);d.classList.add("livejournal_attr"),d.appendChild(l),n.appendChild(t),n.appendChild(d),a.appendChild(n)});
},{}]},{},["jUVm"], null)
//# sourceMappingURL=genLivejournal.32866f59.js.map