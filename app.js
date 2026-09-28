// 基礎編
// Q1
let nickname =  "oreo";
let age = 22;
console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

// Q2
let language = ["JavaScript", "PHP", "Ruby", "Python", "Go"];;
console.log(`私の好きな言語は${language[0]}です。次は${language[3]}を勉強してみたいです。`);

// Q3
let user = {
  name: "John",
  age: 26,
  bloodType: "A",
  favorite: "card",
};

console.log(user.age);

// Q4
let playerList = [
  {
    name: "John",
    age: 26,
    favorites: ["Card Game", "Basket Ball", "Programming"],
  },
  {
    name: "Bob",
    age: 33,
    favorites: ["Tinder", "The Legend of Zelda"],
  },
  {
    name: "Michael",
    age: 22,
    favorites: ["Football", "Smash Bros."],
  },
];

console.log(playerList[1].favorites[1]);

// Q5
// const average = (playerList[0].age + playerList[1].age + playerList[2].age) / 3;
let totalAge = 0;
for (let i = 0; i < playerList.length; i++) {
  totalAge += playerList[i].age;
}
let average = totalAge / playerList.length;
console.log(`平均年齢は${average}歳です。`);

// Q6
function sayHello() {
  console.log("Hello");
}
sayHello();

let sayWorld = function() {
  console.log("World");
}
sayWorld();

// Q7
user.birthday = "2000-09-27";
user.sayHello = function() {
  console.log("Hello!");
};
user.sayHello();

// Q8
let calc = {};
calc.add = function(x, y) {
  return x + y;
};
calc.subtract = function(x, y) {
  return x - y;
};
calc.multiply = function(x, y) {
  return x * y;
};
calc.divide = function(x, y) {
  return x / y;
};

console.log(calc.add(2, 5));
console.log(calc.subtract(13, 3));
console.log(calc.multiply(7, 7));
console.log(calc.divide(10, 2));

// Q9
function remainder(x, y) {
  return x % y;
}
console.log(`5 を 3 で割った余りは${remainder(5, 3)}です。`);

// Q10
// function foo() {
//   let x = 1;
// }
// // xは関数内でのみスコープが有効となっており、関数外部から参照することができないため
// console.log(x);



// 応用編
// Q1
console.log(Math.floor(Math.random() * 10));

// Q2
setTimeout(function() {
  console.log("Hello World!");
}, 3000);

// Q3
let num = 3;
if (num > 0) {
  console.log("num is greater than 0");
} else if(num === 0) {
  console.log("num is 0");
} else {
  console.log("num is less than 0");
}

// Q4
let numbers = [];
for (let i = 0; i < 100; i++) {
  numbers[i] = i;
}
console.log(numbers);

// Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i < mixed.length; i++) {
  if(typeof mixed[i] === "number") {
    console.log(mixed[i] % 2 === 0 ? "even" : "odd");
  } else {
    console.log("not number");
  }
}
