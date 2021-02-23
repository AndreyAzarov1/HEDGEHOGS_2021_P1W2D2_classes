class Person {
  constructor({ name, age, salary, skills, money }) {
    this.name = name;
    this.age = age || 33;
    this.salary = salary;
    this.skills = skills;
    this.money = money || 0;
  }

  showThis() {
    console.log(this);
  }

  getSalary() {
    this.money += this.salary;
  }
}

class BeeKeeper extends Person {
  constructor() {}
}








const ivanIvanov = new Person({
  age: 32,
  name: 'Ivan Ivanov',
  salary: 150,
  skills: ['JS', 'REACT'],
});

const mariaZaharova = new Person({
  name: 'Maria Zaharova',
  age: 25,
  salary: 100,
  skills: ['PYTHON', 'DATA SCIENCE'],
  money: 1000,
});

ivanIvanov.showThis();
ivanIvanov.getSalary();
ivanIvanov.showThis();
mariaZaharova.showThis();
