/*将其他数据类型转换为Number
	- 1.Number() 函数
		String >> Number
			1.纯数字直接转换
			2.含字母转换为NaN
			3.空串转换为0
		Boolean >> Number
			1.true >> 1
			2.false >> 	0
		null >> Number
			1.null >> 0
		Undefined >> Number	
			1.Undefined >> NaN
*/
var demo = "123";
console.log(typeof(demo));
console.log(demo);
var demo1 = Number(demo);
console.log(typeof(demo1));
console.log(demo1);

/*第二种转换方式
	著用于对付字符串
	- 1. parseInt() 把一个字符串转换成整数
		阔以将字符串有效整数取用
	- 2. parseFloat() 把一个字符串转换成小数	
		阔以将字符串有效小数取用
	注意:如果对非String类型数据使用
			parseInt(),parseFloat()
			它会先将其转换为String类型再操作	
	*/
var demo2 = "123px";
var demo3 = parseInt(demo2);
console.log(typeof(demo3));
console.log(demo3);
