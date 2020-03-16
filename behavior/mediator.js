// позволяет уменьшить взаимосвязи между классами вынося связи в класс посредник,  устанавливает нужные связи внутри себя

class OfficialDealer {
  constructor() {
    this.customers = [];
  }

  orederAuto(customer, auto, info) {
    const name = customer.getName();
    console.log(`Order bane: ${name}. Order auto is ${auto}`);
    console.log(`Additional info: ${info}`);
    this.addToCustomerList(name);
  }

  addToCustomerList(name) {
    this.customers.push(name);
  }
  getCustomerList() {
    return this.customers;
  }
}

class Customer {
  constructor(name, dealerMediator) {
    this.name = name;
    this.dealerMediator = dealerMediator;
  }

  getName() {
    return this.name;
  }

  makeOrder(auto, info) {
    this.dealerMediator.orederAuto(this, auto, info);
  }
}

const mediator = new OfficialDealer();
const yahen = new Customer("Yauhen", mediator);
const valera = new Customer("Valera", mediator);

yahen.makeOrder("Tesla", "With Autopilot!");
valera.makeOrder("Audi", "With parktronic!");

console.log(mediator.getCustomerList());
