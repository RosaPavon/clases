class Rectangulo{
    constructor(largo, ancho){
        this.largo=largo
        this.ancho=ancho
    }
    calcularArea(){
        return this.largo + this.ancho
    }
    calcularPerimetro(){
        return (this.largo + this.ancho) *2
    }
}

let rectangulillo = new Rectangulo (23,58)

console.log(rectangulillo.calcularArea())
console.log(rectangulillo.calcularPerimetro())