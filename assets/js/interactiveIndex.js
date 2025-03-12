var contactanosbutton = document.getElementById("contactanosbutton");
contactanosbutton.addEventListener("click", function () { 
    window.scrollTo({ top: document.getElementById("contactanos").offsetTop, behavior: "smooth" });
});
