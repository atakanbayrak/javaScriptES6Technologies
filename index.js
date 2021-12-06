// LET-VAR-CONST

// var -> function
// let -> block
// const -> block / read-only

function sayHellO() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

sayHellO();

// It is impossible to do this. Const is read-only.
const x = 1;
x = 2;

//OBJECTS

const person = {
  name: "Atakan",
  // walk is method
  walk() {},
  talk() {},
};

person.talk();
person.name = "";

const targetMember = "name";
person[targetMember.value] = "Bayrak";

//THIS KEYWORD

const person = {
  name: "Atakan",
  // walk is method
  walk() {
    console.log(this);
  },
};

person.walk();

const walk = person.walk;
console.log(walk);
//returns the global object from window
walk();

//BINDING THIS

//functions are also objects in jS
const walk = person.walk.bind(person);
walk();

// It is permanently attached with person object
// so we cannot do this declaration.
/* const person2 = {
  name: "Bayrak",
  walk() {
    console.log(this);
  },
};

const walk = person.walk.bind(person2);
walk(); */

//ARROW FUNCTIONS

const square = function (number) {
  return number * number;
};

/* const square = () => {
  return 5;
}; */
const square = (number) => number * number;
console.log(square(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const activeJobs = jobs.filter((job) => job.isActive);

//ARROW FUNCTIONS AND THIS

const person2 = {
  talk() {
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  },
};

person2.talk();

//Array.map()

const colors = ["red", "green", "blue"];
const items = colors.map((color) => "<li>" + color + "</li>");
console.log(items);

//OBJECT DESTRUCTURING

const address = {
  street: "",
  city: "",
  country: "",
};
// We donot make code repeating in here thanks to dest.
const street = address.street;
const city = address.city;
const country = address.country;

const { street, city, country } = address;
// If you want to use another name for this syntax.
const { street: st } = address;

//SPREAD OPERATOR

const first = [1, 2, 3];
const second = [4, 5, 6];

// This is the old way to do it.
const combined = first.concat(second);
// This three dots mean that take ever item from the array.
const combined = [...first, ...second];

/* 
Why was this called improvement? 
If you want to add element to this combination, the old way 
is not going to be efficent for you code. 
const combined = [...first, "a", ...second, "b"];
*/

const clone = [...first];
console.log(first);
console.log(clone);

// applying spread operator in objects
const first = { name: "Atakan" };
const second = { job: "Engineer" };
combined = { ...first, ...second, location: "Turkey" };
console.log(combined);

clone = { ...first };

// CLASSES

class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walky");
  }
}

const person3 = new Person("Atakan");
console.log(person3.name);
person3.walk();

// INHERITANCE

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("teach");
  }
}

const teacher = new Teacher("Atakan", "University");

//MODULES
