/*强制类型转换
	- 指将一种数据类型强制转换为其他的数据类型
	- 类型转换主要指,将其他数据类型转换为
		String 	Number Boolean
*/

/*将其他数据类型转换为String类型
  - 1. 调用toString()方法
		该方法不会影响到原来变量
		Null Undefined没有toString()方法
  - 2. 调用String()函数
  		此函数对于Number和Boolean就时调用toString方法
		对于Null和Undefined会直接转换为"Null"和"Undefined"

*/

var demo = 123;
var demo1 = demo.toString();
console.log(typeof(demo));
console.log(demo);
console.log(typeof(demo1));
console.log(demo1);

var demo2 = String(demo);
console.log(typeof(demo2));
console.log(demo2);
