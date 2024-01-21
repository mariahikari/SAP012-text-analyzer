

const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const qntpalavras = text.trim().split(' '); 
    if (text === ""){
      return 0
    }
    return qntpalavras.length;

  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const excluindoespaco = text.replace(/[\s.:,;!]/g, '');
    return excluindoespaco.length;

  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const qntpalavras = text.split(' ');
    let sum = 0;
    for (let i = 0; i < qntpalavras.length; i++) {
      sum += qntpalavras[i].length;
    }

    const comprimentomedio = (sum / qntpalavras.length).toFixed(2);
    return Number(comprimentomedio);

  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const qntpalavras = text.replace(/.$/, ' ').split(' ');
    let sum = 0;
    for (let i = 0; i < qntpalavras.length; i++) {
      if (isNaN(qntpalavras[i]) === false && qntpalavras[i] !== '') {
        sum += 1;
      }

    }
    return sum;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const qntpalavras = text.replace(/.$/, ' ').split(' ');
    let sum = 0;
    for (let i = 0; i < qntpalavras.length; i++) {
      if (isNaN(qntpalavras[i]) === false) {
        sum += Number(qntpalavras[i]);
      }

    }
    return sum;
  },
};

export default analyzer;

