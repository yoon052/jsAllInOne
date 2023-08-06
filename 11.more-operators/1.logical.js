// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation
const obj1 = { name: "🐶" };
const obj2 = { name: "🐱", owner: "Ellie" };

if (obj1 && obj2) {
  console.log("둘다 true!");
}

let result1 = obj1 && obj2;
console.log(result1);

let result2 = obj1 || obj2;
console.log(result2);

//단축평가 활용예
//1. 조건이 truthy일때, && 무언가를 해야 할 경우
//2. 조건이 falshy일때, || 무언가를 해야 할 경우
function changeOwner(animal) {
  //1.
  if (!animal.owner) {
    throw new Error("주인이 없어요.");
  }
  animal.owner = "바뀐주인!";
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error("주인이 있어요.");
  }
  animal.owner = "새로운주인!";
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인할때
let item = { price: 1 };
const price = item && item.price;
console.log(price);

// 기본값을 설정
// default parameter 전달하지 않거나, undefined 설정
// || 값이 falshy한 경우 설정(할당) : 0, -0, null, undefined, ''
function print(message) {
  const text = message || "Hello";
  console.log(text);
}
print();
print(undefined);
print(null);
print(0);
