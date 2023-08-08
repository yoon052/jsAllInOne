// 프로토타입을 베이스로한 객체지향 프로그래밍
function Animal(name, emoji) {
  //생성자 함수 Animal
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  // 프로토타입 레벨의 printName 함수
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  // 생성자 함수 Dog
  // super(name, emoji)
  Animal.call(this, name, emoji);
  this.owner = owner;
}
// Dog.prototype = Object.create(Object.prototype);
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.play = () => {
  // Dog 의 프로토타입 레벨의 play 함수
  console.log("같이 놀자옹!");
};

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}
Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log("사냥하자! ..🐇..");
};

const tiger1 = new Tiger("어흥", "🐯");
tiger1.printName();
tiger1.hunt();

const dog1 = new Dog("멍멍", "🐶", "엘리");
dog1.play();
dog1.printName();
