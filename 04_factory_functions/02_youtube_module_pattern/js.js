// https://youtu.be/HkFlM73G-hk?list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f

// object literal
let myModule = {
  name: "Will",
  age: 34,
  sayName: function () {
    console.log(this.name);
  },
  setName: function (newName) {
    this.name = newName;
  },
};

myModule.setName("Willis");
myModule.sayName();
