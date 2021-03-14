/**
 * 函数
 *
 * 函数是 JavaScript 中的基本组件之一。
 * 一个函数是 JavaScript 过程 — 一组执行任务或计算值的语句。
 * 要使用一个函数，你必须将其定义在你希望调用它的作用域内。
 */

/// 定义函数
// *函数参数为基本类型的值 不改变原始值本身 如果为对象这类引用类型的值 则会影响原始值

// 1.函数声明
function square(number) {
  return number * number;
}
square(4); // 16

// 2.函数表达式
const cube = function (number) {
  return number * number * number;
};
var x = cube(2); // x gets the value 8

/// 调用函数

//* 函数一定要处于调用它们的域中，但是函数的声明可以被提升(出现在调用语句之后) -- 函数表达式不行
sum(4, 6); // 10
function sum(a, b) {
  return a + b;
}

// 函数可以被递归，就是说函数可以调用其本身。
function factorial(n) {
  if (n == 0 || n == 1) return 1;
  else return n * factorial(n - 1);
}

/// 函数作用域
// 在函数内定义的变量不能在函数之外的任何地方访问
// 下面的变量定义在全局作用域(global scope)中
var num1 = 20,
  num2 = 3,
  name = "Chamahk";

// 本函数定义在全局作用域
function multiply() {
  console.log(this);
  console.log(arguments);
  console.log(Array.isArray(arguments));
  return num1 * num2;
}
multiply(num1, num2); // 返回 60

// 函数堆栈
function foo(i) {
  if (i < 0) return;
  console.log("begin:" + i);
  foo(i - 1);
  console.log("end:" + i);
}
foo(3);
// 输出:
// begin:3
// begin:2
// begin:1
// begin:0
// end:0
// end:1
// end:2
// end:3
