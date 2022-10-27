//This is the JavaScript 

function mudaNome() {
    document.querySelector(".cartao__container--nome").innerHTML =  document.getElementById("cardName").value;
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


    function mudaNumero () {
        const infoCartao = document.getElementById("cartao__inf")
       
        if (infoCartao.innerHTML.length < 20) {
            infoCartao.innerHTML =  document.getElementById("cardNumber").value;
        } else if ( document.getElementById("cardNumber").value.isNaN == true) {
            alert ("apenas numeros")
        }
        else {
            alert("Numero somente até 8 caracteres")
        }
    }
