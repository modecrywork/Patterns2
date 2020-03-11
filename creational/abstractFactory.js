// Абстрактная фабрика создает интерфейс которые группирует другие фабрики

// Abstract factory
function bmwProducer(kind) {
  return kind === "sport" ? sportCarFactory : familyCarFactory;
}

// Factories
function sportCarFactory() {
  return new Z4();
}

function familyCarFactory() {
  return new I3();
}

class Z4 {
  info() {
    return "z4 is a Sport Car!";
  }
}

class I3 {
  info() {
    return "i3 is a family Car!";
  }
}

const produce = bmwProducer("sport");
const myCar = new produce();

console.log(myCar.info());
