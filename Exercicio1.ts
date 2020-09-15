class Produto{
    codigo: number;
    descricao: string;
    unidadeMedida: string;
    quantidadeEstoque: number;
    
    constructor(codigo: number, descricao: string, unidadeMedida: string, quantidadeEstoque: number){
        this.codigo = codigo;
        this.descricao = descricao;
        this.unidadeMedida = unidadeMedida;
        this.quantidadeEstoque = quantidadeEstoque;
    }

    RetornaEstoque(){
        return console.log(this.quantidadeEstoque);
    }

    ImplantaEstoque(quantia){
        console.log("\nImplante de estoque de " + quantia);
        return this.quantidadeEstoque += quantia;
    }

    BaixaEstoque(quantia){
        if(this.quantidadeEstoque < quantia){
            console.log("\nNão foi possível realizar a baixa do estoque! Estoque indisponível");
        }
        else{
            console.log("\nBaixa de " + quantia); 
            this.quantidadeEstoque -= quantia;
        }
    }

    ImprimirDados(){
        console.log("\nCódigo do produto: " + this.codigo);
        console.log("Descrição do produto: " + this.descricao);
        console.log("Unidade de medida: " + this.unidadeMedida);
        console.log("Quantidade em estoque: " + this.quantidadeEstoque);
    }
}

let codigo: number = 1;
let descricao: string = "Monitor";
let unidadeMedida: string = "cm";
let quantidadeEstoque: number = 20;

let Produto1 = new Produto(codigo, descricao, unidadeMedida, quantidadeEstoque);

Produto1.BaixaEstoque(30);
Produto1.ImplantaEstoque(100);
Produto1.BaixaEstoque(10);
Produto1.ImprimirDados();