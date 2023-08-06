// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

function replace(array, from, to) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === "🍓") replaced[i] = "🥝";
  }
  return replaced;
}

const array = ["🍌", "🍓", "🍇", "🍓"];
const result = replace(array);
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
const arr2 = ["🍌", "🥝", "🍇", "🥝"];
let count = 0;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i].includes("🥝")) {
    count++;
  }
}
console.log(`output : ${count}`);

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
// const arr3 = ["🍌", "🥝", "🍇"];
// const arr4 = ["🍌", "🍓", "🍇", "🍓"];
// let arrayy = [];
// let resultt = [];
// for (let i = 0; i < arr3.length; i++) {
//   for (let j = 0; j < arr4.length; j++) {
//     if (arr[i] === arr[j]) resultt = arrayy.push(arr[i]);
//   }
// }
// console.log(array);
