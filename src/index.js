import analyzer from './analyzer.js';

const textarea = document.querySelector('[name="user-input"]');

const wordcount = document.querySelector('[data-testid = "word-count"]');
const charactercount = document.querySelector('[data-testid = "character-count"]');
const characternospacescount = document.querySelector('[data-testid = "character-no-spaces-count"]');
const numbercount = document.querySelector('[data-testid = "number-count"]');
const numbersum = document.querySelector('[data-testid = "number-sum"]');
const wordlengthaverage = document.querySelector('[data-testid = "word-length-average"]');

textarea.addEventListener("input", analise);

function analise(){
  const text = textarea.value;

  wordcount.innerHTML = "Palavras: " + analyzer.getWordCount(text);
  charactercount.innerHTML = "Caracteres: " + analyzer.getCharacterCount(text);
  characternospacescount.innerHTML = "Caracteres excluindo espaços e sinais de pontuação: " + analyzer.getCharacterCountExcludingSpaces(text);
  numbercount.innerHTML = "Números: " + analyzer.getNumberCount(text);
  numbersum.innerHTML = "Soma total de números: " + analyzer.getNumberSum(text);
  wordlengthaverage.innerHTML = "Comprimento médio das palavras: " + analyzer.getAverageWordLength(text);
}

document.getElementById('reset-button').addEventListener('click', () => {
  textarea.value = '';
  analise();
});