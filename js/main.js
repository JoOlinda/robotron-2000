let cr7 = document.querySelector('.robo')
const controles = document.querySelectorAll('.controle-ajuste') 
const braco = document.querySelector('#braco')

cr7.addEventListener('click', ()=>{
    console.log('Fui clicado')
})
controles.forEach(element => {
    element.addEventListener('click', (event)=>{
        manipulaDados(event.target.textContent)
    })
});
function manipulaDados(operacao) {
    if (operacao === "-") {
        braco.value = parseInt(braco.value) - 1
    }else{
        braco.value = parseInt(braco.value) + 1
    }
    
}