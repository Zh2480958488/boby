/*
 js基本语法
	变量
		声明变量:var i;
		赋值变量:i = 100;
			或者:var i = 100;
*/
	 
var i;
i = 100;
document.write(i);//打印
//声明变量 a , b, c, d, e, f赋值 a, b, c, d
var a = 10,
	b = 20,
	c = 30,
	d = 40,
	e,
	f;
/*数据类型	
	原始值
		number
		boolean
		String
		undefind  没有定义的,没有赋值
		null	  占位

	引用值
		array
		Object
		function
		date
		RegExp

*/

var arr = [1, 2.2, false, "abc", null, undefined];
arr.push(1);//把1添加进数组
