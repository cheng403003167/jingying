//	选择切换城市

	$(function(){
		$(".city_pop li").on("click",function(){
			$(".choose_city p").text($(this).text());
//			$(".choose_city p").text($(this).text());
		})
	})