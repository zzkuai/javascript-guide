/**
 * 语法和数据类型
 */

/// 声明
// JavaScript有三种声明方式。
// 1.var 声明一个变量，可选初始化一个值。
// 2.let 声明一个块作用域的局部变量，可选初始化一个值。
// 3.const 声明一个块作用域的只读常量。

/// 变量的作用域
// 1.全局作用域
var x = 1;
console.log(x); // 1

// 2.函数作用域
function func() {
  var y = 2;
  console.log(y); // 2
}
func();
console.log(y); // ReferenceError: y 没有被声明

// 3.块作用域
if (true) {
  let z = 3;
  console.log(z); // 3
}
console.log(z); // ReferenceError: z 没有被声明

/// 变量提升
console.log(zz); // undefined
var zz = 1;

var myvar = "my value";

(function () {
  console.log(myvar); // undefined
  var myvar = "local value";
})();

zone = 123; // ReferenceError
let zone; // 如果区块中使用 let/const 对变量进行了声明 那么在声明之前使用这些变量就会报错 -- 称为 "暂时性死区"

/// 函数提升
// 对于函数来说，只有函数声明会被提升到顶部，而函数表达式不会被提升。
// 函数声明
foo(); // "bar"
function foo() {
  console.log("bar");
}

// 函数表达式
baz(); // 类型错误：baz 不是一个函数
var baz = function () {
  console.log("bar2");
};

/// 数据结构和类型

// 基本数据类型
var str = "1"; // string
var num = 1; // number
var bol = true; // boolean
var nul = null; // null
var und = undefined; // undefined
var sym = Symbol(1); // Symbol
var big = 9007199254740992n; // BigInt

// 复杂类型 -- 对象
var obj = { a: 1 }; // object
var arr = [1, 2, 3]; // array
var func = function () {
  return 1;
}; // function
