const flashcards = [
  {
    question: "¿Cuál es la principal causa de accidentes?",
    answer:
      'Las distracciones al volante, como comprueba el estudio de <a href="https://revista.dgt.es/es/noticias/nacional/2023/05MAYO/0510-Linea-Directa-Distracciones.shtml"> Línea directa y la DGT</a>',
  },
  {
    question:
      "¿Por qué crees que las distracciones al volante son un problema tan importante?",
    answer:
      "Porque aparte de ser una de las causas principales, la mayoría suelen ser mortales.",
  },
  {
    question:
      "¿Piensas que los accidentes por distracción están aumentando o disminuyendo con el tiempo?",
    answer:
      "Están aumentando, en este gráfico de nuestra web web aparece como se puede ver una tendencia creciente desde los años del COVID-19",
  },
  {
    question:
      "¿Qué grupo de edad crees que está más expuesto a accidentes por distracción?",
    answer: "18 - 29 años como aparece aquí",
  },
  {
    question:
      "¿Cuál crees que es la distracción más común en los accidentes de tráfico?",
    answer:
      "Los dispositivos electrónicos, como por ejemplo el teléfono móvil.",
  },
  {
    question:
      "¿En que situaciones crees que ocurren la mayoría de accidentes por distracción?",
    answer:
      'Suelen ocurrir cuando el conductor se confía de más, es decir, en las situaciones más rutinarias. Aquí se respalda la afirmación<a href="https://movilidad.racc.es/campanas-de-concienciacion/seguridad-vial/personas/estudio-la-distraccion-de-los-conductores-un-riesgo-no-percibido"> estudio de RACC</a>',
  },
  {
    question:
      "¿Qué pasa si combinas distracción con otros factores de riesgo como el haber dormido poco?",
    answer:
      "El riesgo se dispara, ya que se juntan varios factores de mucho riesgo.",
  },
  {
    question:
      "Si apartas la vista de la carretera durante 5 segundos a 120 km/h, ¿cuánta distancia recorrerás sin mirar?",
    answer:
      "A 120 km/h, recorrerás aproximadamente 167 metros sin mirar lo que serian más que un campo y medio de fútbol.",
  },
  {
    question:
      "¿Si vas conduciendo y vas hablando por télefono en manos libres hay riesgo?",
    answer:
      "Sí, hay riesgo, ya que el cerebro está procesando información de la conversación en lugar de centrarse completamente en la conducción, dando paso a un efecto túnel",
  },
  {
    question:
      "¿Porque crees que los trayectos más cotidianos, como el de ir al trabajo, son más propensos a accidentes por distracción?",
    answer:
      "Porque en estos trayectos, los conductores tienden a estar más distraídos, ya que se sienten cómodos y seguros en rutas familiares.",
  },
  {
    question: "¿La música alta afecta la concentración al volante?",
    answer:
      "Sí, puede afectar la concentración y aumentar tu agresividad al volante, lo que puede aumentar el riesgo de accidentes.",
  },
  {
    question:
      "¿Considerarias una carga emocional como un factor de riesgo en la conducción?",
    answer:
      "Sí, una carga emocional puede afectar la concentración y el juicio del conductor, aumentando el riesgo de accidentes.",
  },
  {
    question:
      "¿Por qué un bolso o una botella de agua en el asiento del copiloto es una distracción potencial?",
    answer:
      "Porque pueden moverse o caerse mientras conduces, lo que distrae tu atención y puede causar accidentes.",
  },
  {
    question:
      "¿Por qué a veces no vemos a un motorista o ciclista aunque estemos mirando hacia ellos?",
    answer:
      "Porque nuestra atención está centrada en ver otros coches, o en otros elementos del entorno.",
  },
  {
    question:
      "Más allá del humo, ¿qué riesgo físico real supone fumar mientras conduces?",
    answer:
      "Es una triple distracción: manual (sujetar el cigarro), visual (buscar el cenicero o evitar que caiga ceniza) y química (el monóxido de carbono reduce ligeramente la visión nocturna).",
  },
  {
    question:
      "¿Por qué solemos distraernos más en señales de tráfico que pasamos todos los días?",
    answer:
      'Por la predicción cerebral. Tu cerebro "cree" saber que nunca viene nadie en ese cruce y deja de mirar realmente, realizando una parada automática pero sin atención visual real.',
  },
  {
    question:
      "¿Por qué es peligroso aprovechar que el semáforo está en rojo para mirar el móvil?",
    answer:
      "Porque pierdes la conciencia del entorno. Al arrancar, lo haces sin haber vigilado si un peatón llega tarde o un ciclista se ha puesto en tu ángulo muerto mientras mirabas la pantalla.",
  },
  {
    question:
      "¿Qué es más seguro: que el copiloto te enseñe una foto en su móvil o que te la describa?",
    answer:
      '<strong>PREGUNTA TRAMPA: </strong>Que no haga ninguna de las dos. Si la miras, apartas los ojos; si te la describe, tu cerebro intenta "dibujarla" mentalmente y dejas de prestar atención a la carretera.',
  },
  {
    question:
      "<strong>Situación: </strong>Vas conduciendo y suena esa canción que te encanta. ¿Cuál es el riesgo real en ese momento?",
    answer:
      "Que te emociones demasiado. La euforia hace que ganes confianza, aceleres sin darte cuenta y tu mente se vaya a la letra de la canción en lugar de a las señales de tráfico.",
  },
  {
    // Esta tarjeta actuará como plantilla para la pregunta trampa del final
    question: "",
    answer: "",
  },
];

