// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기

class Counter {
  num = 0;

  constructor(count) {
    this.count = count;
  }

  increase() {
    for (let i = 0; i < this.count; i++) {
      num++;
    }
    return console.log(`${this.num}번 까지 카운팅 완료했습니다!`);
  }
}

const counter = new Counter(0);
