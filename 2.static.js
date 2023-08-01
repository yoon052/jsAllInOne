// static 정적 프로퍼티, 메소드
class Fruit {
  static MAX_FRUITS = 4;
  constructor(name, emoji) {
    // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메서드
  static makeRandomFruit() {
    return new Fruit("banana", "🍌");
  }

  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);

console.log(apple.name);
console.log(apple.name);
apple.display();

Math.pow();
Number.isFinite(1);
