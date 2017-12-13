// ==UserScript==
// @name         Redacted :: Replace the default avatar
// @author       Porto
// @icon         https://ptpimg.me/3k31gq.png
// @version      1.1
// @description  Replaces the default avatar with a picture of your choice.
// @include      https://redacted.ch/*
// @grant        none
// ==/UserScript==

window.addEventListener('load', function() {
var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
images[i].src = images[i].src.replace('https://ptpimg.me/2zzyfp.jpg', 

                                      // Change the link below:
                                      
                                      'https://ptpimg.me/h6iis3.png'
                                     
                                     );}
}, false);
