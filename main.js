//This is the JavaScript 

const botaoConfirma = document.getElementById('confirma_formulario')
const completo = document.querySelector('.confirma')

botaoConfirma.addEventListener('click', ()=> {
    completo.classList.toggle('.confirma-show')
})

