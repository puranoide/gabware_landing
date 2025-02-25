var primeraLllamada = document.getElementById("elemento-flotante-primera-llamada");
var contactanosbutton = document.getElementById("contactanosbutton");
var interactive_touch = document.getElementById("interactive-touch");
primeraLllamada.addEventListener("click", function () { 
    window.scrollTo({ top: document.getElementById("nuestros-proyectos").offsetTop, behavior: "smooth" });
});   
contactanosbutton.addEventListener("click", function () { 
    window.scrollTo({ top: document.getElementById("contactanos").offsetTop, behavior: "smooth" });
});

interactive_touch.addEventListener("click", function () { 
   window.location.href = "./blog";
});