/**
 * 原型 继承 原型链
 */

// 继承 -- 一种结构 -> 对象
// 每个实例对象都有一个私有属性(__proto__) 指向 该实例对象的构造函数的原型对象(prototype)
// 所有的函数会有一个特别的属性 -- prototype
// 例如
const obj = {};
console.log(obj.__proto__ === Object.prototype); // true

/// 基于原型链的继承
// 继承属性
const f = function () {
  this.a = 1;
  this.b = 2;
};
const o = new f();

f.prototype.b = 3;
f.prototype.c = 4;

// 完整继承链为
// o{a:1,b:2} -> f{c:3,d:4} -> Object.prototype -> null
// o.__proto__ === f.prototype - f.prototype.__proto__ === Object.prototype
console.log(o.a); // 1
console.log(o.b); // 2
console.log(o.c); // 4
console.log(o.d); // undefined

// 继承方法
const o = {
  a: 2,
  m() {
    return this.a + 1;
  },
};
console.log(o.m()); // 3

const p = Object.create(o);
p.a = 4;
console.log(p.m()); // 5
console.log(o.m.call(p));

/// 类式继承
// 父类
function Animal() {
  this.name = "";
  this.foot = 4;
  this.sound = "";
}
Animal.prototype.call = function () {
  console.log(this.name + " " + this.sound);
};

// 子类
function Cat() {
  Animal.call(this);
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

const cat1 = new Cat();
cat1.name = "jerry";
cat1.sound = "miao";
cat1.call();

// 使用 es6 class 继承
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(this.name + "向你问好!");
  }
}

class Teacher extends Person {
  constructor(name, age) {
    super(name, age);
    this.job = "教书";
  }

  info() {
    return this.name + "已经" + this.age + "岁了,他的工作是" + this.job + "。";
  }
}

const p1 = new Teacher("小明", 23);
console.log(p1.info());
p1.sayHi();
