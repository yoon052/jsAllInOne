// var의 특징 (💩)
// -> 일반 코딩 방식과 어긋나서 개발하면서도 멘붕 옴
// -> 코드의 가독성과 유지보수성에 좋지 않음

something = "💩";
console.log(something);

var poo = "💩";
var poo = "💩";
console.log(poo);

// 3. 블록 레벨 스코프 안됨 ❌
var apple = "사과";
{
  var apple = "🍎";
  {
    var apple = "🍏";
  }
}
console.log(apple);

// 4. 함수 레벨 스코프만 지원됨
function example() {
  var dog = "🐶";
}
console.log(dog);
