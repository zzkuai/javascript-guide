/**
 * 对象
 */

//// JavaScript中的对象只能使用String类型作为键类型

/// 抽象 类比生活中的事物

/// 创建对象
// 1.使用对象初始化器(对象字面量)
const obj = {
  name: "zzkuai",
  age: 24,
};

// 2.使用构造函数
// *注意通过使用 this 将传入函数的值赋给对象的属性
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
Car.prototype.size = "large";
var myCar = new Car("Eagle", "Talon TSi", 1993);
myCar[1] = "large";
console.log(myCar);
// *注意你总是可以为之前定义的对象增加新的属性
myCar.color = "black";
console.log(myCar);

// 3.使用 Object.create 方法 -- 允许你为创建的对象选择一个原型对象，而不用定义构造函数。
var Animal = {
  type: "Invertebrates",
  displayType() {
    console.log(this.type);
  },
};
var animal1 = Object.create(Animal);
animal1.displayType();

var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType();

/// 对象和属性、方法
const person = {
  name: "zzkuai",
  age: 24,
  sayHi() {
    console.log("hi");
  },
};
// 1.通过点符号访问对象属性
console.log(person.name); // zzkuai
person.sayHi(); // hi

// 2.通过方括号访问对象属性
console.log(person["age"]); // 24

/// 删除属性
// 你可以用 delete 操作符删除一个不是继承而来的属性
delete person.age;
console.log(person);

/// 枚举对象的所有属性
// 1.for in -- 该方法依次访问一个对象及其原型链中所有可枚举的属性
Object.prototype._test = "test";
function showPropsWithForIn(obj, objName) {
  var result = "";
  for (var key in obj) {
    result += objName + "." + key + " = " + obj[key] + "\n";
  }
  return result;
}
console.log(showPropsWithForIn(person, "person"));

// 2.Object.keys -- 该方法返回对象自身包含（不包括原型中）的所有可枚举属性的名称的数组
function showPropsWithObjectKeys(obj, objName) {
  var result = "";
  var keys = Object.keys(obj);
  keys.forEach(function (key) {
    result += objName + "." + key + " = " + obj[key] + "\n";
  });
  return result;
}
console.log(showPropsWithObjectKeys(person, "person"));

// 3.Object.getOwnPropertyNames() -- 该方法返回对象自身包含（不包括原型中）的所有属性(无论是否可枚举)的名称的数组
function showPropsWithGetOwnPropertyName(obj, objName) {
  var result = "";
  var keys = Object.getOwnPropertyNames(obj);
  console.log(keys);
  keys.forEach(function (key) {
    result += objName + "." + key + " = " + obj[key] + "\n";
  });
  return result;
}
console.log(showPropsWithGetOwnPropertyName(person, "person"));

/// 定义 getters 与 setters
// get 语法将对象属性绑定到查询该属性时将被调用的函数。 *注意，尝试为 getters 分配一个值不会改变它。
// 当尝试设置属性时，set 语法将对象属性绑定到要调用的函数。
// 1.使用对象初始化器(对象字面量)
const o = {
  a: 5,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  },
};

console.log("o.a", o.a);
console.log("o.b", o.b);
o.c = 20;
console.log("o.a", o.a);
console.log("o", o);

// 2.使用 Object.defineProperty
Object.defineProperty(o, "d", {
  get() {
    return this.a * 2;
  },
});
console.log("o.d", o.d);

// 3.使用 Object.defineProperties 覆盖现有对象
Object.defineProperties(o, {
  b: {
    get() {
      return this.a + 2;
    },
  },
  e: {
    set(x) {
      this.a = x * 2;
    },
  },
});

console.log("o.b", o.b);
o.e = 20;
console.log("o.a", o.a);
console.log("o", o);
