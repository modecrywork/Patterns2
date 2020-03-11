class BmwFactory {
  create(type) {
    if (type === "X5") return new Bmw(type, 10800, 300);
    if (type === "X6") return new Bmw(type, 1110, 320);
  }
}

class Bmw {
  constructor(miodel, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

const factory = new BmwFactory();

const x5 = factory.create("x5");
