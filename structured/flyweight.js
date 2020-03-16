// (cache) - позвоялет вместить больше кол-во объектов в выделенную оперативную память. Позволяет экономить ресурсы разделяя общее состояние объектов между собой
/**
 * 1. Immutable
 * 2. Создавать флайвейт через фабрики (можно создать фабрику которая будет принимать все внутренее состояние  флайвейта)
 */

class Auto {
  // class флайвейт
  constructor(model) {
    this.model = model;
  }
}

class AutoFactory {
  // фабрика для легковеса
  constructor(name) {
    this.models = {};
  }
  create(name) {
    let model = this.models[name];
    if (model) return model;
    console.count("model");
    this.models[name] = new Auto(name);
    return this.models[name];
  }
  getModels() {
    console.table(this.models);
  }
}

const factory = new AutoFactory();

const bmw = factory.create("BMW");
const audi = factory.create("Audi");
const tesla = factory.create("Tesla");
const blackTesla = factory.create("Tesla");

console.log(factory.getModels());
