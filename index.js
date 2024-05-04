class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  isCorrectAnswer(choice) {
    return choice === this.answer;
  }
}
const questions = [
  new Question(
    "Qui a écrit 'Les Misérables' ?",
    ["Victor Hugo", "Gustave Flaubert", "Émile Zola", "Albert Camus"],
    "Victor Hugo"
  ),
  new Question(
    "Qui a découvert la pénicilline ?",
    ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Albert Einstein"],
    "Alexander Fleming"
  ),
  new Question(
    "Quel est le compositeur de la 'Symphonie du Nouveau Monde' ?",
    [
      "Johann Sebastian Bach",
      "Ludwig van Beethoven",
      "Antonín Dvořák",
      "Wolfgang Amadeus Mozart",
    ],
    "Antonín Dvořák"
  ),
  new Question(
    "Quel philosophe a écrit 'Être et Temps', une œuvre majeure de la philosophie existentialiste ?",
    [
      "Jean-Paul Sartre",
      "Friedrich Nietzsche",
      "Martin Heidegger",
      "Albert Camus",
    ],
    "Martin Heidegger"
  ),
  new Question(
    "Qui a peint 'La Nuit étoilée', une célèbre œuvre d'art post-impressionniste ?",
    ["Vincent van Gogh", "Claude Monet", "Pablo Picasso", "Salvador Dalí"],
    "Vincent van Gogh"
  ),
  new Question(
    "Quel est le nom de la théorie scientifique qui propose que toutes les formes de vie sur Terre partagent un ancêtre commun ?",
    ["Créationnisme", "Évolutionnisme", "Big Bang", "Théorie de l'abiogenèse"],
    "Évolutionnisme"
  ),
  new Question(
    "Quel est le nom du dispositif qui a été utilisé pour décoder les communications allemandes pendant la Seconde Guerre mondiale, considéré comme un élément clé dans la victoire des Alliés ?",
    ["Enigma", "Cipher", "Codebreak", "Decrypter"],
    "Enigma"
  ),
  new Question(
    "Quel auteur a écrit le roman dystopique '1984', décrivant une société totalitaire surveillée en permanence par un régime autoritaire ?",
    ["Aldous Huxley", "Ray Bradbury", "George Orwell", "Margaret Atwood"],
    "George Orwell"
  ),
  new Question(
    "Quelle est la période de l'histoire de l'Égypte antique durant laquelle les grandes pyramides de Gizeh ont été construites ?",
    [
      "Période pré-dynastique",
      "Ancien Empire",
      "Moyen Empire",
      "Nouvel Empire",
    ],
    "Ancien Empire"
  ),
  new Question(
    "Qui a découvert la structure en double hélice de l'ADN en 1953, une avancée majeure dans la biologie moléculaire ?",
    [
      "James Watson et Francis Crick",
      "Gregor Mendel",
      "Rosalind Franklin",
      "Linus Pauling",
    ],
    "James Watson et Francis Crick"
  ),
  new Question(
    "Quel est le nom du concept économique selon lequel une augmentation de la masse monétaire entraîne une augmentation proportionnelle des prix, maintenant le pouvoir d'achat constant ?",
    ["Inflation", "Déflation", "Hyperinflation", "Stagflation"],
    "Inflation"
  ),
  new Question(
    "Quelle est la durée approximative d'un jour sidéral, mesurée par rapport aux étoiles fixes, sur Terre ?",
    [
      "23 heures 56 minutes",
      "24 heures",
      "23 heures 48 minutes",
      "24 heures 6 minutes",
    ],
    "23 heures 56 minutes"
  ),
  new Question(
    "Qui a écrit le roman 'Crime et Châtiment', explorant les aspects psychologiques de la culpabilité et de la rédemption dans la Russie du XIXe siècle ?",
    ["Fiodor Dostoïevski", "Léon Tolstoï", "Anton Tchekhov", "Nikolaï Gogol"],
    "Fiodor Dostoïevski"
  ),
  new Question(
    "Quelle est la distance moyenne entre la Terre et le Soleil, exprimée en kilomètres ?",
    [
      "150 millions de km",
      "100 millions de km",
      "200 millions de km",
      "75 millions de km",
    ],
    "150 millions de km"
  ),
  new Question(
    "Qui a écrit 'Le Petit Prince', un conte philosophique traduit dans de nombreuses langues et apprécié par les lecteurs du monde entier ?",
    [
      "Antoine de Saint-Exupéry",
      "Voltaire",
      "Jean-Jacques Rousseau",
      "Gustave Flaubert",
    ],
    "Antoine de Saint-Exupéry"
  ),
  new Question(
    "Quel est le nom de la première femme pilote à avoir traversé l'Atlantique en solitaire ?",
    ["Amelia Earhart", "Jacqueline Auriol", "Beryl Markham", "Harriet Quimby"],
    "Amelia Earhart"
  ),
  new Question(
    "Quelle est la plus grande mer du monde en superficie ?",
    [
      "La mer Méditerranée",
      "La mer des Caraïbes",
      "La mer Rouge",
      "La mer Caspienne",
    ],
    "La mer Caspienne"
  ),
  new Question(
    "Quel est le nom du scientifique qui a formulé les lois du mouvement et la loi de la gravitation universelle ?",
    ["Isaac Newton", "Galileo Galilei", "Johannes Kepler", "Albert Einstein"],
    "Isaac Newton"
  ),
  new Question(
    "Quelle est la période de l'histoire japonaise qui a vu le pouvoir centralisé sous les shoguns et une longue période de paix relative ?",
    [
      "Le Shogunat Tokugawa",
      "L'ère Meiji",
      "L'époque d'Edo",
      "La période Heian",
    ],
    "Le Shogunat Tokugawa"
  ),
  new Question(
    "Qui est le célèbre mathématicien et philosophe grec, considéré comme le père de la géométrie ?",
    ["Euclide", "Pythagore", "Archimède", "Aristote"],
    "Euclide"
  ),
  new Question(
    "Qui est l'auteur de 'La Divine Comédie', une œuvre majeure de la littérature italienne ?",
    [
      "Dante Alighieri",
      "Pétrarque",
      "Giovanni Boccaccio",
      "Niccolò Machiavelli",
    ],
    "Dante Alighieri"
  ),
  new Question(
    "Quel est le nom du théoricien politique anglais qui a écrit 'Léviathan' et est souvent considéré comme l'un des fondateurs du contrat social moderne ?",
    ["Thomas Hobbes", "John Locke", "Jean-Jacques Rousseau", "Voltaire"],
    "Thomas Hobbes"
  ),
  new Question(
    "Quel est le nom de l'explorateur portugais qui a été le premier Européen à atteindre l'Inde par voie maritime en contournant le cap de Bonne-Espérance, ouvrant ainsi une nouvelle route maritime vers l'Asie ?",
    ["Vasco de Gama", "Christophe Colomb", "Ferdinand Magellan", "James Cook"],
    "Vasco de Gama"
  ),
  new Question(
    "Quelle est la capitale de l'Afrique du Sud ?",
    ["Le Cap", "Johannesburg", "Pretoria", "Durban"],
    "Pretoria"
  ),
  new Question(
    "Quel est le nom de l'homme politique et dirigeant militaire français qui a mené les forces alliées à la victoire pendant la Première Guerre mondiale ?",
    [
      "Georges Clemenceau",
      "Charles de Gaulle",
      "Philippe Pétain",
      "Joseph Joffre",
    ],
    "Georges Clemenceau"
  ),
];

