//return 을 명시적으로 하지 않으면 자동으로 undefined 가 반환됨
function add(a, b) {
  return a + b;
}
const result = add(1, 2);
console.log(result);

function print(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
}
