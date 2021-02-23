const usdRate = 74;
class Person {
  #secretValue = 'sectet data';
  #height = 0;
  #width;
  constructor({ name, age, salary, skills, money }) {
    this.name = name;
    this.salary = salary;
    this.money = money || 0;
  }

  set setSecretData(param) {
    this.#width = param;
  }

  static isMyChild(param) {
    console.log(`Iam Static Method => ${param instanceof this}`);
  }

  get salaryUsd() {
    // сложная логика
    return Math.round(this.salary / usdRate);
  }

  set salaryUsd2(param) {
    // сложная логика
    this.salary = param * usdRate;
  }
}

const ivanPcholkin = new Person({
  name: 'Ivan Pchelkin',
  age: 22,
  salary: 100000,
});
// ivanPcholkin.#width = 777;
console.log(ivanPcholkin);
ivanPcholkin.setSecretData = 'Wowww!!';
console.log(ivanPcholkin);
// console.log(ivanPcholkin.salary);
// console.log(ivanPcholkin.salaryUsd);
// ivanPcholkin.salaryUsd = 2000;
// console.log(ivanPcholkin.salary);
// console.log(ivanPcholkin.salaryUsd);

// ivanPcholkin.staticMethod();

// Person.isMyChild(ivanPcholkin);
// Person.isMyChild(3242);

// ivanPcholkin.isMyChild();
