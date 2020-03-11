class Car {
  constructor() {
    this.price = 10000;
    this.model = "Car";
  }
  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.model;
  }
}

class Tesla extends Car {
  constructor() {
    super();
    this.price = 2500;
    this.model = "Tesla";
  }
}

/* cars decorators */

class WithAutopilot {
  constructor(car) {
    this.car = car;
  }
  getPrice() {
    return this.car.getPice() + 5000;
  }
  getDescription() {
    return `${this.car.getDescription()} with autopilot`;
  }
}

class WithParkTronic {
  constructor(car) {
    this.car = car;
  }
  getPrice() {
    return this.car.getPrice() + 3000;
  }
  getDescription() {
    return `${this.car.getDescription()} with parktronic`;
  }
}

// create

let tesla = new Tesla();

tesla = new WithAutopilot(tesla);
tesla = new WithParkTronic(tesla);

console.log(tesla.getDescription());
