$(function(){
	$.focus=function(id){
		//取出层的高度
		var sWith=$(id).width();
		//取出li的个数-》生成数字按钮
		var len=$(id).find("ul li").length;
		//图片的索引
		var index=0;

		var picTimer=0;

		//添加数字按钮
		var btn="<div class='btnBg'></div><div class='btn'>";
		for(var i=0;i<len;i++){
			var ii=i+1;
			btn+="<span>"+ii+"</span>";
		}
		btn+="</div><div class='preNext pre'></div><div class='preNext next'></div>";
		$(id).append(btn);

		$(id).find("div.preNext").css("opacity",0.3);

		$(id+" div.btn span").css("opacity",0.3).mouseover(function(){
			 index=$(id+" div.btn span").index(this);
			//显示这张图
			showPic(index);
		}).eq(0)
		// .css("opacity",1);
		.trigger("mouseenter");

		//控制上下页 鼠标放下 移开时的外观
		$(id+" .preNext").hover(function(){
			$(this).stop(true,false).animate({"opacity":0.8},300)
		},function(){
			$(this).stop(true,false).animate({"opacity":0.3},300);
		});

		//控制上下页 的.li
		$(id+" .next").click(function(){
			index++;
			if( index==len){
				index=0;
			}
			showPic(index);
		});

		$(id+" .pre").click(function(){
			index--;
			if( index==-1){
				index=len-1;
			}
			showPic(index);
		});

		//控制定时器，当鼠标移到div时，图片定时器停止，鼠标移开时，定时器启动
		$(id).hover(function(){
			clearInterval(picTimer);
		},function(){
			picTimer=setInterval(function(){
				showPic( index);
				index++;
				if(index==len){
					index=0;
				}
			},1000)
		}).triggle("mouseout");

		//定义一个私有函数  showPic就能访问到  sWith
		function showPic(index){
			//要偏移的距离
			var nowLeft=-index*sWith;//sWith:800px正好是一张图片的宽高
			$(id+" ul").stop(true,false).animate({"left":nowLeft},300);
			//数字按钮上改样式
			$(id+" .btn span").stop(true,false).animate({opacity:0.4},300)
					.eq(index).stop(true,false).animate({"opacity":1},300);
		}
	};
});