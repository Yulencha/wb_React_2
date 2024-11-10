interface Car {
  model: string;
  year: number;
  engine: Engine;
  transmission: Transmission;
  displayInfo(): void;
  updateEngineWear(newWear: number): void;
  updateTransmissionWear(newWear: number): void;
}

interface Engine {
  type: string;
  horsepower: number;
  wear: number;
}

interface Transmission {
  type: string;
  wear: number;
}

class CarImpl implements Car {
  constructor(
    public model: string,
    public year: number,
    public engine: Engine,
    public transmission: Transmission
  ) {}

  displayInfo(): void {
    console.log(`Car: ${this.model}, Year: ${this.year}`);
    console.log(
      `Engine: ${this.engine.type}, Power: ${this.engine.horsepower}HP, Wear: ${this.engine.wear}%`
    );
    console.log(`Transmission: ${this.transmission.type}, Wear: ${this.transmission.wear}%`);
  }

  updateEngineWear(newWear: number): void {
    this.engine.wear = newWear;
    console.log(`Engine wear updated to: ${this.engine.wear}%`);
  }

  updateTransmissionWear(newWear: number): void {
    this.transmission.wear = newWear;
    console.log(`Transmission wear updated to: ${this.transmission.wear}%`);
  }
}


let car = new CarImpl(
  "Tesla Model S",
  2022,
  { type: "Electric", horsepower: 670, wear: 10 },
  { type: "Automatic", wear: 5 }
);

car.displayInfo();
car.updateEngineWear(15);
car.updateTransmissionWear(7);

car.displayInfo();
