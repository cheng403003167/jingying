$(function() {
	var _len = $(".sideBar").find("p").length;
	for (var i = 0; i < _len; i++) {
		$(".sideBar p").eq(i).on("click", function() {
			$(".sideBar").find("p").removeClass("selected");
			$(this).addClass("selected");
		});
	}
});
