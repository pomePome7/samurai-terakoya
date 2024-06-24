"use strict";

try {
  console.log('hello!')
} catch(error) {
  console.log('--- output error ---');
  console.log(error.name);
  console.log(error.message);
} finally {
  console.log('end');
}

var person = {
  name: "Bob",
  age: 25,
  city: "New york"
};
var numbers = [1, 2, 3, 4, 5];
console.log("Person:", person); // オブジェクトの内容を表示

console.log("Numbers:", numbers); // 配列の内容を表示

var score = 85;

if (score >= 80) {
  console.log("Great job You passed."); // 条件成立時のメッセージを表示
} else {
  console.log("Sorry, yuo didn't pass.");
}