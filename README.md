# Script Inútil para passar as propaganda do Youtube automaticamente / Useless script to pass Youtube advertisements automatically #

## Propósito/Purpose ##
Passa automaticamente as propaganda do youtube, ou seja, o clica no botão.
Automatically passes youtube ads, ie clicks the button.

## Limitações/Limitations ##
- Só Testei no Firefox / I only tested on firefox

## Funcionalidade/ Functionality ##
- botão para ver as propagandas /button to see the advertisements

## Pré-requisitos/Prerequisites ##
1. Mozilla Firefox
2. TamperMonkey

### TamperMonkey ###
1. Abra https://github.com/dhelly/youtubecommercial/blob/master/Youtubesempropaganda.user.js
2. Salve o script em uma pasta de sua perferência
3. Arraste o script para o firefox e selecione a opção instalar

[TamperMonkey]: https://addons.mozilla.org/pt-BR/firefox/addon/tampermonkey/

## Option 2 ###
In case you did not want to install Tampermonkey. Below is the script for you to run directly through the console.
Caso você não queria instalar o Tampemonkey. Abaixo tem o script para você rodar diretamente pelo console.

```
var myVar = setInterval(clicando, 1000);

function clicando() {  

    var botao = $('.ytp-ad-skip-button-text');
    if(botao != null){
      $('.ytp-ad-skip-button-text').click();
    }
}

function stopclick() {
  clearInterval(myVar);
}
```


