const flashcards = [
  { word: "apple", translation: "яблоко" },
  { word: "banana", translation: "банан" },
  { word: "orange", translation: "апельсин" },
  { word: "cat", translation: "кот" },
  { word: "dog", translation: "собака" },
];

let currentIndex = 0;
let learnedCount = 0;

const flashcardElement = document.getElementById("flashcard");
const counterElement = document.getElementById("counter");

function displayWord() {
  flashcardElement.textContent = flashcards[currentIndex].word;
}

function displayTranslation() {
  flashcardElement.textContent = flashcards[currentIndex].translation;
}

function nextCard() {
  if (currentIndex < flashcards.length - 1) {
    currentIndex++;
    learnedCount++;
    counterElement.textContent = `Изучено: ${learnedCount}`;
    displayWord();
  } else {
    flashcardElement.textContent = "Вы изучили все слова!";
  }
}

document
  .getElementById("showTranslation")
  .addEventListener("click", displayTranslation);
document.getElementById("nextCard").addEventListener("click", nextCard);

displayWord();
