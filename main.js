//This is the JavaScript 

function mudaNome() {
    document.querySelector(".cartao__container--nome").innerHTML =  document.getElementById("cardName").value;
}

function mudaNumero () {
        document.getElementById("cartao__inf").innerHTML =  document.getElementById("cardNumber").value;
}


function mudaMes () {
    document.querySelector(".cartao__container--data").innerHTML = `${document.getElementById("dateMonth").value}/${document.getElementById("dateYear").value}`;
}


function mudaAno () {
    document.querySelector(".cartao__container--data").innerHTML = `${document.getElementById("dateMonth").value}/${document.getElementById("dateYear").value}`;
}

function mudaCvc () {
    document.querySelector(".cartao-tras__cvc").innerHTML = document.getElementById("securityCode").value;
}