var temp = 0;
let temp2 = 0;
responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");
responsiveVoice.setDefaultRate(1.2);
let podeFalar = false;

responsiveVoice.clickEvent();

function initCodificar(){
    if(codificar() == false){
        falarTexto("Corrija os erros");
        codificar();
    }else if(codificar() == 2){        
        falarTexto("Digite algo para Criptografar ou Descriptografar");
    }else if(codificar() == 3){        
        falarTexto("Texto Criptografado");
    }else{
        codificar();
    }
}

function codificar() {

    document.getElementById('alerta').style.color = '#495057';
    document.getElementById('red-exclamation').style.display = 'none';
    document.getElementById('exclamation').style.display = 'flex';
    
    var textoOriginal = document.getElementById('entrada-texto').value;
    var textoCodificado = "";
    var regexEspecial = /[^\u0000-\u007F]+/g; 

    let contemMaiuscula = /[A-Z]/.test(textoOriginal);

    if(textoOriginal == ""){
        mostrarImagens();
        return 2;
    }else{        
        for (var i = 0; i < textoOriginal.length; i++) {
            var letra = textoOriginal[i];
        
            if (regexEspecial.test(letra) || contemMaiuscula == true) {
                document.getElementById('alerta').style.color = 'red';
                document.getElementById('saida-texto').value = "";
                document.getElementById('exclamation').style.display = 'none';
                document.getElementById('red-exclamation').style.display = 'flex';
                return false;
            } else {
                letra.toLowerCase;
                switch (letra) {
                    case 'e':
                        textoCodificado += "enter";
                        break;
                    case 'i':
                        textoCodificado += "imes";
                        break;
                    case 'a':
                        textoCodificado += "ai";
                        break;
                    case 'o':
                        textoCodificado += "ober";
                        break;
                    case 'u':
                        textoCodificado += "ufat";
                        break;
                    default:
                        textoCodificado += letra;
                }
            }
        }
        
    }
    
    sumirImagens();
    document.getElementById('saida-texto').value = textoCodificado;
    return 3;
}

function decodificar() {
    var textoCodificado = document.getElementById('saida-texto').value.toLowerCase();
    var textoOriginal = "";

    for (var i = 0; i < textoCodificado.length; i++) {
        if (textoCodificado.substr(i, 5) === "enter") {
            textoOriginal += "e";
            i += 4;
        } else if (textoCodificado.substr(i, 4) === "imes") {
            textoOriginal += "i";
            i += 3;
        } else if (textoCodificado.substr(i, 2) === "ai") {
            textoOriginal += "a";
            i += 1;
        } else if (textoCodificado.substr(i, 4) === "ober") {
            textoOriginal += "o";
            i += 3;
        } else if (textoCodificado.substr(i, 4) === "ufat") {
            textoOriginal += "u";
            i += 3;
        } else {
            textoOriginal += textoCodificado[i];
        }
    }

    document.getElementById('saida-texto').value = textoOriginal;
    falarTexto('texto descriptografado');
}

function abrirMenu(){
    var x = document.getElementsByClassName('menu-header');

    if (temp2 == 0){
        for(var i = 0; i < x.length; i++){
            x[i].style.display = "flex";
        }
        temp2 += 1;
    }else{
        for(var i = 0; i < x.length; i++){
            x[i].style.display = "none";
        }

        temp2 -= 1;
    }
}    

function copiarTexto() {
    let textoSaida = document.getElementById('saida-texto').value;
    falarTexto("copiado para sua área de transferência");
    navigator.clipboard.writeText(textoSaida);
}

function falarTexto(texto){
    if(podeFalar){
        responsiveVoice.speak(texto);
        return;
    }
    return;
}

function sumirImagens(){
    document.getElementById('img1').style.display = "none";
    document.getElementById('text1').style.display = "none";
    document.getElementById('text2').style.display = "none";
    document.getElementById('saida-texto').style.display = 'flex';
    document.getElementById('button__descriptografar').style.display = 'block';
    document.getElementById('button__temp').style.display = 'none';
    document.getElementById('button__copiar').style.display = 'block';
}

function mostrarImagens(){
    document.getElementById('img1').style.display = "flex";
    document.getElementById('text1').style.display = "flex";
    document.getElementById('text2').style.display = "flex";
    document.getElementById('saida-texto').style.display = 'none';
    document.getElementById('button__descriptografar').style.display = 'block';
    document.getElementById('button__temp').style.display = 'none';
    document.getElementById('button__copiar').style.display = 'none';
}



function selecionarSpeak(){
    document.getElementById('blue').style.display = "none";
    document.getElementById('white').style.display = "flex";
    document.getElementById('white2').style.display = "none";
    document.getElementById('blue2').style.display = "flex";
    podeFalar = true;
}

function selecionarWrite(){
    document.getElementById('blue').style.display = "flex";
    document.getElementById('white').style.display = "none";
    document.getElementById('white2').style.display = "flex";
    document.getElementById('blue2').style.display = "none";
    podeFalar = false;
}