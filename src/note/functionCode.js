/**
 * 函数式编程
 * @http 原文链接 https://juejin.im/post/5d8f0866e51d4578110dc765
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

{
    //解释
    //1.0
    var calc = (a) => {
        return (b) => a + b;
    }
    //2.0
    var addA = (b) => 2 + b;
    //3.0
    addA(3) || addA(4);
}

// 一句话概括一下： 在做不同的事情的情况下，可能是基于某一个相同的条件

// 非函数式
var a = 1;
function calc(){
    ++a
}
calc()

// 函数式
var a = 1;
function calc(num){
    return ++num
}
calc(a)

// 一句话概括一下：不要让你的函数，去影响到外部的变量