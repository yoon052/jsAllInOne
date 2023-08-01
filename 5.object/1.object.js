// object 를 생성하는 방법들
// Object literal {  }
// new Object()
// Object.create()

// key => 문자, 숫자, 문자열, 심볼
// value => 원시값, 객체(함수)
let apple = {
  name: "apple",
  "hello-bye": "✋",
  0: 1,
  ["hello-bye1"]: "✋",
};

// 객체 속성, 데이터에 접근하기 위해서는 => 객체이름.key이름
console.log(apple.name); // 마침표 표기법 dot notation
console.log(apple["hello-bye"]); // 대괄호 표기법 bracket notation
console.log(apple["name"]);

// 속성 추가
apple.emoji = "🍎";
console.log(apple.emoji);
console.log(apple["emoji"]);

// 속성 삭제
delete apple.emoji;
