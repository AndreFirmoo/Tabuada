class TabuadaView{
    constructor(elementoDOM){
        this._elementoDOM = elementoDOM
    }
    template(modelo){
        var resultado = modelo.ResultadoTabuada
      
        while(this._elementoDOM.lastElementChild){
            this._elementoDOM.removeChild(this._elementoDOM.lastElementChild)
        }
        for (var i =0; i<resultado.length; i++){
            var p = document.createElement("P")
            var res = resultado[i]
            
            p.innerText = `${res.numero} X ${res.multiplicando} = ${res.resultado}`
            
            this._elementoDOM.appendChild(p)
            
        }
        console.log(resultado);
    }
    update(modelo){
        this.template(modelo)
    }
}