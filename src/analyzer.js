const analyzer = { //Funções para analisar o texto

  getWordCount: (text) => { //Esta função retornará a quantidade de palavras em uma string
    const qntpalavras = text.trim().split(' '); //Remove os espaços em branco da string usando trim() e divide a string em palavras usando split(' ')
    if (text === "") { //Verificando se a string está vazia 
      return 0 //Se a string estiver vazia retornará 0
    }
    return qntpalavras.length; //Caso contrário, retornará o comprimento do array de palavras

  },

  getCharacterCount: (text) => { //Esta função retornará a quantidade de caracteres em uma string
    return text.length; //Retorna o comprimento da string 
  },

  getCharacterCountExcludingSpaces: (text) => { //Esta função retornará a quantidade de caracteres excluindo espaços e sinais de pontuação em uma string
    const excluindoespaco = text.replace(/[\s.:,;!]/g, ''); //Remove espaços em branco e ".:,;!" com a RegExp .replace(/[\s.:,;!]/g, '')
    return excluindoespaco.length; //Retorna o comprimento da string sem espaços em branco e ".:,;!"
  },

  getAverageWordLength: (text) => { //Esta função retornará a média do comprimento das palavras em uma string
    const qntpalavras = text.split(' '); //Divide a string em palavras
    let sum = 0;
    for (let i = 0; i < qntpalavras.length; i++) {
      sum += qntpalavras[i].length; //Calcula a soma dos comprimentos das palavras
    }

    const comprimentomedio = (sum / qntpalavras.length).toFixed(2); //Divide a soma pelo número de palavras para encontrar a média, em seguida, o resultado é formatado com duas casas decimais usando toFixed(2)
    return Number(comprimentomedio); //Retorna convertido para número 
  },

  getNumberCount: (text) => { //Esta função retornará a contagem de números de uma string 
    const qntpalavras = text.replace(/.$/, ' ').split(' '); //Substitui todos os caracteres que não são números por espaços com a RegExp .replace(/.$/, ' ') e divide a string em palavras usando split(' ')
    let sum = 0;
    for (let i = 0; i < qntpalavras.length; i++) { //Loop para checar se no array de palavras há números 
      if (isNaN(qntpalavras[i]) === false && qntpalavras[i] !== '') { //Verifica se o elemento é um número e se a string não está vazia
        sum += 1; //Incrementa a contagem se for um número
      }
    }
    return sum;
  },

  getNumberSum: (text) => { //Esta função retornará a soma de todos os números de uma string
    //Similar ao getNumberCount, mas em vez de incrementar a contagem, incrementa a soma com o valor numérico da palavra
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

