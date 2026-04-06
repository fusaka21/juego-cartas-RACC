const flashcards = [
  {
    question: "¿Cuál es la principal causa de accidentes?",
    answer:
      'Las distracciones al volante, como comprueba el estudio de<a href="https://revista.dgt.es/es/noticias/nacional/2023/05MAYO/0510-Linea-Directa-Distracciones.shtml"> Línea directa y la DGT</a>',
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
      "¿Cuál crees que es la distracción más peligrosa cuando conduces?",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
];

let currentIndex = 0;

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
    card.classList.toggle("flipped");
});

function nextCard() {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        showCard();
    }
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        showCard();
    }
}

showCard();