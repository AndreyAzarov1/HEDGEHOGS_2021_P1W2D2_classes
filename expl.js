class MyExpl {
  constructor(obj) {
    this.name = obj.name;
  }
}

const expl = new MyExpl({ name: 'Ivan' });
console.log(expl);
