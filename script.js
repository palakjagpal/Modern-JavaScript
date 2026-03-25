







let catname = "Lusy";
let quote;

catname = "Missy";

function main() {
  "use strict"; //enables strict mode, which enforces stricter parsing and error handling on code at runtime.

  console.log(catname + " says meow !!");
}

main();

function main2() {
  "use strict";
  var i = 10;
  if (true) {
    let i = 20;
    console.log("i = " + i);
  }
  console.log("i = " + i);
  return i;
}

main2();

function sent(str) {
  "use strict";
  const sentence = str + " is cool";

  for (let i = 0; i < str.length; i += 2) {
    console.log(sentence);
  }
}

sent("Scrimba");

const s = [2, 4, 6];

function array() {
  "use strict";
  //s = [5,7,9]
  s[0] = 5;
  s[1] = 7;
  s[2] = 9;

  console.log(s);
}

array();

function freezeobjects() {
  "use strict";

  const math_cont = {
    PI: 3.14,
  };

  Object.freeze(math_cont);

  try {
    math_cont.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return math_cont.PI;
}

const PI = freezeobjects();

console.log(PI);

/*var magic = function(){
    return new Date()
}*/

const magic = () => new Date();

/*var main3 =  function (arr1,arr2){
    return arr1.concat(arr2)
}*/

const main3 = (arr1, arr2) => arr1.concat(arr2);

console.log(main3([2, 8], [12, 16]));

const realno = [4, 5.6, -9.8, 7, 9];

console.log(realno);

const list = (arr) => {
  const sqint = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x);
  return sqint;
};

const sqint = list(realno);
console.log(sqint);

//map function takes function as argument
//The filter() method creates a new array containing only elements that satisfy a specified condition. It does not change the original array and is useful for selecting specific elements from an array based on certain criteria.

//The map() method creates a new array by applying a given function to each element of the original array. It transforms each element according to the logic defined in the callback function without altering the original array.

//Use map() when you need to transform or manipulate every element in an array.
//Use filter() when you want to select specific elements that meet a particular condition.

const increment = (function () {
  return function increment(number, value = 5) {
    return number + value;
  };
})();

console.log(increment(5, 2));
console.log(increment(5));

/*Reduce
The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.*/
/*const sum = (function() {
    return function sum(x,y,z){  //rest 
        const args = [x,y,z]
        return args.reduce((a,b) => a+b, 0)
    }
})()
console.log(sum(1,2,3))*/

const sum = (function () {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(3, 5, 7, 5));

//Spread operator
//The spread operator in JavaScript, denoted by three dots (...), is a feature introduced in ES6 (ECMAScript 2015) that allows an iterable (like an array, string, or object) to be expanded or "spread out" into its individual elements or properties.

const arr1 = ["Jan", "Feb", "Mar", "Apr", "June", "July"];
let arr2;
(function () {
  arr2 = [...arr1];
  arr1[0] = "potata";
})();
console.log(arr1);
console.log(arr2);

//Desctructing assignment

var vowel = { x: 3, y: 7, z: 6 };

var x = vowel.x; //x=3
var y = vowel.y; //y=7
var z = vowel.z; //z=6

const { x: a, y: b, z: c } = vowel; // a=3, b=7 ,c=6

const avg = {
  today: 77.5,
  tommorrow: 79,
};

function main4(qwerty) {
  "use strict";
  const { today: w } = qwerty;
  return w;
}

console.log(main4(avg));

const local = {
  today: { min: 23, max: 56 },
  tom: { min: 45, max: 45 },
};

function get(b) {
  "use strict";
  const {
    tom: { min: a },
  } = b;
  return a;
}

console.log(get(local));

const [e, f, k] = [1, 2, 3, 4, 5, 6];
console.log(e, f, k);

let ab = 8,
  bc = 5;
(() => {
  "use strict"[(ab, bc)] = [bc, ab];
})();

console.log("ab :" + ab);
console.log("bc :" + bc);

let aa = 8,
  bb = 6;
(() => {
  "use strict";
  [aa, bb] = [bb, aa];
})();
console.log("a:" + aa);
console.log("b:" + bb);

const source = [1, 2, 3, 4, 5];
function removeFirstTwo(list) {
  const [, , ...arr] = list; //Only first two will not be included in arr that's why two commas are there
  return arr;
}

const arr = removeFirstTwo(source);
console.log("arr : " + arr);
console.log("source : " + source);

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};
const half = (function () {
  return function half({ max, mode }) {
    return (max + mode) / 2.0;
  };
})();
console.log(stats);
console.log(half(stats));

