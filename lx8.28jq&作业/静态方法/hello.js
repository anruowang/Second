$.extend({
	sayHello:function(){
		if(arguments.length>0){
			$("<div>hello"+arguments[0]+"</div>").appendTo($("body"));
		}else{
			$("<div>hello</div>").appendTo($("body"));
		}
	},
	log:function(){
		var n=new Date();
		var year= n.getFullYear();
		var month=n.getMonth();
		var date=n.getDate();
		var hour=n.getHours();
		var minutes=n.getMinutes();
		var seconds=n.getSeconds();
		var str=year+"年"+month+"月"+date+"日"+hour+":"+minutes+":"+seconds+" :消息如下："+(arguments.length>0?arguments[0]:"");
		$("<div>"+str+"<div>").appendTo($("body"));		 
	},
	ltrim:function(str){
		return str.replace( /(^\s*)/g,"");		
	},
	rtrim:function(str){
		return str.replace(/(\s*$)/g,"");
	}
});

////////////////实例方法扩展////////////////////////////
$.fn.setColor=function(){
	//调用了setColor的jquery的对象
	this.css("color","red");
}
//$("a")[0]  dom对象
$.fn.showLink=function(){
	this.css("color","red");
	this.each(function(index,obj){
		//注意在这个内部函数中的this,不是指外面的this(指的是a标记的集合，这个函数中的this指的循环出来的每个a)
		//因为在这里使用this.each,它将一个jquery的集合中的每个元素提出来，这时提出来的元素是一个dom对象
		//为了调用jquery方法，又要重新包装成 jquery对象
		//this.html($(this).attr("title")+" "+$(this).attr("href"));
		this.innerHTML=this.title+" "+this.href;
		});
	}

$.fn.showLink2=function(options){
	var default={
		"color":"red",
		"background-color":"yellow"
	};
	$.extend(defaults,options);

	this.css("color",defaults.color).css("background-color",defaults["background-color"]);
	return this.each(function(index,obj){
		//注意在这个内部函数中的this,不是指外面的this(指的是a标记的集合，这个函数中的this指的循环出来的每个a)
		//因为在这里使用this.each,它将一个jquery的集合中的每个元素提出来，这时提出来的元素是一个dom对象
		//为了调用jquery方法，又要重新包装成 jquery对象
		//this.html($(this).attr("title")+" "+$(this).attr("href"));
		this.innerHTML=this.title+" "+this.href;
		});
	}