var temp = 0;
let temp2 = 0;

function initCodificar(){
    if(temp == 0){
        temp += 1;
        var sumir1 = document.getElementById('img1');
        var sumir2 = document.getElementById('text1');
        var sumir3 = document.getElementById('text2');
        var show = document.getElementById('saida-texto');
        var buttonDec = document.getElementById('button__descriptografar');
        var buttonTemp = document.getElementById('button__temp');
        
        sumir1.style.display = "none";
        sumir2.style.display = "none";
        sumir3.style.display = "none";
        show.style.display = "flex";
        buttonTemp.style.display = "none"
        buttonDec.style.display = 'block';
        
        codificar();
    }else{        
        codificar();
        temp = 1;
    }
}


function codificar() {
    var textoOriginal = document.getElementById('entrada-texto').value.toLowerCase();
    var textoCodificado = "";
    var regexEspecial = /[^\u0000-\u007F]+/g; // Expressão regular para caracteres especiais (incluindo acentos)

    for (var i = 0; i < textoOriginal.length; i++) {
        var letra = textoOriginal[i];
    
        if (regexEspecial.test(letra)) {
            alert("Você usou letras maiúsculas ou acentos!\nVamos ignorar esses caracteres.");
            continue; // Ignora caracteres especiais
        } else {
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
