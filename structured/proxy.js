class CarAcces {
  open() {
    console.log("Opening car door");
  }
  close() {
    console.log("Closing th car door");
  }
}

class SecuritySystem {
  constructor(door) {
    this.door = door;
  }
  open(password) {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log("Acces denided");
    }
  }

  authenticate(password) {
    return password === "123";
  }

  close() {
    this.door.close();
  }
}

const door = new SecuritySystem(new CarAcces());

door.open("123");
door.close();
