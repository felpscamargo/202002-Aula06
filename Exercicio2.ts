class Carro{
    marca: string;
    modelo: string;
    placa: string;
    velocidade: number;
    velocidadeMax: number;

    constructor(marca: string, modelo: string, placa: string, velocidade: number, velocidadeMax: number){
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.velocidade = velocidade;
        this.velocidadeMax = velocidadeMax;
    }

    Acelerar(quantia){
        if(quantia > 10){
            console.log("Não pode aumentar a velocidade mais do que 10km/h")
        }
        else if((this.velocidade + quantia) > this.velocidadeMax){
            console.log("Não pode ultrapassar a velocidade máxima do carro")
        }
        else{
           
            for(let i = this.velocidade; i <= this.velocidadeMax; i = i + quantia){
                if(i <= this.velocidadeMax){
                    console.log(`Aumentando velocidade, velocidade atual: ${i}km/h`);
                }               
                if(i >= this.velocidadeMax){
                    console.log("Velocidade máxima atingida!");
                }
            }
        }
    }

    Frear(){
        console.log(`Começou a frear em ${this.velocidade} km/h`);
        let cont: number = 0;
        for(let i = this.velocidade; i > 0; i = i - 10){      
            cont += 1;
        }
        console.log("Tempo para frear totalmente o carro: " + cont)
        this.velocidade = 0;
    }

    ImprimirDados(){
        console.log("\nInformações do carro:");
        console.log("Marca: " + this.marca);
        console.log("Modelo: " + this.modelo);
        console.log("Placa: " + this.placa);
        console.log("Velocidade atual: " + this.velocidade);
        console.log("Velocidade máxima: " + this.velocidadeMax);
    }
}

let marca: string = "Citroen";
let modelo: string = "C4";
let placa: string = "ABC-1234";
let velocidade: number = 100;
let velocidadeMax: number = 180;

let Carro1 = new Carro(marca, modelo, placa, velocidade, velocidadeMax)

Carro1.Acelerar(10);
Carro1.Frear();
Carro1.ImprimirDados();
