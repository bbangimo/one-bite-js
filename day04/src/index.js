//mission1
//아래 배열에서 칼로리가 500 이상인 음식의 이름을 출력
let foods = [
  { name: "Burger", calories: 800 },
  { name: "Apple", calories: 52 },
  { name: "Pizza", calories: 550 },
  { name: "Salad", calories: 150 },
];

for (let i = 0; i < foods.length; i++) {
  if (foods[i].calories >= 500) {
    console.log(foods[i].name);
  }
}

//mission2
//동물의 종류와 소리를 인자로 받아 객체를 생성하는 Animal 생성자 함수를 작성해주세요. 그리고 makeSound 메서드를 추가하여 동물이 내는 소리를 출력하는 기능을 구현하세요.
function Animal(type, sound) {
  this.type = type;
  this.sound = sound;

  this.makeSound = function () {
    console.log(`${this.type} 이(가) ${this.sound} 소리를 냅니다.`);
  };
}
let dog = new Animal("강아지", "멍멍");
let cat = new Animal("고양이", "야옹");
dog.makeSound();
cat.makeSound();
