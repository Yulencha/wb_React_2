"use strict";
class CarImpl {
    constructor(model, year, engine, transmission) {
        this.model = model;
        this.year = year;
        this.engine = engine;
        this.transmission = transmission;
    }
    displayInfo() {
        console.log(`Car: ${this.model}, Year: ${this.year}`);
        console.log(`Engine: ${this.engine.type}, Power: ${this.engine.horsepower}HP, Wear: ${this.engine.wear}%`);
        console.log(`Transmission: ${this.transmission.type}, Wear: ${this.transmission.wear}%`);
    }
    updateEngineWear(newWear) {
        this.engine.wear = newWear;
        console.log(`Engine wear updated to: ${this.engine.wear}%`);
    }
    updateTransmissionWear(newWear) {
        this.transmission.wear = newWear;
        console.log(`Transmission wear updated to: ${this.transmission.wear}%`);
    }
}

let car = new CarImpl("Tesla Model S", 2022, { type: "Electric", horsepower: 670, wear: 10 }, { type: "Automatic", wear: 5 });
car.displayInfo();
console.log(``);
car.updateEngineWear(15);
console.log(``);
car.updateTransmissionWear(7);
console.log(``);
car.displayInfo();
