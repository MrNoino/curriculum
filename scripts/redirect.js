var language = window.navigator.userLanguage || window.navigator.language;

if(language.includes("pt")){

    window.location.replace("pt/");

}else{

    window.location.replace("en/");

}