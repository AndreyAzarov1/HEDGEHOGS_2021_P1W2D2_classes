const { Person, currincyRate1 } = require('./person');

console.log(currincyRate1);

class BeeKeeper extends Person {
  constructor({ name, age, salary, skills, money, beesCount, beeHomes }) {
    super({ name, age, salary, skills, money });
    this.beesCount = beesCount;
    this.beeHomes = beeHomes;
    this.honey = 0;
  }
  collectHoney() {
    this.honey += 100;
  }

  showThis() {
    console.log('HONEY KEEPER==>');
    super.showThis();
  }
}

const ivanPcholkin = new BeeKeeper({
  name: 'Ivan Pchelkin',
  age: 42,
  salary: 176,
  money: 100,
  beeHomes: 10,
  beesCount: 1000,
  skills: ['JS', 'bee keeping'],
});

ivanPcholkin.collectHoney();
ivanPcholkin.getSalary();
ivanPcholkin.showThis();

// NaN undefined null
