



import { myAddFunc, MyPointClass } from './utils'


let a = 1;

{
    let a = 100;
}

let b = 2;


document.write('变量作用域测试，输出相加值：' + (a + b));
document.write('<br><br>');


document.write('调用模块功能测试：---');
document.write('<br>');
document.write('加法测试：' + myAddFunc(3, 6));
document.write('<br>');

let myPoint = new MyPointClass(100, 200);
document.write('点信息：' + myPoint.toString());
document.write('<br>');

