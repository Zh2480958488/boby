/*一元运算符
	只需要一个操作数
	+   正号		作用 : 让其他数据类型转换为数字类型
	-	负号

	对于非Number的值会先将其转换为Number再运算
*/

var demo = true;
demo = +demo;
console.log("demo = " + demo);
console.log(typeof(demo));

