import analyzer from './analyzer.js'; // Importa o módulo analyzer do arquivo "analyzer.js" que contém as funções de analise do testo

//As constantes abaixo selecionam os elementos do DOM usando document.querySelector, tais elementos correspondem a componentes na página HTML com os resultados da análise de texto
const textarea = document.querySelector('[name="user-input"]');
const wordcount = document.querySelector('[data-testid = "word-count"]');
const charactercount = document.querySelector('[data-testid = "character-count"]');
const characternospacescount = document.querySelector('[data-testid = "character-no-spaces-count"]');
const numbercount = document.querySelector('[data-testid = "number-count"]');
const numbersum = document.querySelector('[data-testid = "number-sum"]');
const wordlengthaverage = document.querySelector('[data-testid = "word-length-average"]');

textarea.addEventListener("input", analise); //Adiciona um ouvinte de evento à textarea e o evento input é acionado sempre que o conteúdo da textarea é alterado

function analise(){ //Esta função será chamada sempre que o usuário digitar no textarea
  const text = textarea.value; //Obtém o valor do texto do textarea
  
  //Abaixo são chamadas as funções do "analyzer" para analisar o texto e o conteúdo dos elementos no DOM com os resultados da análise são atualizados
  wordcount.innerHTML = "Palavras: " + analyzer.getWordCount(text);
  charactercount.innerHTML = "Caracteres: " + analyzer.getCharacterCount(text);
  characternospacescount.innerHTML = "Caracteres excluindo espaços e sinais de pontuação: " + analyzer.getCharacterCountExcludingSpaces(text);
  numbercount.innerHTML = "Números: " + analyzer.getNumberCount(text);
  numbersum.innerHTML = "Soma total de números: " + analyzer.getNumberSum(text);
  wordlengthaverage.innerHTML = "Comprimento médio das palavras: " + analyzer.getAverageWordLength(text);
}

document.getElementById('reset-button').addEventListener('click', () => { //Adiciona um ouvinte de evento ao botão reset que, quando clicado, limpa o conteúdo do textarea 
  textarea.value = '';
  analise(); //Redefine os resultados da análise do texto
});
