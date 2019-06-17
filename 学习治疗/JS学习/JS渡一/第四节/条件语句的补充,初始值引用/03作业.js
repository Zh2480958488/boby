/*
要求n可以输入
1.计算2的n次幂,n为自然数
2.计算n的阶乘
	5! = 5 * 4 * 3 * 2 *1;
3.斐波那契额数列
   1  1  2  3  5  8输出的n想

4.编写一程序,输入一个三位数的正整数,输出是反相输出
  输入456 输出654
5.输入a,b,c三个数字,打印输出最大的
6.打印100以内的质数  
*/
//接受你输入的东西存入n
var n = parseInt(window.prompt('请输入n'));


/*1.计算2的n次幂,n为自然数
var mul = 1;
for(var i = 0; i < n;i ++){
	mul += 2;
}
document.write(mul);
*/
/*2.计算n的阶乘5! = 5 * 4 * 3 * 2 *1;
var num = 1;
for (; 1<n;n--) {
	num *= n;
}
document.write(num);
*/


/*4.编写一程序,输入一个三位数的正整数,输出是反相输出
  输入456 输出654*/

/*5.输入a,b,c三个数字,打印输出最大的
var a = parseInt(window.prompt('请输入a'));
var b = parseInt(window.prompt('请输入b'));
var c = parseInt(window.prompt('请输入c'));				
if (a > b) {
	if (a>c) {
		document.write(a+"a是最大的数字");
	}
}else if (b > c) {
	document.write(b+"b是最大的数字");
}else{
	document.write(c+"c是最大的数字");
}*/

/*6.打印100以内的质数 
var num = 0;
for(var i = 2; i < 100; i++){
	for (var j = 1; j <= Math.sqrt(i); j++) {
		if (i % j == 0) {
			num ++;
		}
	}
	if ( num == 1) {
		document.write(i+" ");
		}
		num = 0;
}
*/




//
/*3.斐波那契额数列
 1  1  2  3  5  8输出的n项 
var f = 1,
	s = 1,
	t;
if (n > 2) {
for(var i = 1;i < n-1;i ++){
	t = f + s;
	f = s;
	s = t;
	}
	document.write(t);
}else{
	document.write(1);
}*/
 









