const persona = {
    nombre: 'Jack',
    apellido: 'Alvites',
    edad: 19,
    saludar() {
        return `Hola soy ${this.nombre}`;
    }
}


class Animal {
    constructor(especie, edad, pais){
        this.especie = especie;
        this.edad = edad;
        this.pais = pais;
    }
    
     verInfo(){
        return `Hola soy un(a) ${this.especie} y tengo ${this.edad} años`
    }
    
    static verInfo2(instance){
        return instance.verInfo()
    }
}

class Perro extends Animal{
    constructor(especie, edad, pais, raza){
        super(especie, edad, pais )

        this.raza = raza;
    }

    saltar(){
        console.log('Estoy Saltando');
    }

    correr(){
        console.log('Estoy corriendo');
    }
}
const perro = new Animal('Jack',20, 'Peru');
const perro2 = new Perro('Perro', 25, 'Irlanda', 'Bulldog');

console.log(Animal.verInfo2(perro));