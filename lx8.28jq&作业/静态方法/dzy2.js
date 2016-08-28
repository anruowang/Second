//将插件中的通用功能封装成一个对象，以对象来调用
var Pretty=function(ele,options){
	this.$ele=ele;
	this.defaults={
		'color':'red',
		'fontSize':'12px'
	};
	$.extend(this.defaults,options);
}

Pretty.prototype={
	beautify:function(){
		return this.$ele.css({"color":this.defaults.color,
						"fontSize":this.defaults.fontSize
		});
	}
}

// 将对象与插件整合到一起
$.fn.myshow=function(options){
	var p=new Pretty(this,options);
	return p.beautify();
}

$.fn.myTable=function(options){
	var $table=$("<table border='1' width='700px'><tr><td>zy</td></tr></table>") ;

	var p=new Pretty( $table,options);

	$table=p.beautify();

	return $table.appendTo("body");
}