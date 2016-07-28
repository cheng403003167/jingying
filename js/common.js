//	选择切换城市

	$(function(){
		$(".city_pop li").on("click",function(){
			$(".choose_city p").text($(this).text());
//			$(".choose_city p").text($(this).text());
		})
		$(".nav_right_bar").hover(function(){
			$(".nav_right_bar ul").slideDown();
		},function(){
			$(".nav_right_bar ul").slideUp();
		})
	})