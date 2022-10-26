//This is the JavaScript 

var nome =  document.querySelector(".cartao__info")
var entrada =  document.getElementById("cardName").value


nome.innerHTML = "entrada de usuario" 

nome.textContent = entrada

function F() {
    console.log(entrada)
}