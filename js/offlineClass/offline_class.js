$(function(){
	// 课程导航条
	$("#offline_content li").on("click",function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	
	// 课程页面条
	$(".offline_pages span").on("click",function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
		//下一页
	$(".next").on("mousedown",function(){
		$(this).css({
			color:"#fff",
			backgroundColor:"#29b572"
		})
		var i = $(".offline_pages .active").text();
//		var j = 0;
//		console.log(i);
		i ++;		
		if(i > 9) {			
			i = 1;
		}
//		console.log(i);
		$(".offline_pages span").eq(i - 1).addClass("active").siblings().removeClass("active");	
	})
	$(".next").on("mouseup",function(){
		$(this).css({
			color:"#666",
			backgroundColor:"#fff"
		})
	})
		//上一页
	$(".previous").on("mousedown",function(){
		$(this).css({
			color:"#fff",
			backgroundColor:"#29b572"
		})
		var i = $(".offline_pages .active").text();
//		var j = 0;
//		console.log(i);
		i --;		
		if(i < 1) {			
			i = 1;
		}
//		console.log(i);
		$(".offline_pages span").eq(i - 1).addClass("active").siblings().removeClass("active");	
	})
	$(".previous").on("mouseup",function(){
		$(this).css({
			color:"#666",
			backgroundColor:"#fff"
		})
	})
	
})