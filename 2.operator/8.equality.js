//동등 비교 관계 연산자(Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입 다름
console.log(2 == 2); //t
console.log(2 != 2); //f
console.log(2 != 3); //t
console.log(2 == 3); //f
console.log(2 == "2"); //t
console.log(2 === "2"); //f
console.log(true == 1); //t
console.log(true === 1); //f
console.log(false == 0); //t
console.log(false === 0); //f
console.clear();

const obj1 = {
  name: "js",
};

const obj2 = {
  name: "js",
};

console.log(obj1 == obj2); //f
console.log(obj1 === obj2); //f
console.log(obj1.name == obj2.name); //t
console.log(obj1.name === obj2.name); //t

let obj3 = obj2;
console.log(obj3 == obj2); //t
console.log(obj3 === obj2); //t
