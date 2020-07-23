class TabuadaController{
    constructor(){
        this._numero = document.querySelector('#numeroInicial')
        this._fator = document.querySelector('#porQuantoQuerMultiplicar')
        this._resultado = document.querySelector(".container")
        this._tabuadaView = new TabuadaView(this._resultado)
    }

    mostrarTabuada(event){
        event.preventDefault()
        this._tabuadaView.update(this.criarTabuada())

    }
    
    criarTabuada(){
        return new TabuadaModel(this._numero.value,this._fator.value)
    }
}