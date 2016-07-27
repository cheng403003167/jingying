$(function() {
	$(".school_course").on("click","li",function(){
		if($(this).index()) {
			$(this).addClass("school_colorGreen").siblings().removeClass("school_colorGreen");
		}
	})
	$(".school_postionArea").on("click","li",function(){
		if($(this).index()) {
			$(this).addClass("school_colorGreen").siblings().removeClass("school_colorGreen");
		}
	})
	
	$("#school_list").on("click","li",function() {
		$(this).addClass("school_liBorderTop").siblings().removeClass("school_liBorderTop");
		if($(this).index() === 1) {
			$(".school_good").css("backgroundPosition","0 -865px")
		}else {
			$(".school_good").css("backgroundPosition","0 -847px")
		}
		$(".school_sectionBg").hide();
		$(".school_sectionBg").eq($(this).index()).show();
	})
	
	
	$("#school_page").on("click","li",function() {
		if( ($(this).text() !== "上一页") && ($(this).text() !== "...") && ($(this).text() !== "下一页") ) {
			$(this).addClass("school_pageCheck").siblings().removeClass("school_pageCheck");
		}
		
		if( $(this).text() === "上一页") {
			var i = $(".school_pageCheck").text();  //  i 取当前所在页
			i -= 1;
			if(i <= 1) {
				i = 1;
			}
			$("#school_page").children("li").eq(i).addClass("school_pageCheck").siblings().removeClass("school_pageCheck");
		}
		
		if( $(this).text() === "下一页") {
			var i = $(".school_pageCheck").text();  //  i 取当前所在页
			i = new Number(i);
			i++;
			if( i >= $("#school_page").children("li").size() - 2) {
				$(".school_pageNumber").eq(7).text("8");
				i = $("#school_page").children("li").size() - 2;
			}
			if( $("#school_page").children("li").eq(i).text() !== "..." ) {
				$("#school_page").children("li").eq(i).addClass("school_pageCheck").siblings().removeClass("school_pageCheck");
			}
		}
		
	})
})
