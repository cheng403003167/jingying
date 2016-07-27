$(function() {
	
	/*---------- 侧边栏点击效果 ----------*/
	var $p = $(".left").find("p");
	var _len = $p.length;
	for (var i = 0; i < _len; i++) {
		$p.eq(i).on("click", function() {
			for (var j = 0; j < _len; j++) {
				$p.eq(j).removeClass("currentP").siblings().removeClass("currentSpan");
			}
			$(this).addClass("currentP").siblings().addClass("currentSpan");
		});
	}
	/*----------------------------------*/
	/*-------------订单切换效果开始---------------------*/
	$(".classState li").on("click",function(){
		$(this).find("span").addClass("blo");
		$(this).siblings().find("span").removeClass("blo");
		var $str = $(this)[0].className;
		$(".canlist").show();
		$(".canlistor").hide();
		$(".head .check").get(0).checked = false;
		$.each($(".everyList .check"),function(i,n){
				$(n).removeAttr("checked");
			})
		$.each($(".everyList"),function(i,n){
			if($(n).hasClass($str)){
				$(n).show();
			}else{
				$(n).hide();
			}
		})
		lastli();
	})
	/*-------------订单切换效果结束---------------------*/
	/*-------------多选点击开始---------------------*/
	$(".everyList .check").on("click",function(){
		var checknum = 0;
		$.each($(".everyList .check"),function(i,n){
			if($(n).is(":checked")){
				checknum++;
			}else{
				checknum = checknum;
			}
		})
		if(checknum == $(".everyList .check").length){
			$(".head .check").get(0).checked = true;
		}else{
			$(".head .check").get(0).checked = false;
		}
		if($(this).is(":checked")||checknum>0){
			$(".canlist").hide();
			$(".canlistor").show();
		}else{
			$(".canlist").show();
			$(".canlistor").hide();
		}
	})
	$(".head .check").on("click",function(){
		if($(this).is(":checked")){
			$.each($(".everyList .check"),function(i,n){
				$(n).get(0).checked = true;
			})
			$(".canlist").hide();
			$(".canlistor").show();
		}else{
			$.each($(".everyList .check"),function(i,n){
				$(n).removeAttr("checked");
			})
			$(".canlist").show();
			$(".canlistor").hide();
		}
	})
	/*-------------多选点击结束---------------------*/
	
	
	/*-------------删除点击开始---------------------*/
	$(".canlistor").on("click",function(){
		$(".canlist").show();
		$(".canlistor").hide();
		$(".head .check").get(0).checked = false;
		$.each($(".everyList .check"),function(i,n){
			if($(n).is(":checked")){
				if($(n).parents("li").css("display")=="list-item"||$(n).parents("li").css("display")=="block"){
					$(this).parents("li").remove();
				}
			}
		})
		lastli();
	})
	/*-------------多选点击结束---------------------*/
	
	
	/*-------------下边框开始---------------------*/
	lastli();
	function lastli(){
		var arr = [];
		$.each($(".everyList"),function(i,n){
			$(n).css("borderBottom","1px solid #e8e8e8");
			if($(n).css("display")=="list-item"||$(n).css("display")=="block"){
				arr.push($(n));
			}
		})
		if(arr.length>0){
			arr[arr.length-1].css("border",0);
		}
	}
	/*-------------下边框结束---------------------*/
	
	
	/*-------------退款开始---------------------*/
	$(".everyList .listOperate").on("click",function(){
		if($(this).text() === "退款"||$(this).text() === "评价"){
			$(this).parents("li").find(".refundOrder").slideDown();
			$(".qian").val($(this).parents(".everyList").find(".listMoney").text());
		}
	})
	$(".kuang").on("click",function(){
		$(this).find(".Oper").slideToggle("fast");
	})
	$(".Oper p").on("click",function(){
		$(".kuangSel .re").remove();
		var $p = $("<p class='re'></p>");
		$p.text($(this).text());
		$(".kuangSel").prepend($p);
	})
	$(".deal").on("input",function(){
		if($(this).hasClass("pin")){
			$(".bian").eq(1).text(200-$(".deal").eq(1).val().length);
		}else{
			$(".bian").eq(0).text(200-$(".deal").eq(0).val().length);
		}
	})
	$(".refundUp").on("click",function(){
		$(this).parents("li").find(".refundOrder").slideUp(function(){
			$(".kuangSel .re").remove();
			if($(this).find(".refundUp").hasClass("upPin")){
				$(".bian").eq(1).text(200);
				$(".deal").eq(1).val('');
				$(".xing a").css("backgroundPositionX","left");
			}else{
				$(".deal").eq(0).val('');
				$(".bian").eq(0).text(200);
			}
		});
	})
	/*-------------退款结束---------------------*/
	
	
	/*-------------评价开始---------------------*/
	$(".xing a").on("click",function(){
		$(".xing a").css("backgroundPositionX","left");
		for(var $i = 0;$i<=$(this).index();$i++){
			$(".xing a").eq($i).css("backgroundPositionX","right")
		}
	})
	$(".xingde").on("click",function(){
		$(this).toggleClass("xingde2");
	})
	/*-------------评价结束---------------------*/
});
