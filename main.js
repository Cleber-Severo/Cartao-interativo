//This is the JavaScript 

const formulario = document.querySelector(".formulario")
const resetBtn = document.getElementById("confirma-reseta")

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


function sucesso(entrada) {
            entrada.classList.remove('formulario__entrada');
            entrada.classList.remove('formulario__entrada--erro');
            entrada.classList.add('formulario__entrada--sucesso');
        }

function erro(entrada) {
        entrada.classList.remove('formulario__entrada');
        entrada.classList.remove('formulario__entrada--sucesso');
        entrada.classList.add('formulario__entrada--erro');
    }

formulario.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();
    const confirmaBtn = document.getElementById("confirma_formulario")
    let formulario_confirma = mudaNome()

    confirmaBtn.addEventListener("click", function (){
         if (formulario_confirma === true) {
        document.querySelector(".principalF").style.display = "none"
        document.querySelector(".completo").style.display = "block"
    }
    })

   
})

resetBtn.addEventListener("click", function (){
    formulario.submit()
    document.querySelector(".principalF").style.display = "block"
    document.querySelector(".completo").style.display = "none"
})




function mudaNome() {
    const nome = document.getElementById("cardName")
    const nomeCartao = document.querySelector(".cartao__container--nome") 
     
    if (nome.value == '') {
        document.getElementById("erroNome").innerHTML = "não pode ser nulo"
        erro(nome)
    }else {
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
    }else {
         infoCartao.innerHTML =  numero.value;
        document.getElementById("erroNumero").innerHTML = ""
        sucesso(numero)
    }
}


   

function mudaData () {
    const mes = document.getElementById("dateMonth")
    const ano = document.getElementById("dateYear")
    const data = document.querySelector(".cartao__container--data")
    
      if (mes.value == '' || ano.value == '') {
            document.getElementById("erro_CVC").innerHTML = "não pode ser nulo"
            erro(mes)
            erro(ano)
        } else {
            document.getElementById("erro_CVC").innerHTML = ""            
            data.innerHTML = `${mes.value}/${ano.value}`;

            sucesso(mes)
            sucesso(ano)
    }

    data.innerHTML = `${mes.value}/${ano.value}`;
}

function mudaCvc () {
    const cvc = document.getElementById("securityCode")
    const cvcCartao =  document.querySelector(".cartao-tras__cvc")
    
    if (cvc.value == '') {
        document.getElementById("erro_CVC").innerHTML = "não pode ser nulo"
        erro(cvc)
        cvcCartao.innerHTML = "000";   
    } else {
        document.getElementById("erro_CVC").innerHTML = ""
        sucesso(cvc)
        cvcCartao.innerHTML = cvc.value
    }

}





