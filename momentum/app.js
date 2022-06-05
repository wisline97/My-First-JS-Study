function practice(nameOfPerson, age) {
  console.log("Hello My name is " + nameOfPerson + " and I'm " + age);
}

practice("nico", 23);
practice("dal", 45);
practice("Lynn", 26);
practice("jisun", 26);

function plus(a, b) {
  console.log(a + b);
}

function divide(a, b) {
  console.log(a / b);
}

divide(20, 10);
plus(8, 4);

const player = {
  name: "nico",
  sayHello: function (otherPersonName) {
    console.log("Hi! " + otherPersonName + " Nice to meet you");
  },
};

player.sayHello(player.name);
