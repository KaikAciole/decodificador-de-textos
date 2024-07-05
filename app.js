var textoEntrada = document.getElementById('entrada-texto').value;
var textoSaida = document.getElementById('saida-texto');
var botaoCodificar = document.getElementById('button__criptografar');
var botaodecodificar = document.getElementById('button__descriptografar');

var temp = 0;

function initCodificar(){
    if(temp == 0){
        temp += 1;
        var sumir1 = document.getElementById('img1');
        var sumir2 = document.getElementById('text1');
        var sumir3 = document.getElementById('text2');
        var show = document.getElementById('saida-texto');
    
        sumir1.style.display = "none";
        sumir2.style.display = "none";
        sumir3.style.display = "none";
        show.style.display = "flex";
        codificar();
    }else{
        codificar();
    }
}


function codificar() {
    var textoOriginal = document.getElementById('entrada-texto').value.toLowerCase();
    var textoCodificado = "";
    var regexEspecial = /[^\w\s]/g; // Expressão regular para caracteres especiais

    for (var i = 0; i < textoOriginal.length; i++) {
        var letra = textoOriginal[i];
    
        if (regexEspecial.test(letra)) {
            continue; // Ignora caracteres especiais
        }
    
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
    
    document.getElementById('saida-texto').value = textoCodificado;
    
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
}
