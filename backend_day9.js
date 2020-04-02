
class Car {
    constructor(name, model, tyres){
        this.name = name
        this.model = model
        this.tyres = tyres
    }

    numOfTyres(){
        return this.tyres
    }
}

const myCar = new Car('Ford', 'G2', 4)

myCar.showTyres = function(){
    return `my ${this.name} ${this.model} has ${this.numOfTyres()} tyres`
}

console.log(myCar.showTyres())