// разделяет один или несколько классов на несколько иерархий (абстракция и реализация)

class Model {
  constructor(color) {
    this.color = color;
  }
}

class Color {
  constructor(type) {
    this.type = type;
  }
  get() {
    return this.type;
  }
}

class BlackColor extends Color {
  constructor() {
    super("dark-black");
  }
}
class SilbrigColor extends Color {
  constructor() {
    super("Silbmetalic");
  }
}

class Audi extends Model {
  constructor(color) {
    super(color);
  }
  paint() {
    return this.color.get();
  }
}

class Bmw extends Model {
  constructor(color) {
    super(color);
  }
  paint() {
    return this.color.get();
  }
}

const blackBmw = new Bmw(new BlackColor());
