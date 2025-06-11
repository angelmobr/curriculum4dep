
      document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 800,
        once: false
    });

    const ishow = 115;
    const $divtop = document.getElementById("div-totop");
    const scrollButton = document.querySelector(".cmn-divfloat");
    const botonIrArriba = document.querySelector(".cmn-divfloat a");

    // Mostrar/ocultar botón según el scroll
    window.addEventListener("scroll", function () {
        if (document.documentElement.scrollTop > ishow) {
            $divtop.style.display = "inherit";
        } else {
            $divtop.style.display = "none";
        }

        if (window.scrollY > 300) {
            scrollButton.classList.add("show");
        } else {
            scrollButton.classList.remove("show");
        }
    });

    // Hacer scroll suave al hacer clic
    botonIrArriba.addEventListener("click", function (event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        document.body.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});
    