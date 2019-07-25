// ==UserScript==
// @name         Youtubesempropaganda
// @namespace    inutil
// @version      0.1
// @description  try to take over the world!
// @author       inutil
// @include      https://www.youtube.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant        GM_log
// ==/UserScript==

(function(){
    'use strict';
    var $ = window.jQuery;
    console.log('Iniciando o script');
    var myVar = setInterval(press, 1000);

        function press() {
            <!-- console.log('verificando'); !>
            var botao = $('.ytp-ad-skip-button-text');
            if(botao !== null){
                $('.ytp-ad-skip-button-text').click();
            }
        }

        function stopClick() {
            console.log('Encerrando');
            clearInterval(myVar);
        }
        <!-- var inputStart=document.createElement("input"); !>
        var inputStop=document.createElement("input");
        <!-- inputStart.type="button"; !>
        inputStop.type="button";
        <!-- inputStart.value="Start"; !>
        inputStop.value="Ver Inutil";
        <!-- inputStart.onclick = press; !>
        inputStop.onclick = stopClick;
        var pos = document.getElementById('container');
        <!-- pos.appendChild(inputStart); !>
        pos.appendChild(inputStop);
}());
