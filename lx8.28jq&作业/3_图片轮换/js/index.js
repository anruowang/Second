//  $(function(){
// 	$('li').mouseover(function(){
// 		$(this).addClass('scroll_number_over');
// 		$('#dd_scroll').attr('src','images/dd_scroll_'+( $(this).html() )+'.jpg')
// 	})
// 		.mouseout(function(){
// 			$(this).removeClass('scroll_number_over');
// 		})
// });


 var index=0;
 var myinterval;
function show(id){
	//开始轮换显示效果
	if( Number(id)){
		index=id;
		clearInterval(myinterval);
	}else{
		index=index%6+1;
	}
	var picname="images/dd_scroll_"+index+".jpg";
	//修改图片
	$("#dd_scroll").attr("src",picname);
	//先将所有的li设置样式
	$("#scroll_number>li").attr("class","scroll_number_out");
	//将选中下标设置样式
	$("#scroll_number>li").eq(index-1).addClass("scroll_number_over");
}

 function start(){
	 myinterval=setInterval("show()",1000); 	
 }
 myinterval=setInterval("show()",1000);


