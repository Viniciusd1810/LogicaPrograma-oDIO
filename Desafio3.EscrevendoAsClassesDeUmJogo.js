class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    ataque() {
        let tipoAtaque;
        if (this.tipo === "guerreiro") {
            tipoAtaque = "espada";
        } else if (this.tipo === "mago") {
            tipoAtaque = "magia";
        } else if (this.tipo === "monge") {
            tipoAtaque = "artes marciais";
        } else if (this.tipo === "ninja") {
            tipoAtaque = "shuriken";
        }
        console.log("O " + this.tipo + " atacou usando " + tipoAtaque);
    }
}

// Criação de um objeto Heroi
let Aa = new Heroi("Vinicius", 25, "ninja");
Aa.ataque();  // Saída: O ninja atacou usando shuriken
