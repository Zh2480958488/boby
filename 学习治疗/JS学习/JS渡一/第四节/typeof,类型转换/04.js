/*

var n = 3;
switch(n){
	case 'a':
		console.log('a');
		break;
	case true:
		console.log('b');
		break;
	case 3:
		console.log('c');
		break;
	case 4:
		console.log('d');
		break;		
}
*/
/*
var date = window.prompt('input');
switch(date){
	
	case "monday"	:
	case "tuesday"	:
	case "wednesday":
	case "friday"	:
	console.log('workink');
		break;
	case "6"		:
	case "7"		:
	console.log('relaxing');
		break;
}
*/

/*
初始引用值
数组
*/
// var arr = [1, 'a', undefined, 1.2];
// arr[0] = 2;
// for (var i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

/*
对象 : 本质也是存储数据的
object
lastName : "Deng",
属性名 		属性值
*/
// var deng = {
// 	lastName : "Deng",
// 	age : 40,
// 	sex : undefined,
// 	wife : "xiaoliu",
// 	father : "dengdaye",
// 	son : "xiaodeng",
// 	handsome : false,
// }
// deng.lastName = "old deng";
// console.log(deng.lastName);

/*返回分析类型
typeof();
返回6种类型值
	number 	string 	boolean
	object	undefined function
*/



// var num = null;
// console.log(typeof(num));
/*类型转换
Number(demo);转换为数字
parseInt(demo, radix);数字转换为整形的数字
	以radix为基底(进制),取值范围2-36,转换为10进制数字
	数字位往后看到非数字位截至	返回
parseFloat(demo);数字转换为浮点的数字
	数字位往后看到非数字位截至	返回
String(demo);转换为字符串
Boolran(demo);转换为布尔值
demo.toString(radix);转换为字符串 注意:undefined,null不可以用此方法
		由demo值(10进制数字)转换到radix目标进制

*/			
// var num = 1 * "1";
// console.log(typeof(num) + " : " + num);
 // var demo = "100px";
 // var num = parseInt(demo, 16);
 // var demo1 = 10;
 // var num1 = demo1.toString(8);
 // demo.toString();
 // console.log(typeof(num) + " : " + num);


/*隐式类型转换
	isNaN(demo);判断值是否是
		转换 Number('abc') 是否是非数
	++/--  +/-(正/负)
	*  / %
		转换 Number('abc')
	+  链接	
	&&  ||	!
		判断转换boolean类型
	< > <= >=	==  !=
		转换 Number('abc')
	===绝对等于:类型值姚一摸一样

*/
console.log(isNaN(undefined));
//++
var a = "123";
a ++;//Number("123");


// 变量不定义直接使用
  // console.log(typeof(typeof(a)));



//科学记数法
var num = 123123.123654;
alert(num.toFixed(3));//截断小数点后3位四舍五入

