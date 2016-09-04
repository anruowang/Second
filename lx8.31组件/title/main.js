;(function(w,d,u,$){
	$.fn.linkWithPic=function(){
		$(this).hover(function(e){
			//title文字 的获取
			// var title=$(this).attr("title")||'&nbsp';
			var t=$(this).attr("title");
			var title=t!=undefined&&t!="&nbsp;"?t:"&nbsp;";

			//添加一个层
			$("body").append("<div id='screenshot'><img src='"+$(this).attr("rel")+"   '/></div>");
			
			if( t!=undefined&&t!='&nbsp;'){
				$("#screenshot").append("<br/>"+title);
			}else{
				$("#screenshot").append(title);
			}

			$(this).attr("temp",title).removeAttr("title");
			//加入图片，加入文字
			$("#screenshot").css({
				"top":(e.pageY+20)+"px",
				"left":(e.pageX+20)+"px"
			}).fadeIn("slow");
		},function(){
			var title=$(this).attr("temp");
			$(this).attr("title",title).removeAttr("temp");
			$("#screenshot").remove();
		});

		$(this).mousemove(function(e){
			$("#screenshot").css({
				"top":(e.pageY+20)+"px",
				"left":(e.pageX+20)+"px"
			});
		});
	};
})(window,document,undefined,$);