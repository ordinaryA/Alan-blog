/**
 * 函数式编程
 */

// 我要做2+3、2+4的操作
// 传统写法
var a = 2;
var b = 3;
var c = 4;
a + b || a + c

// 函数式写法
var calc = a => b => a + b
var addA = calc(2)
addA(3) || addA(4)

//解释
//1.0
calc = (a) => {
    return (b) => a + b;
}
//2.0
addA = (b) => 2 + b;
//3.0
addA(3) || addA(4);