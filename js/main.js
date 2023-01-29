let cr7 = document.querySelector('.robo')
const controles = document.querySelectorAll('[data-controle]') 

cr7.addEventListener('click', ()=>{
    console.log('Fui clicado')
})

controles.forEach(element => {
    element.addEventListener('click', (event)=>{
        manipulaDados(event.target.dataset.controle, event.target.parentNode)
    })
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]')

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    }else{
        peca.value = parseInt(peca.value) + 1
    }
    
}