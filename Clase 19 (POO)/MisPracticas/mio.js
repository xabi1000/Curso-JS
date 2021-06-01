class Book{
    constructor(titulo, escritor, year){
        this.titulo = titulo
        this.escritor = escritor
        this.year = year

        this.resumen = `el gran escritor ${escritor} presenta su obra nombrada ${titulo} la cual escribio el ano ${year}`
    }

    saludar(){
        return `hola ${this.escritor}, me gustraia comprar su libro titulado ${this.titulo}, el cual escribio el ano ${this.year}`
    }
}

const mohamed = new Book('fantasmas', 'Mohammed CHABI', 1940);
const omar = new Book('"Programacion orientada a objetos"', 'Omar CHABI', 2050);

console.log(mohamed);
console.log(mohamed.saludar());


console.log(omar);
console.log(omar.saludar());

