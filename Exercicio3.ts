class Lampada{
    status: boolean;

    Ligar(){
        this.status = true;
    }

    Desligar(){
        this.status = false;
    }
    
    Observar(){
        if(this.status == true){
            console.log("Ligada!");
        }
        else{
            console.log("Desligada!");
        }
    }
}

function UsaLampada(){
    let Lampada1 = new Lampada();
    let Lampada2 = new Lampada();

    Lampada1.Ligar();
    Lampada2.Desligar();

    console.log("Lampada 1: ");
    Lampada1.Observar();
    console.log("Lampada 2: ");
    Lampada2.Observar();
}

UsaLampada();