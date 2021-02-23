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




module.exports = Person;
