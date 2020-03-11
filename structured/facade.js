// скрытие сложной логики за фасадом

class Conveyor {
  setBody() {
    console.log("body set");
  }
  getEngine() {
    console.log("dismantle engine");
  }
  setEngine() {
    console.log("engine set");
  }
  setInterior() {
    console.log("interior set");
  }
  getInterior() {
    console.log("Update interior");
  }
  setExterior() {
    console.log("Added interior!");
  }
  setWheels() {
    console.log("Wheels!");
  }
  addElectronics() {
    console.log("added electronics");
  }
  paint() {
    console.log("car painted");
  }
}

class ConveyorFacade {
  constructor(car) {
    this.car = new car();
  }
  assembleCar() {
    this.car.setBody();
    this.car.setEngine();
    this.car.setInterior();
    this.car.setExterior();
    this.car.setWheels();
    this.car.addElectronics();
    this.car.paint();
    return this.car;
  }
  changeEngine() {
    this.car.getEngine();
    this.car.setEngine();
    return this.car;
  }

  changeInterior() {
    this.car.getInterior();
    this.car.setInterior();
    return this.car;
  }
}

const convyor = new ConveyorFacade(Conveyor);
const car = convyor.assembleCar();

console.log(car);
