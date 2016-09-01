;$(function(w,d,u,$){
	$.fn.linkWithPic=function(){
		$(this).hover(function(){
			//title文字 的获取
			var title=$(this).attr("title")||'&nbsp';
			$(this).attr("temp",title);
		},function(){
			var title=$(this).attr("temp");
			$(this).attr("temp",title);
			//添加一个层
			//加入图片，加入文字
			//取出鼠标的位置，加入偏移
			//再设置层的位置
		})
	
	};
})(window,document,undefined,$);