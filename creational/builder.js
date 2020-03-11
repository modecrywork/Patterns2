// Позволяет создвать сложные экземляры классов без большой нагрузки на конструктор

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  addAutoPilot(autoPilot) {
    this.car.autoPilot = autoPilot;
  }

  addParktronic(parktronic) {
    this.car.parktronic = parktronic;
    return this;
  }

  addSignaling(signaling) {
    this.car.signaling = signaling;
    return this;
  }

  updateEngine(engine) {
    this.car.engine = engine;
    return this;
  }
  build() {
    return this.car;
  }
}

class Car {
  constructor() {
    this.autoPilot = false;
    this.parktronic = false;
    this.signaling = false;
  }
}

const myCar = new CarBuilder.addAutoPilot(true)
  .addParktronic(true)
  .updateEngine("v8")
  .build();

console.log(myCar);
