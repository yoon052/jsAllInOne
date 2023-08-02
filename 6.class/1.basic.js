// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스✨ (최신)

// 클래스 class
class Fruit {
  constructor(name, emoji) {
    // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
    this.name = name;
    this.emoji = emoji;
  }
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);

console.log(apple.name);
console.log(apple.name);
apple.display();
