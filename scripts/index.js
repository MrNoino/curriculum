document.getElementById("gmail").addEventListener("click", function(){

    window.open("mailto:nuno.miguelsl25@gmail.com", '_blank');

}, false);

document.getElementById("outlook").addEventListener("click", function(){

    window.open("mailto:nunosantoslopes@hotmail.com", '_blank');

}, false);

document.getElementById("whatsapp").addEventListener("click", function(){

    window.open("https://wa.me/+351914555181", '_blank');

}, false);

var navLinks = document.getElementsByClassName("nav-link");

for(var i = 0; i < navLinks.length; i++){

    navLinks[i].addEventListener("click", function(){

        for(var j = 0; j < navLinks.length; j++){

            navLinks[j].classList.remove("active");

        }

        this.classList.add("active");

        

    }, false);

    

}
