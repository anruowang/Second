//jquery源码分析
function(){
	(21,94) 定义了一些变量和函数  jquery=function(){}
	(96,283) 给jquery对象添加一些方法和属性
	(285,347) extend的定义：用于实现jquery的继承包括静态方法的扩展和实例方法的扩展
	(349,817):jQuery.extend():静态工具方法的扩展(jquery工具方法都作为jquery的实例方法的支持)
	(877,2856):sizzle:复杂选择器的实现  sizzle本身是一个独立的模块，如果在项目中只要用jquery
	的sizzle功能，可以只下载这部分的代码
}()