const person = {
  name: "Palak Jagpal",
  age: 21,
};

const greeting = `Hello !, my name is ${person.name} I am ${person.age} years old.`;

console.log(greeting);

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"],
};
function makeList(arr) {
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    resultDisplayArray.push(`<li> ${arr[i]} </li>`);
  }

  return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray)

/*const createPerson = (name,age,gender) => {
    return {
        name : name,
        age : age,
        gender : gender
    }
}*/

const createPerson = (name,age,gender) =>( {name,age,gender})
console.log(createPerson("Palak Jagpal",21,"Female"))


const bicycle = {
  gear: 2,
  setGear(newGear){
    "use strict";
    this.gear = newGear;
  }
};

bicycle.setGear(8);
console.log(bicycle.gear);


/*var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)*/

class SpaceShuttle{
  constructor(targetPlanet){
  this.targetPlanet = targetPlanet;
  }
}
var zeus = new SpaceShuttle('Mars');

console.log(zeus.targetPlanet)



function makeClass(){
  class Vegetable{
    constructor(name){
      this.name = name
    }
  }
  return Vegetable
}

const Vegetable = makeClass()
const carrot = new Vegetable('carrot')
console.log(carrot.name)


class Book {
  constructor(author) {
    this._author = author; //private variable 
  }
  // getter
  get writer(){
    return this._author; //getting provate variable
  }
  // setter
  set writer(updatedAuthor){ 
    this._author = updatedAuthor; //setting private variable
  }
}

//the *this* means that the variable is only accessible within the class
function makeclass() {
  class Thermostat{
    constructor(temp){
      this._temp = 5/9*(temp-32)
    }

    //getter
    get temperature(){
      return this._temp
    }

    //setter
    set temperature(newtemp){
      this._temp = newtemp
    }
  }


  return Thermostat;
}

const Thermostat = makeclass();
const thermos = new Thermostat(76); 
let temp = thermos.temperature; 
thermos.temperature = 56;
temp = thermos.temperature; 

console.log(temp)


//import and export
//import { capitalizeString } from "./string_function" 
//function and file name from which it is imported

//const cap = capitalizeString("hello!");

//console.log(cap);

/*********Destructuring**************** */
const array = [1, 2, 3];
const [aaa, bbbb, cccc] = array;
// aaa = 1, bbb = 2, ccc = 3

const object = { a, b, c };
const { a1, b2, c3 } = object;
// Equivalent to:
// const a1 = obj.a1, b2 = obj.b2, c3 = obj.c3;

const obj = { prop1: x, prop2: y, prop3: z };
const { prop1: x, prop2: y, prop3: z } = obj;
// Equivalent to:
// const x = obj.prop1, y = obj.prop2, z = obj.prop3;

const user = { name: "Alice", age: 25 };
const { name, age } = user; // name = "Alice", age = 25

//Nested Destructuring: Extract values from objects within objects.
const dev = { id: 1, info: { lang: "JS" } };
const { info: { lang } } = dev; // lang = "JS"

const colors = ["red", "green", "blue"];
const [first, second] = colors; // first = "red", second = "green"

const [head, ...tail] = [1, 2, 3, 4]; // head = 1, tail = [2, 3, 4]

let a = 1, b = 2;
[a, b] = [b, a]; // a = 2, b = 1


