window.addEventListener("load", () => {
  this.alert(
    "Entrez votre nom pour enregistrer votre score dans le classement!"
  );
});
// fonction recuperer le pseudo depuis l input
getPseudoFromInput = () => {
  return document.getElementById("nom").value;
};

class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }
  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  guess(answer) {
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }
  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}

// Quiz diplay
const display = {
  elementShown: function (id, text) {
    let element = document.getElementById(id);
    element.innerHTML = text;
  },
  question: function () {
    this.elementShown("question", quiz.getCurrentQuestion().text);
  },
  choices: function () {
    let choices = quiz.getCurrentQuestion().choices;

    guessHandler = (id, guess) => {
      document.getElementById(id).onclick = function () {
        quiz.guess(guess);
        quizApp();
      };
    };
    // Affichage des choix + prise en compte du choix
    for (let i = 0; i < choices.length; i++) {
      this.elementShown("choice" + i, choices[i]);
      guessHandler("guess" + i, choices[i]);
    }
  },
  progress: function () {
    this.elementShown(
      "progress",
      `Question ${quiz.currentQuestionIndex + 1} sur ${quiz.questions.length}`
    );
  },
  loadScores: function () {
    let scores = JSON.parse(localStorage.getItem("scores"));
    return scores || {};
  },
  endQuiz: function (pseudo) {
    let endQuizHTML = `
    <h1>Quiz terminé ! </h1>
    <h3> Bravo ${pseudo} votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>
    <button id="restartButton" >Retour <i class="fas fa-arrow-left"></i></button>
    `;

    // Enregistrer le score dans le localStorage
    this.enregistrerScore(pseudo, quiz.score);

    // Récupérer les scores depuis le localStorage
    let scores = JSON.parse(localStorage.getItem("scores"));

    // Construire le classement des scores
    if (scores) {
      endQuizHTML += "<h2>Classement :</h2>";
      let classement = Object.entries(scores).sort((a, b) => b[1] - a[1]);
      classement.forEach((score, index) => {
        endQuizHTML += `<p>${index + 1}. ${score[0]} - ${score[1]} / ${
          quiz.questions.length
        }</p>`;
      });
    } else {
      endQuizHTML += "<p>Pas de classement disponible pour le moment.</p>";
    }
    this.elementShown("quiz", endQuizHTML);

    document.getElementById("restartButton").addEventListener("click", () => {
      this.restartQuiz();
    });
  },
  restartQuiz: function () {
    location.reload();
  },
  // Méthode pour enregistrer le score dans le localStorage
  enregistrerScore: function (pseudo, score) {
    let scores = {};

    // Vérifier s'il existe déjà des scores dans le localStorage
    if (localStorage.getItem("scores")) {
      // Si oui, récupérer les scores et les convertir en objet JavaScript
      scores = JSON.parse(localStorage.getItem("scores"));
    }

    // Ajouter le nouveau score avec le nom de l'utilisateur
    scores[pseudo] = score;

    // Convertir l'objet scores en chaîne JSON et le stocker dans le localStorage
    localStorage.setItem("scores", JSON.stringify(scores));
  },
};
// Fonction pour mélanger un tableau de manière aléatoire
function shuffleQuestions(questions) {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
  return questions;
}

// Game logic
quizApp = () => {
  let pseudo = getPseudoFromInput();
  if (quiz.hasEnded()) {
    display.endQuiz(pseudo);
  } else {
    display.question();
    display.choices();
    display.progress();
  }
};
// effacer le classement
// localStorage.removeItem("scores");
// Create Quiz
let quiz = new Quiz(questions);
let pseudo = getPseudoFromInput();
shuffleQuestions(questions);
quizApp(pseudo);
