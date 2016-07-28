$(function(){
	var $x = location.search;
	var reg1 = /\?/g;
	$x = $x.replace(reg1,'')
	$.ajax({
		type:"get",
		url:"../PHP/offlineClass/classDetail.php",
		dataType:"JSON",
		data:{
			t:$x
		},
		success:function(data){
			console.log(data)
			$('.offline_courseName').text(data[0].classType);
			$(".type").text(data[0].type);
			$(".classnum").text(data[0].classNum);
			$(".classTime").text(data[0].classCycle);
			$(".classPrice").text(data[0].classPrice);
			$(".shoolAdress").text(data[0].shoolAddress);
			$(".suitable").text(data[0].suitable);
			$(".contentOfCourses").text(data[0].contentOfCourses);
			$(".learningGoals").text(data[0].learningGoals);
			$(".coursebook").text(data[0].coursebook);
		}
	});
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
// <<<<<<< HEAD
	
	$(".offline_scheduleConsult").on("click",function(){
		$(".offline_userName").val("");
		$(".offline_userTell").val("");
		$("#offline_courseImpression").text("请选择课程印象");
		$(".offline_TIPS").hide();
		$(".offline_mask").css("display","block")
	})
	$(".offline_date").on("click",function() {
		$(".offline_mask").hide();
	})
	$("#offline_courseImpression").on("click",function(){
		$(".offline_courseOption").slideToggle();
		$(this).toggleClass("offline_bottomArrow");
	})
	$(".offline_courseOption").on("click","li",function(){
		$("#offline_courseImpression").text($(this).text());
		$("#offline_courseImpression").removeClass("offline_bottomArrow")
		$(".offline_courseOption").slideUp()
	})
	$("#offline_submit").on("click",function() {
		var flg1 = false;
		var flg2 = false;
		var flg3 = false;  //  flg作为条件通过的判定
		
		var name = $(".offline_userName").val();
		name = name.trim();
		if(name) {
			var reg1 = /^[\u4e00-\u9fa5]|[a-z,A-Z]$/g
			if(reg1.test(name)) {
				flg1 = true;  //  flg1条件通过
				$(".offline_TIPS1").hide();
				$(".offline_TIPS6").hide();
			}else {
				$(".offline_TIPS1").hide();
				$(".offline_TIPS6").show();
			}
		}else {
			$(".offline_TIPS6").hide();
			$(".offline_TIPS1").show();
		}
		
		var tel = $(".offline_userTell").val();
		tel = tel.trim();
		if(tel) {
			var reg2 = /^\b[1]{1}\d{10}\b$/g 
			if(reg2.test(tel)) {
				flg2 = true;  //  flg2条件通过
				$(".offline_TIPS2").hide();
				$(".offline_TIPS3").hide();
			}else {
				$(".offline_TIPS2").hide();
				$(".offline_TIPS3").show();
			}
		}else {
			$(".offline_TIPS3").hide();
			$(".offline_TIPS2").show();
		}
		
		if($("#offline_courseImpression").text() !== "请选择课程印象") {
			flg3 = true;  //  flg3条件通过
			$(".offline_TIPS4").hide();
		}else {
			$(".offline_TIPS4").show();
		}
		
		if(flg1 && flg2 && flg3) {  //  条件都通过
			$(".offline_mask").hide();
		}
	})
// =======
// >>>>>>> 5ee06d781b2f88ea58d5b2da85e10894b9743fa7
})
