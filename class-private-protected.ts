// Private
class ContoBancario {
    private saldo: number;

    constructor(saldo: number) {
        this.saldo = saldo;
    }

    public deposita(importo: number): void {
        this.saldo += importo;
        console.log(`Deposito di ${importo} effettuato. Saldo attuale: ${this.saldo}`);
    }

    private calcolaInteresse(): number {
        return this.saldo * 0.05;
    }
}

let conto = new ContoBancario(1000);
conto.deposita(500); // Output: Deposito di 500 effettuato. Saldo attuale: 1500
// conto.calcolaInteresse(); // Errore: 'calcolaInteresse' è privato e non accessibile dall'esterno della classe.

// Protected
class Dipendente {
    protected nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

class Manager extends Dipendente {
    public salutaDipendente(): void {
        console.log(`Ciao ${this.nome}, benvenuto a bordo!`);
    }
}

let manager = new Manager("Luca");
// manager.nome; // Errore: 'nome' è protetto e non accessibile dall'esterno della classe o di una sua sottoclasse.
manager.salutaDipendente(); // Output: Ciao Luca, benvenuto a bordo!