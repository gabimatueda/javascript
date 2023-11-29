/*
   1 - Crie uma classe para representar carros.
   Os carros possuem uma marca, uma cor e um gasto médio de combútivel por Kilômetro rodado.
   Crie um método que dado a quantidade de quilômetros e o preço do combústivel nos dê o valor
   gasto em reais para realizar este percurso.
*/
class Carro {
    marca;
    cor;
    gastoMedioPorKm;
    
    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm
    }

    calcularGastoDePercurso(distanciaemKm, precoCombustivel) {
        return distanciaemKm * this.gastoMedioPorKm * precoCombustivel
    }
}

const uno = new Carro('Fiat', 'Prata', 1/12);
console.log(uno.calcularGastoDePercurso(70, 5));
const palio = new Carro('Fiat', 'Preto', 1/10);
console.log(palio.calcularGastoDePercurso(70, 5));