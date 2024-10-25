function Pet(name, age){
    this.name = name
    this.age = age
    this.som = function(){
        return 'piu piu'
    }
}

function Dog (name, age){
    Pet.call(this, name, age)
    this.som = function(){
        return 'Au Au'
    }

}

function Cat(name, age){
    Pet.call(this, name, age)
    this.som = function(){
        return 'Miau'
    }
} 

const rex = new Dog('Rex', 2)
const garfield = new Cat('Garfield', 5)
const caramelo = new Dog('Caramelo', 8)

console.log(rex)
console.log(rex.som())

console.log(garfield)
console.log(garfield.som())

console.log(caramelo)
console.log(caramelo.som())