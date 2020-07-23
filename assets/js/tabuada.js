var btn = document.getElementById('btn')
var comeca = document.getElementById('comeca')
var container = document.querySelector('.container')
var resultado = document.querySelector('#resultado')
btn.addEventListener('click', () => {
    var fator = document.getElementById('fator')
    if(fator.value.length === 0){
        console.log('Numero invalido')
        window.alert('Numero invalido')
    }
    else{
        var i = 0
        while(container.lastElementChild){
            container.removeChild(container.lastElementChild)
        }
        for(i; i <= comeca.value; i++){
            resultado = document.createElement('p')
            resultado.innerText = fator.value * i
            container.appendChild(resultado)
        }
    }
})