// Función para barajar y preparar la pregunta trampa final
function prepararTarjetas() {
  // Solo sacamos la última tarjeta (la plantilla) para que no se mezcle
  const ultimaTarjeta = flashcards.pop();
  
  // Mezclamos TODAS las tarjetas restantes
  flashcards.sort(() => Math.random() - 0.5);
  
  // En este punto, la 5ª tarjeta está en el índice 4. 
  // Modificamos dinámicamente el texto de la plantilla.
  ultimaTarjeta.question = "<strong>Vamos a comprobar si has estado atento:</strong><br><br>" + flashcards[4].question;
  ultimaTarjeta.answer = flashcards[4].answer;
  
  // Ponemos la tarjeta trampa al final del todo
  flashcards.push(ultimaTarjeta);
}

// Preparamos las tarjetas la primera vez que carga el script
prepararTarjetas();

let currentIndex = 0;
let isAnimating = false;

const front = document.getElementById("front");
const back = document.getElementById("back");
const card = document.getElementById("card");
const progress = document.getElementById("progress");

function showCard() {
  front.innerHTML = flashcards[currentIndex].question;
  back.innerHTML = flashcards[currentIndex].answer;
  progress.textContent = `Tarjeta ${currentIndex + 1} de ${flashcards.length}`;
  card.classList.remove("flipped");
}

card.addEventListener("click", () => {
  if (!isAnimating) {
    card.classList.toggle("flipped");
  }
});

function changeCardWithAnimation(direction) {
  if (isAnimating) return;
  isAnimating = true;

  const wasFlipped = card.classList.contains("flipped");
  card.classList.remove("flipped");

  const flipDelay = wasFlipped ? 300 : 0;

  setTimeout(() => {
    const exitX = direction === 1 ? "-50px" : "50px";
    const entryX = direction === 1 ? "50px" : "-50px";

    card.style.transition = "transform 0.25s ease-in, opacity 0.25s ease-in";
    card.style.transform = `translateX(${exitX})`;
    card.style.opacity = "0";

    setTimeout(() => {
      currentIndex += direction;
      showCard();

      card.style.transition = "none";
      card.style.transform = `translateX(${entryX})`;

      void card.offsetWidth;

      card.style.transition =
        "transform 0.25s ease-out, opacity 0.25s ease-out";
      card.style.transform = "translateX(0px)";
      card.style.opacity = "1";

      setTimeout(() => {
        card.style.transition = "";
        card.style.transform = "";
        isAnimating = false;
      }, 250);
    }, 250);
  }, flipDelay);
}

