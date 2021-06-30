
class Distancia{
    millasAmetros(millas){
        return millas * 1609.34
    }
    millasAkilometros(millas){
        return millas * 1609.34
    }
}

let recorrido = new Distancia

console.log(recorrido.millasAmetros(45))
console.log(recorrido.millasAkilometros(84))