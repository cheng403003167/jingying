	
	$(function(){
		
			

// 弹窗蒙层问题
		$("#update_success a").on("click",function(){
			$("#update_success").hide();
			$("#update_mask").hide();
		})
//	首页大图广告轮播块
		// 圆点点击事件
		var index = 0;
		$(".pic_auto .circle span").on("click",function(){
			index = $(this).index();
			fade();
		})
		function fade() {
			$(".pic_auto .pic_inner").children("a").eq(index).fadeIn(600).siblings().fadeOut(600);
			$(".pic_auto .circle span").eq(index).addClass("active").siblings().removeClass("active");
		}
		//轮播状态
		var timer = setInterval(function(){			
			index ++;			
			if(index > 2) {
				index = 0;
			}
			fade();
		},4000)
		$(".pic_auto").hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(function(){
				index ++;			
				if(index > 2) {
					index = 0;
				}
				fade(index);
			},4000)
		})
		
		//	合作机构点击事件
		var index1 = 0;
		$(".partner_rightBar").on("click",function(){
			$(".partner_inner a").eq($(".partner_inner img").length - 1).prependTo($(".partner_inner"));						
		})
		$(".partner_leftBar").on("click",function(){
			$(".partner_inner a").eq(0).appendTo($(".partner_inner"));
		})
	})

//  右侧悬浮返回顶部
	var rightContent = document.getElementById("right_content");
	var rightBar = document.querySelector(".right_content_bar");
	document.onscroll = function() {
		// 滚动到一定高度,悬浮款消失
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		if(scrollTop > 1000) {
			rightContent.style.display = "block";
		}else {
			rightContent.style.display = "none";
		}
	}
	//返回顶部
	rightBar.onclick = function() {
		var scrollTop = 0;
		var change = 0;
		var end = 0;		
		var t = 0;
		var maxT = 30;
		var timer = setInterval(function(){
			scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			change = end - scrollTop;			
			t++;
			if(t >= maxT) {
				clearInterval(timer);
			}
			document.body.scrollTop = change/maxT*t + scrollTop;			
		},17)		
	}
	
	// 合作机构点击
//	var inner = document.querySelector(".partner_inner");
//	var imgList = inner.getElementsByTagName("img");
//	var left = document.querySelector(".partner_leftBar");
//	var right = document.querySelector(".partner_rightBar");
//	var offLeft = inner.offsetLeft; 
//	var index = 0;
//	right.onclick = function() {
//		index ++;
//		var be
//	}
//		index --;
//		if(index <= 0) {
//			index = 0;
//		}else {
//			
//		}
//	}
	
	

	
