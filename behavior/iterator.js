// поведенчиский патерн позволяет проходить поэтапно проходить элементы составных объектов не раскрывая их внутренне представление
// вынесение поведения обхода коллекции из самой коллекции

class Iterator {
  constructor(el) {
    this.index = 0;
    this.elements = el;
  }
  next() {
    return this.elements[this.index++];
  }

  hasNext() {
    return this.index < this.elements.length;
  }
}

const collection = new Iterator(["Audi", "BMW", "Tesla", "Mersedes"]);

while (collection.hasNext()) {
  console.log(collection.next());
}
