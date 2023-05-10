//capturar mensaje
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

const caja = document.querySelector(".texto-mensaje");
const btnCopiar = document.querySelector(".copiar");


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    //textArea.value = "";
    if(textArea.value == ''){
        alert('El campo esta vacio');
    }else{
        mensaje.style.backgroundImage = "none";
        caja.style.visibility = 'hidden';
        btnCopiar.style.visibility = 'visible';
    }

}

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    //textArea.value = "";
    if(textArea.value == ''){
        alert('El campo esta vacio');
        return false;
    }else{
        mensaje.style.backgroundImage = "none";
        caja.style.visibility = 'hidden';
        btnCopiar.style.visibility = 'visible';
    }
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function btnCopy(){
    navigator.clipboard.writeText(mensaje.value);
    //btnCopiar.value = 'Copiado';
    console.log('copiado');
    setTimeout(() =>{
        btnCopiar.value = 'Texto copiado';
    }, 1000)

    //$.jGrowl("Texto copiado",{ life : 2000});
}