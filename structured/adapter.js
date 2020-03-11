// оборачивает не совместимый с чем то объект и делает его совместимым

class Auto {
  startEngine(engine) {
    engine.simpleInterface();
  }
}

class Engine2 {
  simpleInterface() {
    console.log("Engine 2.0");
  }
}

class EngineV8 {
  complecatedInterface() {
    console.log("Engine V8");
  }
}

class EngineV8Adapter {
  constructor(engine) {
    this.engine = engine;
  }
  simpleInterface() {
    this.engine.complecatedInterface();
  }
}

const myCar = new Auto();
const oldEngine = new Engine2();

myCar.startEngine(oldEngine);

const engineAdapter = new EngineV8Adapter(new EngineV8());
myCar.startEngine(engineAdapter);
