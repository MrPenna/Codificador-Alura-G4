//primero hay que dar de alta estas para que puedan ser usadas
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//este es el enctiptador
function btnEncriptar(){
  const textoEncriptado = encriptar(textArea.value)
  mensaje.value = textoEncriptado
  textArea.value = ""; //esta madre borra el texto
  mensaje.style.backgroundImage ="none"; //y esto la imagen :o
}

//este da de alta la lista de caracteres a encriptar
function encriptar(stringEncriptado){
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  stringEncriptado = stringEncriptado.toLowerCase()
// y este otro es el que lo mueve de posicion 0 a 1
  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptado.includes(matrizCodigo[i][0])){
      stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

    }
  }
  return stringEncriptado
}

// el Desencriptador, lo mismo que el anterior pero al revez, de 1 a 0
function btnDesencriptar(){
  const textoEncriptado = desencriptar(textArea.value)
  mensaje.value = textoEncriptado
  textArea.value = "";
  mensaje.style.backgroundImage ="none";
}

function desencriptar(stringDesencriptado){
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  stringDesencriptado = stringDesencriptado.toLowerCase()

  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringDesencriptado.includes(matrizCodigo[i][1])){
      stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

    }
  }
  return stringDesencriptado
}

//console.table(matrizCodigo);
