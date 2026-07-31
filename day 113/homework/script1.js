class Student {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(el) {
    this._name = el;
  }

  get age() {
    return this._age;
  }

  set age(el) {
    this._age = el;
  }
}

const e = new Student("Andria", 16)
e.age = 17
