class Numerazo {
    constructor(numero) {
      this.numero = parseInt(numero);

    }
      
    esPar() {
      return this.numero % 2 !== 0 ? false : true
    }
  sumaDigitos(){
    let suma = 0
    let num = this.numero.toString()

    for (let i = 0; i < num.length; i++) {
      suma += parseInt(num.substring(i, i +1))
      
    }
    return suma
  }
  }
  
  numerillo= new Numerazo("3458")

  console.log(numerillo.esPar())
  console.log(numerillo.sumaDigitos())

