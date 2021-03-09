/**
 * 流程控制与错误处理
 */

/// 语句块
// 语句块通常用于流程控制，如if，for，while等等。

// 条件判断语句 if...else 语句
// falsy 值
// false undefined null 0 NaN ''

// switch 语句

/// 异常处理语句
// Error 类型
// 1.EvalError 创建一个error实例，表示错误的原因：与 eval() 有关。
// 2.InternalError 创建一个代表Javascript引擎内部错误的异常抛出的实例。 如: "递归太多".
// 3.RangeError 创建一个error实例，表示错误的原因：数值变量或参数超出其有效范围。
// 4.ReferenceError 创建一个error实例，表示错误的原因：无效引用。
// 5.SyntaxError 创建一个error实例，表示错误的原因：eval()在解析代码的过程中发生的语法错误。
// 6.TypeError 创建一个error实例，表示错误的原因：变量或参数不属于有效类型。
// 7.URIError 创建一个error实例，表示错误的原因：给 encodeURI()或  decodeURl()传递的参数无效。

// throw 语句
throw "Error2"; // String type
throw 42; // Number type
throw true; // Boolean type
throw {
  toString: function () {
    return "I'm an object!";
  },
};

// try...catch 语句
try {
  throw ReferenceError("asd");
} catch (err) {
  // err 标识符只存在于catch块的存续期间里 当catch块执行完成时，标识符不再可用。
  console.log(err instanceof ReferenceError, err.name, err.message);
}

function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(1);
    return true; // this return statement is suspended
    // until finally block has completed
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now
  console.log(5); // not reachable
}
f(); // console 0, 1, 3; returns false

// 用 finally 块覆盖返回值也适用于在 catch 块内抛出或重新抛出的异常：
function f() {
  try {
    throw "bogus";
  } catch (e) {
    console.log('caught inner "bogus"');
    throw e; // this throw statement is suspended until
    // finally block has completed
  } finally {
    return false; // overwrites the previous "throw"
  }
  // "return false" is executed now
}

try {
  f();
} catch (e) {
  // this is never reached because the throw inside
  // the catch is overwritten
  // by the return in finally
  console.log('caught outer "bogus"');
}

// OUTPUT
// caught inner "bogus"
