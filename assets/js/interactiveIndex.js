var primeraLllamada = document.getElementById("elemento-flotante-primera-llamada");
var contactanosbutton = document.getElementById("contactanosbutton");

primeraLllamada.addEventListener("click", function () { 
    window.scrollTo({ top: document.getElementById("nuestros-proyectos").offsetTop, behavior: "smooth" });
});   
contactanosbutton.addEventListener("click", function () { 
    window.scrollTo({ top: document.getElementById("contactanos").offsetTop, behavior: "smooth" });
});