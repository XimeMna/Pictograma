
function hablar(texto) {
    const audio = new Audio(`Audios/${texto.toLowerCase()}.mp3`);

    audio.play().catch(error => {
        console.error("No se pudo reproducir el audio:", error);
    });
}

const siguiente = document.getElementById("siguiente");

const emociones = document.getElementById("Emociones");
const comida = document.getElementById("Comida");

siguiente.addEventListener("click", function () {

    if (emociones.style.display === "none") {
        emociones.style.display = "block";
        comida.style.display = "none";
        document.body.style.backgroundImage = 'url("Img/fondo2.png")';
        
    } else {
        emociones.style.display = "none";
        comida.style.display = "block";
        document.body.style.backgroundImage = 'url("Img/fondo.png")';
    }

});