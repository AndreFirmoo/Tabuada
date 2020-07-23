class TabuadaModel{
    constructor(numeroInicial, porQuantoQuerMultiplicar){
        this._numero =  numeroInicial
        this._porQuantoQuerMultiplicar = porQuantoQuerMultiplicar
    }
    get ResultadoTabuada(){
        var list = []
        for( var i = 0; i <= this._porQuantoQuerMultiplicar; i++){
            let resultado = this.numeroInicial * i
            let restArr = new Resultado(this.numeroInicial, i, resultado)
            list.push(restArr )
        }
        
        return list
    }
    get numeroInicial(){
        return this._numero
    }
    get porQuantoQuerMultiplicar(){
        return this._porQuantoQuerMultiplicar
    }
}

class Resultado{

    constructor(numero, multiplicando,resultado){
        this.numero = numero
        this.multiplicando = multiplicando
        this.resultado = resultado
    }
    
}