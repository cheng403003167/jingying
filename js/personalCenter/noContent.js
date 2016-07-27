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
	
	/*--------- bottom部分点击效果 ----------*/
	var _li = $(".subSelect li");
	for (var i = 0; i < _li.length; i++) {
		_li.eq(i).on("click", function() {
			$(this).addClass("selected").siblings().removeClass("selected");
		});
	}
	/*--------- bottom部分点击效果 ----------*/
});
