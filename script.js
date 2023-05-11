//capturar mensaje
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

const caja = document.querySelector(".texto-mensaje");
const btnCopiar = document.querySelector(".copiar");

function removeAccents(text) {
    const sustitutions = {
      àáâãäå: "a",
      ÀÁÂÃÄÅ: "a",
      èéêë: "e",
      ÈÉÊË: "e",
      ìíîï: "i",
      ÌÍÎÏ: "i",
      òóôõö: "o",
      ÒÓÔÕÖ: "o",
      ùúûü: "u",
      ÙÚÛÜ: "u",
      ýÿ: "y",
      ÝŸ: "y",
      ß: "ss",
      ñ: "n",
      Ñ: "n"
    };
    // Devuelve un valor si 'letter' esta incluido en la clave
    function getLetterReplacement(letter, replacements) {
      const findKey = Object.keys(replacements).reduce(
        (origin, item, index) => (item.includes(letter) ? item : origin),
        false
      );
      return findKey !== false ? replacements[findKey] : letter;
    }
    // Recorre letra por letra en busca de una sustitución
    return text
      .split("")
      .map((letter) => getLetterReplacement(letter, sustitutions))
      .join("");
  }

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
    stringEncriptada = removeAccents(stringEncriptada.toLowerCase());

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
    stringDesencriptada = removeAccents(stringDesencriptada.toLowerCase());

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