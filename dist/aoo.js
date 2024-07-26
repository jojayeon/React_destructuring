//! 오타랑 객체인데 배열로 넣ㅇ어서 안됨ㅋㅋㅋㅋㅋ
// const person = { name: "공옥재", age: 26 };
// const [name, age] = person;

// console.log(naem);

const person = { name: "공옥재", age: 26 };
const { name, age } = person;

console.log(name);
console.log(age);

const person1 = ["조자연", "만25"];
const [name1, age1] = person1;

console.log(name1);
console.log(age1);
