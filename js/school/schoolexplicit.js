$(function() {
	//  课程详情，其他课程，用户评价  切换
	$(".school_list").on("click","li",function(){
		$(this).addClass("school_liBorderTop").siblings().removeClass("school_liBorderTop");
		
		$(".school_sectionList").hide();  //  隐藏div
		$(".school_sectionList").eq($(this).index()).show();  //  显示出来
	});	
})
