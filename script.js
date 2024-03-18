function encriptar () {

    let texto = document.getElementById("texto").value;
    if (/[A-Z]/.test(texto)) {
        window.alert("No se permiten letras mayúsculas.");
        return;
    }

    if (/[!@#$%^&*()_+{}\[\]:;<>,.?\/\\~`\-="']/.test(texto)) {
        window.alert("No se permiten caracteres especiales.");
        return;
    }
//se remplaza
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


    var textocifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
//indicar que ingrese el texto
    if(texto.length != 0){
        document.querySelector(".receptor").value = textocifrado;
    }else{
        window.alert ("Ingresa lo que quieras codificar por favor")
    }
}

//lo mismo pero para desencriptar
function desencriptar(){
    let texto = document.getElementById("texto").value;
    var textocifrado =  texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    if(texto.length != 0){
    document.querySelector(".receptor").value = textocifrado;
    }else{
        window.alert("Ingresa lo que quieras codificar por favor")
    }
}
