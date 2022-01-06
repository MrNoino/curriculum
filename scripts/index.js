document.getElementById("gmail").addEventListener("click", function(){

    window.open("mailto:nuno.miguelsl25@gmail.com", '_blank');

}, false);

document.getElementById("outlook").addEventListener("click", function(){

    window.open("mailto:nunosantoslopes@hotmail.com", '_blank');

}, false);

document.getElementById("whatsapp").addEventListener("click", function(){

    window.open("https://wa.me/+351914555181", '_blank');

}, false);

document.addEventListener("load", function(){

    var http = new XMLHttpRequest();

    http.open("GET", "./json/curriculum.json");

    http.onload = function(){

        if(http.status === 200){

            var cv = JSON.parse(http.response);

        }

    };

    http.send();

}, false);