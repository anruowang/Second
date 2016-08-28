// function shopping_commend_show(){
// 	$("#shopping_commend_sort").toggle(
// 		function(){
// 			$("#shopping_commend_arrow").attr("src","images/shopping_arrow_up.gif");
// 		},
// 		function(){
// 			$("#shopping_commend_arrow").attr("src","images/shopping_arrow_down.gif");
// 		}
// 		)
// }

// function shopping_commend_show(){
// 	$("#shopping_commend_sort").toggle();
// 	if($("#shopping_commend_sort").css("display")=='none'){
// 		$("#shopping_commend_arrow").attr("src","images/shopping_arrow_down.gif");
// 	}else{
// 		$("#shopping_commend_arrow").attr("src","images/shopping_arrow_up.gif");		
// 	}
// }

function shopping_commend_show(){
	var $sort=$("#shopping_commend_sort");
	var $arrow=$("#shopping_commend_arrow");
	$sort.toggle();
	if($sort.css("display")=='none'){
		$arrow.attr("src","images/shopping_arrow_down.gif");
	}else{
		$arrow.attr("src","images/shopping_arrow_up.gif");		
	}
}

function deleteProduct(id){
	var r=confirm("您确定删除本商品吗？");
	if(r){
		$("#"+id).remove();
		productCount();
	}
}

$(function(){
	productCount();
});

function productCount(){
	var savemoney=0;
	var score=0;
	var total=0;

	var markettotal=0;

	var sc=0;
	var price=0;
	var ddprice=0;
	var num=0;

	var trs=$("#myTableProduct tr");
	for(var i=0;i<trs.length;i++){
		sc=$(trs[i]).find("td:eq(1) label").html();
		price=$(trs[i]).find("td:eq(2) label").html();
		ddprice=$(trs[i]).find("td:eq(3) label").html();
		num=$(trs[i]).find("td:eq(4) input").val();

		score+=sc*num;
		total+=ddprice*num;
		markettotal+=price*num;
	}
	
	$("#product_total").html(total.toFixed(2));
	$("#product_save").html(	(markettotal-total).toFixed(2) );
	$("#product_integral").html(score.toFixed(0));

}

function buyProduct(ulid){
	//取出表格
	var $table=$("#myTableProduct");
	var $ul=$("#"+ulid);
	var flag=-1;
	var pname=$ul.find("li:eq(0) a").html();//选定的商品
	var $trs=$table.find("tr");
	for(var i=0;i<$trs.length;i++){
		if($($trs[i]).find("td a").html()==pname){
			flag=i;
			break;
		}
	}
	if(flag==-1){
		addTr($table,$ul);
	}else{
		updateNum(flag);
	}
	productCount();
}

function updateNum(index){
	var num=parseInt($("#myTableProduct tr:eq("+index+")").find("td:eq(4) input").val());
	$("#myTableProduct tr:eq("+index+")").find("td:eq(4) input").val(num+1);
}

function addTr($table,$ul){
	var pname=$ul.find("li:eq(0) a").html();
	var price=$ul.find("li:eq(1)").html().substring(1);
	var ddprice=$ul.find("li:eq(2)").html().substring(1);
	//计算编号的值
	var newid=parseInt($table.find("tr:last").attr("id").split("_")[1])+1;
	var newtr=$table.find("tr:last").clone();
	$(newtr).attr("id","shoppingProduct_0"+newid);
	$(newtr).find("td:eq(0)").html("<a href='#' class='blue'>"+pname+"</a>");
	$(newtr).find("td:eq(1) label").html((ddprice*10).toFixed(0));
	$(newtr).find("td:eq(2) label").html(price);
	$(newtr).find("td:eq(3)").html("￥<label>"+ddprice+"</label>("+(ddprice/price*100).toFixed(0) +"折)");
	$(newtr).find("td:eq(4) input").val(1);
	$(newtr).find("td:eq(5) a").attr("href","javascript:deleteProduct('shoppingProduct_0"+newid+"')");
	$table.prepend(newtr);
}