/* 
Crea una clase Libro
La clase libro tendrá título, autor, año y género.
Crea un método que devuelva toda la información del libro
Pide 3 libros y guárdalos en un array
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía
Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información
*/


//Crea una clase Libro

class Libro{
    constructor (title, author, year, gender){
    this.title = title;
    this.author = author;
    this.year = year;
    this.gender = gender;
}

devolverAutor(){
    return this.author;
}

informacion(){
    return ` el libro titulado ${this.title} fue escrito por ${this.author} en el ano ${this.year} y su genero es ${this.gender}`;
}
};

let libros =[];

while (libros.length < 3) {
    let title = prompt('introduzca el titulo del libro');
    author = prompt('introduzca el nombre del autor');
    year = prompt('introduzca el ano del libro');
    gender = prompt('introduzca el genero del libro');    
    
    if (title != '' && author != '' && !isNaN(year) && year.length == 4 && (gender == 'aventura' || gender == 'terror' || gender == 'fantasia') ) {
        libros.push(new Libro(title, author, year, gender));
    }
}

const verLibros = () => console.log(libros);
verLibros();

const verAutores = () =>{
    let autores = [];
    for (const libro of libros) {
        autores.push(libro.devolverAutor());
    }
   console.log(autores.sort());
};

verAutores();

const verGenero = libros.gender;

falta ulimo reto a cumpletar





// autocompletado de funnciones \ preferencias\configuracion\ en la barra superior : (javascript.suggest.completeFunctionCalls) y activar el check correspondiente