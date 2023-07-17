// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a; //1
b = 2;
console.log(a);
console.log(b);

//객체 타입은 참조값(메모리 주소, Reference)가 복사되어 전달됨
let apple = {
  name: "사과",
};
let orange = apple; //0x1234
orange.name = "오렌지";
console.log(apple);
console.log(orange);
