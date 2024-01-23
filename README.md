# Projeto: Analisador de Texto

## Índice

- [👩‍💻 Projeto](#-projeto)
- [🧠 Funcionalidades](#-funcionalidades)
- [💻 Tecnologias](#-tecnologias)
- [🔎 Testes](#-testes)
- [♻️ Como contribuir](#-como-contribuir)
- [💁‍♀️ Autora](#-autora)

---


## 👩‍💻 Projeto
      
Neste projeto, desenvolvi uma aplicação web que permite os usuários digitar um texto e realizar análises instantâneas no navegador, o foco dos indicadores é fornecer métricas detalhadas sobre caracteres, letras e números, de forma que a aplicação oferece uma experiência intuitiva e eficiente para entender a composição textual.

Criado durante o **Bootcamp Programação Web da [Laboratória](https://www.laboratoria.la/br)**, este projeto tem como objetivo principal proporcionar um ambiente prático e desafiador para o aprendizado de HTML, CSS e JavaScript. 

Ao longo do desenvolvimento, explorei conceitos de desenvolvimento web, desenvolvi habilidades de codificação e apliquei metodologias ágeis para garantir a entrega do projeto.

Agradeço à Laboratória por proporcionar uma experiência enriquecedora e desafiadora.


## 🧠 Funcionalidades

A lista de funcionalidades do Analisador de Texto é a seguinte:

1. A aplicação permite que o usuário insira um texto digitando-o em uma caixa de texto.

2. A aplicação calcula as seguintes métricas e atualizar o resultado em tempo real conforme o usuário escreve o texto:

    - **Contagem de palavras**: Retorna o número de palavras no texto de entrada.
      
    - **Contagem de caracteres**: Retorna o número de caracteres no texto de entrada, incluindo espaços e sinais de pontuação.
      
    - **Contagem de caracteres excluindo espaços e sinais de pontuação**: Retorna o número de caracteres no texto de entrada, excluindo espaços e sinais de pontuação.
      
    - **Contagem de números**: Retorna a quantidade de números do texto de entrada.
      
    - **Soma total dos números**: Retorna a soma de todos os números que estão no texto de entrada.
      
    - **Comprimento médio das palavras**: Retorna o comprimento médio das palavras do texto de entrada.


3. A aplicação permite limpar o conteúdo da caixa de texto e zera as métricas ao clicar no botão "Limpar".

![img](https://github.com/Laboratoria/SAP012-text-analyzer/assets/152895146/49ad229a-4544-4665-ac13-b658e51065ae)


## 💻 Tecnologias 

  + HTML
  + CSS
  + JavaScript


## 🔎 Testes

Este projeto conta com **3 conjuntos de testes** que ajudarão a verificar se os critérios mínimos de aceitação são cumpridos.

### Testes Unitários

No teste unitário cada unidade de código será testada separadamente para garantir que atenda aos requisitos e especificações.

Os testes unitários deste projeto executarão os métodos `getWordCount`, `getCharacterCount`, `getCharacterCountExcludingSpaces`, `getNumbersCount`, `getNumbersSum` e `getAverageWordLength` com diferentes argumentos e verificarão se os valores retornados são os esperados.

Você pode executar esses testes com o comando `npm run test`.

  + O _boilerplate_ inclui tarefas que executam [eslint](https://eslint.org/) e [htmlhint](https://github.com/yaniswang/HTMLHint) para verificar o `HTML` e o `JavaScript` em relação a diretrizes de estilo. Ambas as tarefas são executadas automaticamente antes de executar os testes unitários ao usar o comando `npm run test`.
  + No caso do `JavaScript`, é utilizado um arquivo de configuração do `eslint` chamado `.eslintrc`, que contém informações mínimas sobre o parser a ser usado (qual versão do JavaScript/ECMAScript), o ambiente (navegador neste caso) e as [regras recomendadas (`eslint:recommended`)](https://eslint.org/docs/rules/).
  + Em relação às próprias regras/diretrizes de estilo, seguirá as recomendações _padrão_ tanto do `eslint` quanto do `htmlhint`.

### Testes de Critérios Mínimos de Aceitação

Para verificar se os critérios mínimos de aceitaçã são cumprido os testes analisarão os arquivos:
[`index.html`](src/index.html),
[`index.js`](src/index.html),
[`analyzer.js`](src/analyzer.js)
[`style.css`](src/style.css)

Você pode executar todos esses testes com o comando `npm run test:oas`

Você também pode executar os testes de cada grupo de objetivos de aprendizado individualmente com os seguintes comandos:

- `npm run test:oas-html`
- `npm run test:oas-css`
- `npm run test:oas-web-api`
- `npm run test:oas-js`

#### Testes End-to-End

Será testado o fluxo completo do software, simulando a interação da usuária com a aplicação, para garantir que todas as partes do sistema funcionem corretamente em conjunto.

Você pode executar esses testes com o comando `npm run test:e2e`.

### GitHub Actions

Este repositório usa o GitHub Actions para executar automaticamente os testes unitários, testes de critérios mínimos de aceitação e testes end-to-end toda vez que você fizer um _push_ no ramo _main_ do seu repositório.

Você pode verificar o resultado desta GitHub Action na aba _Actions_ do seu repositório no GitHub.


## ♻️ Como contribuir 

```bash
# Clone o Projeto
$ git clone https://github.com/mariahikari/SAP012-text-analyzer.git
```

```bash
# Entre no Diretório
$ cd SAP012-text-analyzer
```

```bash
# Instale a Dependência
$ npm install
```


## 💁‍♀️ Autora

Sinta-se à vontade para contribuir, relatar problemas ou sugerir melhorias. 

Obrigado por usar meu Analisador de Texto!


<a href="https://github.com/mariahikari">
<img src="Autora.jpg" width="90px"
<br>
<br>
  <sub><b>Maria Hikari</b></sub></a>






