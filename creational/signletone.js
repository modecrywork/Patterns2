// * считается антипатерном потому что использовался очень часто.

/*Вариации реализации*/

const instance1 = { name: "signletone" }; // через литерал объекта

// используя глобальную переменную
let instance;

class Counter {
  constructor() {
    if (!instance) instance = this;
    instance.count = 0;
    return instance;
  }

  getCount() {
    return instance.count;
  }
  increaseCount() {
    instance.count++;
  }
}

const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount2.increaseCount();

console.log(myCount1.getCount());
console.log(myCount2.getCount());

// -----------------------------------

class Counter2 {
  constructor() {
    if (typeof Counter2.instance === "object") return Counter2.instance;
    this.count = 0;
    Counter2.instance = this; // используем ссылку на экземпляр в статическом свойстве
    return this;
  }

  getCount() {
    return this.count;
  }
  increaseCount() {
    this.count++;
  }
}

const myCount3 = new Counter2();
const myCount4 = new Counter2();

myCount3.increaseCount();
myCount4.increaseCount();

console.log(myCount3.getCount());
console.log(myCount4.getCount());
