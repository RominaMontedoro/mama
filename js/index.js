document.addEventListener("DOMContentLoaded", function () {
    const respuestasCorrectas = ["papas fritas", "luis fonsi", "estanciero", "vanesa martin", "familia", "sandia", "ridicula", "luciano pereyra"];
    const botones = document.querySelectorAll('button[id^="pregunta"]');
    const respuestas = document.querySelectorAll('input[type="text"]');

    let respuestasCorrectasContador = 0;

    function verificarRespuestas() {
        for (let i = 0; i < botones.length; i++) {
            botones[i].addEventListener("click", function () {
                const mensajeError = document.getElementById(`mensaje-error-${i}`);
                
                if (mensajeError) {
                    mensajeError.remove(); // Elimina el mensaje de error si existe
                }

                if (respuestas[i].value.toLowerCase() === respuestasCorrectas[i].toLowerCase()) {
                    respuestasCorrectasContador++;
                    respuestas[i].disabled = true;
                    botones[i].disabled = true;
                    botones[i].textContent = "Correcto";
                    botones[i].style.backgroundColor = "green";
                } else {
                    mostrarMensajeError(i);
                }

                if (respuestasCorrectasContador === botones.length) {
                    alert("Felicitaciones! Has Ganado Los 8 Escalones!");
                    window.location.href = "regalo.html"; // Redirige a la página "regalo.html"
                }
            });
        }
    }

    verificarRespuestas();

    function mostrarMensajeError(index) {
        const mensajeError = document.createElement("p");
        mensajeError.textContent = "Mama mia!! Has fallado!!! Volve a probar";
        mensajeError.style.color = "red";
        mensajeError.id = `mensaje-error-${index}`;
        const preguntaDiv = respuestas[index].parentNode;
        preguntaDiv.appendChild(mensajeError);
    }
});



