var navLinks = document.getElementsByClassName("nav-link");

for(var i = 0; i < navLinks.length; i++){

    navLinks[i].addEventListener("click", function(){

        for(var j = 0; j < navLinks.length; j++){

            navLinks[j].classList.remove("active");

        }

        this.classList.add("active");

        

    }, false);

    

}