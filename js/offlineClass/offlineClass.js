$(function(){
	
	//  课程详情，其他课程，用户评价  切换
	$("#offline_list").on("click","li",function(){
		$(this).addClass("offline_liBorderTop").siblings().removeClass("offline_liBorderTop");
		$("#offline_list").siblings("div").removeClass();  //  清除div 的所有class
		$("#offline_list").siblings("div").addClass("offline_displayNone");  //  为所有的div加隐藏
		$("#offline_list").siblings("div").eq($(this).index()).removeClass("offline_displayNone").addClass("offline_displayBlock");  //  所需的div消隐藏，加显示
	});

	//  评论图表
	(function() {
		//  评轮所占比例函数 
		function scale(number) {
			var sumNumber = $(".offline_sumNumber").text();
			var width = $(".offline_line").outerWidth();
			number = number.text();
			return number / sumNumber * width;
		}
	
		$(".offline_goodLine").css("width",scale($(".offline_goodNumber")));  //  好评
		$(".offline_middleLine").css("width",scale($(".offline_middleNumber")))  //  中评
		$(".offline_badLine").css("width",scale($(".offline_badNumber")));  //  差评
	}())
	
	//  评论内容
	$("#offline_page").on("click","li",function() {
		if( ($(this).text() !== "上一页") && ($(this).text() !== "...") && ($(this).text() !== "下一页") ) {
			$(this).addClass("offline_pageCheck").siblings().removeClass("offline_pageCheck");
		}
		
		if( $(this).text() === "上一页") {
			var i = $(".offline_pageCheck").text();  //  i 取当前所在页
			i -= 1;
			if(i <= 1) {
				i = 1;
			}
			$("#offline_page").children("li").eq(i).addClass("offline_pageCheck").siblings().removeClass("offline_pageCheck");
		}
		
		if( $(this).text() === "下一页") {
			var i = $(".offline_pageCheck").text();  //  i 取当前所在页
			i = new Number(i);
			i++;
			if( i >= $("#offline_page").children("li").size() - 2) {
				i = $("#offline_page").children("li").size() - 2;
			}
			if( $("#offline_page").children("li").eq(i).text() !== "..." ) {
				$("#offline_page").children("li").eq(i).addClass("offline_pageCheck").siblings().removeClass("offline_pageCheck");
			}
		}
		
	})
})
