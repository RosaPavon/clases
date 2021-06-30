
class Finanzas{
    dolaresAeuros(dolares){
        return dolares * 0,84
    }
    eurosAdolares(euros){
        return euros * 1,19
    }
}

monedero= new Finanzas

console.log(monedero.dolaresAeuros(45))
console.log(monedero.eurosAdolares(45))