function nextCard() {
  if (isAnimating) return;

  if (currentIndex < flashcards.length - 1) {
    changeCardWithAnimation(1);
  } else {
    showEndScreen();
  }
}

function prevCard() {
  if (isAnimating) return;

  if (currentIndex > 0) {
    changeCardWithAnimation(-1);
  }
}

function toggleNavButtons(show) {
  const btns = document.querySelectorAll("button");
  btns.forEach((btn) => {
    const action = btn.getAttribute("onclick");
    if (action === "nextCard()" || action === "prevCard()") {
      btn.style.display = show ? "inline-block" : "none";
    }
  });
}

function showEndScreen() {
  if (isAnimating) return;
  isAnimating = true;

  const wasFlipped = card.classList.contains("flipped");
  card.classList.remove("flipped");

  const flipDelay = wasFlipped ? 300 : 0;

  setTimeout(() => {
    card.style.transition = "transform 0.4s ease-in, opacity 0.4s ease-in";
    card.style.transform = "scale(0.8)";
    card.style.opacity = "0";

    setTimeout(() => {
      card.style.display = "none";
      toggleNavButtons(false);
      progress.textContent = "¡Completado!";

      let endScreen = document.getElementById("end-screen");

      if (!endScreen) {
        endScreen = document.createElement("div");
        endScreen.id = "end-screen";
        endScreen.style.textAlign = "center";
        endScreen.style.padding = "20px";

        endScreen.innerHTML = `
            <h2>¡Enhorabuena! 🎉</h2>
            <p>Has completado todas las preguntas sobre seguridad vial.</p>
            <button onclick="restart()" style="margin-top: 15px; padding: 10px 20px; cursor: pointer;">Volver a empezar</button>
        `;

        card.parentNode.insertBefore(endScreen, card.nextSibling);
      } else {
        endScreen.style.display = "block";
      }

      endScreen.style.opacity = "0";
      endScreen.style.transform = "translateY(20px)";
      endScreen.style.transition = "none";

      void endScreen.offsetWidth; 

      endScreen.style.transition =
        "transform 0.4s ease-out, opacity 0.4s ease-out";
      endScreen.style.opacity = "1";
      endScreen.style.transform = "translateY(0)";

      setTimeout(() => {
        isAnimating = false;
      }, 400);
    }, 400);
  }, flipDelay);
}

function restart() {
  prepararTarjetas();

  currentIndex = 0;
  isAnimating = false;

  card.style.transition = "none";
  card.style.opacity = "1";
  card.style.transform = "";
  
  void card.offsetWidth;

  card.style.transition = "";

  document.getElementById("end-screen").style.display = "none";

  card.style.display = "block";
  toggleNavButtons(true);

  showCard();
}

showCard();

// --- COMANDO OCULTO PARA TESTEAR (Ctrl + Q) ---
document.addEventListener("keydown", (event) => {
  // Comprueba si se pulsa la tecla Ctrl (o Cmd en Mac) y la letra 'q' (mayúscula o minúscula)
  if (event.ctrlKey || event.metaKey) {
    const tecla = event.key.toLowerCase();

    // Ctrl + Q: Salta a la última pregunta (20)
    if (tecla === "q") {
      event.preventDefault(); // Evita que el navegador haga algo por defecto
      if (isAnimating) return; // Evitamos romper animaciones
      
      currentIndex = flashcards.length - 1;
      showCard();
      console.log("Comando activado: Saltando a la última pregunta.");
    }

    // Ctrl + E (Alternativa a Ctrl+W): Salta a la pregunta 5
    if (tecla === "e") {
      event.preventDefault(); 
      if (isAnimating) return; 
      
      currentIndex = 4; // El índice 4 corresponde a la 5ª pregunta
      showCard();
      console.log("Comando activado: Saltando a la pregunta 5.");
    }
  }
});