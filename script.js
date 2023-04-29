const copiar = document.querySelector('#button');
const texto = document.querySelector('#texto');
const pegar = document.querySelector('#button2');
const bin = document.querySelector('#bin');
const borrar = document.querySelector('#button3');
const encriptar = document.querySelector('#button4');
const desencriptar = document.querySelector('#button5');

const mapObj1 = {
    e: "enter",
    E: "ENTER",
    i: "imes",
    I: "IMES",
    a: "ai",
    A: "AI",
    o: "ober",
    ó: "ober",
    O: "OBER",
    u: "ufat",
    U: "UFAT"
    };

const mapObj2 = {
    enter: "e",
    ENTER: "E",
    imes: "i",
    IMES: "I",
    ai: "a",
    AI: "A",
    ober: "o",
    OBER: "O",
    ufat: "u",
    UFAT: "U"
};



//BUTTON FUNCTIONALITIS

copiar.addEventListener('click',function(){
    bin.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
});

pegar.addEventListener('click', async () => {
  try {
    const text = await navigator.clipboard.readText()
    document.querySelector('#texto').value += text;
    console.log('Texto pegado!');
  } catch (error) {
    console.log('Failed to read clipboard. Using execCommand instead.');
    document.querySelector('textarea').focus();
    const result = document.execCommand('paste')
    console.log('document.execCommand result: ', result);
  }
});

borrar.addEventListener('click',function(){
    var erase = document.getElementsByClassName('contenedor');
    for(var i = 0; i < erase.length; i++){
        if (erase[i].value !="") {
            erase[i].value = "";
        }
    }
});

encriptar.addEventListener('click',function(){
    var str = document.getElementById("texto").value;
    encriptedStr = str.replace(/(?:e|E|i|I|a|A|o|ó|O|u|U)/g, matched => mapObj1[matched]);
    bin.value = encriptedStr;
});

desencriptar.addEventListener('click',function(){
    var str = document.getElementById("texto").value;
    decriptedStr = encriptedStr.replace(/(?:enter|ENTER|imes|IMES|ai|AI|ober|OBER|ufat|UFAT)/g, matched => mapObj2[matched]);
    bin.value = decriptedStr;
});








