/*
在JS中所有数值都时Number类型
包括整数
	浮点数(计算容易失去精确度,千万不要使用JS进行精确度高的运算)
*/
var demo = 123;
var demo1 = 1.23;

/*可以使用运算符判断值的类型
	typeof demo
	typeof(demo)
*/
console.log(typeof(demo));

/* JS数值中最大值
超过最大值表述范围则返回Infinity(正无穷)
	NAN 非数(不和任何数相等) 属于Number类型
*/
var demo2 = Number.MAX_VALUE * Number.MAX_VALUE;
console.log(demo2);