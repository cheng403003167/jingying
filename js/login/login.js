$(function(){
	$(".col1").on('click',function(){
		$(this).addClass("fontSize").find(".bottomLine").addClass("lineShow");
		$(this).siblings().removeClass("fontSize").find(".bottomLine").removeClass("lineShow");
		if($.trim($(this).text())==="注册"){
			$(".logon").show();
			$(".denglu").hide();
			$('.warn').hide();
			$(".input").val('');
		}else{
			$(".logon").hide();
			$(".denglu").show();
			$('.warn').hide();
			$(".input").val('');
		}
	})
	$(".input").on("focus",function(){
		$(this).parent("div").css({
			borderColor:"#29B572"
		})
	})
	$(".cl").on("click",function(){
		if(!$(this).is(":checked")){
			$(".warnPwd4").show();
		}else{
			$(".warnPwd4").hide();
		}
	})
	var $reg = /1[358]\d{9}/;
	var $t = '';
	$(".input").on("blur",function(){
		$(this).parent("div").css({
			borderColor:"#ccc"
		})
		if($(this).hasClass("user")){
			if(!$(this).val()){
				$(".warnPhone1").show();
				$(".warnPhone2").hide();
			}else if(!$reg.test($(this).val().trim())){
				$(".warnPhone1").hide();
				$(".warnPhone2").show();
			}else{
				$(".warnPhone1").hide();
				$(".warnPhone2").hide();
				$(".warnPhone3").hide();
			}
		}else if($(this).hasClass('pass')){
			if(!$(this).val()){
				$(".warnPwd").show();
			}else{
				$(".warnPwd").hide();
				$t = $(this).val();
			}
		}else if($(this).hasClass('passre')){
			if(!$(this).val()){
				$(".warnPwd2").show();
				$(".warnPwd3").hide();
			}else if($(this).val() != $t){
				$(".warnPwd2").hide();
				$(".warnPwd3").show();
			}else{
				$(".warnPwd2").hide();
				$(".warnPwd3").hide();
			}
		}else{
			if($(".denglu").css("display") == "block"){
				if(!$('.input2').eq(0).val()){
					$('.warnCode').eq(0).show();
				}else{
					$('.warnCode').eq(0).hide();
					$('.warnCode2').eq(0).hide();
				}
			}else{
				if(!$('.input2').eq(1).val()){
					$('.warnCode').eq(1).show();
				}else{
					$('.warnCode').eq(1).hide();
					$('.warnCode2').eq(1).hide();
				}
			}
			
			
		}
	})
})
