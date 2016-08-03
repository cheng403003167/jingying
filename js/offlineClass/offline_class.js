$(function(){
	var page = 0,lass = '';
	$.ajax({
		url:"../PHP/offlineClass/classlist.php",
		// dataType:"JSON",
		cathe:false,
		success:function(data){
			$(".class_num span").text(data.length);
			var zheng = parseInt(data.length/15);
			if(data.length%15>0){
				zheng++;
			}
			for(var sp = 1;sp<=zheng;sp++){
				var $span = $("<span>"+sp+"</span>");
				$(".everypages").append($span);
			}
			$(".everypages span").eq(0).addClass("active");
			$(".everypages span").on("click",function(){
				$(this).addClass("active").siblings().removeClass("active");
				page = $(this).index();
				
				onloadcon();
			})
			//下一页
			$(".next").on("mousedown",function(){
				$(this).css({
					color:"#fff",
					backgroundColor:"#29b572"
				})
				var i = $(".offline_pages .active").text();
				i ++;		
				if(i > zheng) {			
					i = zheng;
				}
				$(".offline_pages span").eq(i - 1).addClass("active").siblings().removeClass("active");	
				page = i-1;
				onloadcon();
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
				i --;		
				if(i < 1) {			
					i = 1;
				}
				$(".offline_pages span").eq(i - 1).addClass("active").siblings().removeClass("active");	
				page = i-1;
				onloadcon();
			})
			$(".previous").on("mouseup",function(){
				$(this).css({
					color:"#666",
					backgroundColor:"#fff"
				})
			})
			onloadcon();
			function onloadcon(){
				$(".offline_class").html("");
				for(var t = page*15;t<page*15+15;t++){
					if(t<data.length){
						var $li = $("<li/>");
						$li.html('<a href="../../offlineClass/offlineClass.html?'+(t+1)+'">'+
									'<div class="class_img">'+
										'<img src="'+data[t].imgAddress+'" />'+
										'<span>7.6分</span>'+
									'</div>'+
									'<p class="classTitle">'+data[t].classType+'</p>'+
									'<p class="classdes">'+data[t].classDescribe+'</p>'+
									'<h3>'+
										'<span class="mm">&yen</span>'+
										'<span>1000</span>'+
										'<del>&yen100</del>'+
										'<span class="sales_num">已售129033</span>'+
									'</h3>'+
								'</a>');
						$(".offline_class").append($li);
					}
				}
			}
		}
	});
	
	// 课程导航条
	$("#offline_content li").on("click",function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
})