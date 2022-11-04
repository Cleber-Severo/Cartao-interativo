//This is the JavaScript 

//declarando as variaveis globais
const formulario = document.querySelector(".formulario")
const resetBtn = document.getElementById("confirma-reseta")

//chama os inputs e seleciona o que está sendo alterado pelo usuario
formulario.addEventListener('input', function (e) {
    switch (e.target.id) {
        case 'cardName':
            mudaNome();
            break;
        case 'cardNumber':
            mudaNumero();
            break;
        case 'dateMonth':
            mudaData();
            break;
        case 'dateYear':
            mudaData();
            break;
        case 'securityCode':
            mudaCvc();
            break;
    }
});


//Validações ao realizar o submit
formulario.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();
    let formulario_confirma = mudaNome() && mudaNumero() && mudaData() && mudaCvc()
    
    if (formulario_confirma === true){
        document.querySelector(".principalF").style.display = "none"
        document.querySelector(".completo").style.display = "inline-block"
    }
    
})

//Botão de reset
resetBtn.addEventListener("click", function (){
    formulario.submit()
    document.querySelector(".principalF").style.display = "block" //muda a visibilidade do formulario para block
    document.querySelector(".completo").style.display = "none" //esconde tela de completo
})

//input sucesso, valores corretos para submit
function sucesso(entrada) {
            entrada.classList.remove('formulario__entrada');
            entrada.classList.remove('formulario__entrada--erro');
            entrada.classList.add('formulario__entrada--sucesso');
        }

//input erro, valores incorretos
function erro(entrada) {
        entrada.classList.remove('formulario__entrada');
        entrada.classList.remove('formulario__entrada--sucesso');
        entrada.classList.add('formulario__entrada--erro');
    }


function mudaNome() {
    const nome = document.getElementById("cardName")
    const nomeCartao = document.querySelector(".cartao__container--nome") 
     
    if (nome.value == '') {
        document.getElementById("erroNome").innerHTML = "não pode ser nulo"
        erro(nome)
    } else {
        nomeCartao.innerHTML = nome.value
        document.getElementById("erroNome").innerHTML = ""
        sucesso(nome)

        return true
    }

}

function mudaNumero () {
    const numero = document.getElementById("cardNumber")
    const infoCartao = document.getElementById("cartao__inf")
    
    if (numero.value == '') {
        document.getElementById("erroNumero").innerHTML = "não pode ser nulo"
        erro(numero)
    } else {
         infoCartao.innerHTML =  numero.value;
        document.getElementById("erroNumero").innerHTML = ""
        sucesso(numero)

        return true
    }
}


   

function mudaData () {
    const mes = document.getElementById("dateMonth")
    const ano = document.getElementById("dateYear")
    const data = document.querySelector(".cartao__container--data")
    
        if (isNaN(mes.value) || isNaN(ano.value)) {
            document.getElementById("erro_CVC").innerHTML = "Digite apenas numeros"
            erro(mes)
            erro(ano)
        }else if (mes.value == '' || ano.value == '') {
            document.getElementById("erro_CVC").innerHTML = "não pode ser nulo"
            erro(mes)
            erro(ano)
        } else {
            document.getElementById("erro_CVC").innerHTML = ""            
            data.innerHTML = `${mes.value}/${ano.value}`;

            sucesso(mes)
            sucesso(ano)

            return true
    }

    data.innerHTML = `${mes.value}/${ano.value}`;
}

function mudaCvc () {
    const cvc = document.getElementById("securityCode")
    const cvcCartao =  document.querySelector(".cartao-tras__cvc")
    
    if(isNaN(cvc.value)) {
        document.getElementById("erro_CVC").innerHTML = "Digite apenas numeros"
        erro(cvc)
        cvcCartao.innerHTML = "000";
    }else if (cvc.value == '') {
        document.getElementById("erro_CVC").innerHTML = "não pode ser nulo"
        erro(cvc)
        cvcCartao.innerHTML = "000";   
    } else {
        document.getElementById("erro_CVC").innerHTML = ""
        sucesso(cvc)
        cvcCartao.innerHTML = cvc.value

        return true
    }

}





