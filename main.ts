
interface Sanduiche {
    custo(): number;
    descricao(): string;
}


class FrangoAssado implements Sanduiche {
    custo(): number {
        return 64.50;
    }

    descricao(): string {
        return "Sanduíche de Frango Assado";
    }
}


abstract class AdicionalDecorator implements Sanduiche {
    protected sanduiche: Sanduiche;

    constructor(sanduiche: Sanduiche) {
        this.sanduiche = sanduiche;
    }

    abstract custo(): number;
    abstract descricao(): string;
}


class Pepperoni extends AdicionalDecorator {
    custo(): number {
        return this.sanduiche.custo() + 90.99;
    }

    descricao(): string {
        return this.sanduiche.descricao() + ", Pepperoni";
    }
}


class QueijoMussarelaRalado extends AdicionalDecorator {
    custo(): number {
        return this.sanduiche.custo() + 2.00;
    }

    descricao(): string {
        return this.sanduiche.descricao() + ", Queijo Mussarela Ralado";
    }
}

const sanduicheBase: Sanduiche = new FrangoAssado();
const sanduicheComPepperoni: Sanduiche = new Pepperoni(sanduicheBase);
const sanduicheFinal: Sanduiche = new QueijoMussarelaRalado(sanduicheComPepperoni);

console.log(`${sanduicheFinal.descricao()} custa ${sanduicheFinal.custo().toFixed(2)}`);
