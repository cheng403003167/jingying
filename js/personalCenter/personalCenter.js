$(function() {
	/*---------- 时间进度条 ----------*/
	var $percent = 0;
	var $long = $(".progressBarBox").eq(0).width();
	for (var i = 0; i < $(".progressBar").length; i++) {
		$percent =  $(".currentTime").eq(i).text() / $(".totalTime").eq(i).text();
		$(".progressBar").eq(i).css("width", $percent * $long);
	}
	/*----------------------------------*/
	
	/*---------- 侧边栏点击效果与右侧对应区域显示效果 ----------*/
	var $p = $(".left").find("p");
	var _len = $p.length;
	for (var i = 0; i < _len; i++) {
		$p.eq(i).on("click", function() {
			var _index = $(this).index(".left p");
			for (var j = 0; j < _len; j++) {
				$p.eq(j).removeClass("currentP").siblings().removeClass("currentSpan");
				$(".part").eq(j).hide();
			}
			$(this).addClass("currentP").siblings().addClass("currentSpan");
			$(".part").eq(_index).show();
		});
	}
	/*----------------------------------*/
	
	/*---------- 课程切换点击效果 ----------*/
	var $p1 = $(".top").find("p");
	var _len1 = $p1.length;
	for (var i = 0; i < _len1; i++) {
		$p1.eq(i).on("click", function() {
			$(this).siblings().addClass("currentSpan");
			$(this).parent().siblings().find("span").removeClass("currentSpan");
		});
	}
	/*----------------------------------*/
	
	/*--------- 学习曲线图表 ----------*/
	$(".curve").on("click", function() {
		if ($(".myLearningCurve").css("display") === "block") {
			shouping();
		}
	})
	shouping();
	function shouping() {
		$("#chart1").html("");
		var myChart = echarts.init($("#chart1").get(0));
		myChart.setOption({
			title:{
				text: "学习曲线：（你当前所在班级为A班）"
			},
			legend:{
				x:"right",
				itemHeight: 10,
				itemWidth: 10,
				textStyle:{
					fontSize: 12,
				},
				data:[{
					name:'分数',
					icon:"bar",
					
				},{
					name:'线性分数',
					icon:"bar"
				}]
			},
			grid:[{
				x:30,
				x2:40,
				y2:80
			}],
			dataZoom:{
				show:true,
				realtime:true,
			},
			calculable:true,
			xAxis:{
				type:'value', 
				name:'天数',
				nameTextStyle:{
					color:"#999999"
				},
				splitNumber: 20, //x轴显示多少刻度
				axisLine:{
					lineStyle:{
						color:"#e5e5e5"
					}
				},
				axisLabel:{
					textStyle:{
						color:"#999999",
						baseline:"top" //x轴刻度字的位置，往下依次为bottom、middle、top
					}
				},
	//			boundaryGap:[0,0.1], //坐标轴两端留白
				splitLine:{
					show:false
				},
				axisTick:{
					show:true,
					length:-5
				}
			},
			yAxis:{
				type:"value",
				name:"分数",
				max:"100",
				nameTextStyle:{
					color:"#999999"
				},
				splitNumber:11,
				axisLine:{
					lineStyle:{
						color:"#e5e5e5"
					}
				},
				axisLabel:{
					textStyle:{
						color:"#999999",
					}
				},
				axisTick:{
					show:false //刻度线
				}
			},
			series:[
				{
					name:'分数',
					type:'line',
					itemStyle:{
						normal:{
							lineStyle:{
								color:'#5fc895' //折线段颜色
							},
							color:'#5fc895', //折线点颜色
						}
					},
					data:[[1.3,52],[5.5,39],[9,42],[12.2,51],[15.3,64],[18.5,28],[22.1,47]],
				},
				{
					 name:"线性分数",
					 type:"line",
					 itemStyle:{
					 	normal:{
					 		lineStyle:{
					 			color:'#ea9b65'
					 		}
					 	}
					 },
					 data:[
					 {
					 	value:[4.9,84],
					 	symbol:"none"
					 },
					 {
					 	value:[21.5,31],
					 	symbol:"none"
					 }]
				}
			]
		});
	}
	/*-------------------------*/
	
	/*---------- 所在班级图表 ----------*/
	$(".class").on("click", function() {
		if ($(".myClass").css("display") === "block") {
			$("#chart2").html("");
			var myChart1 = echarts.init($("#chart2").get(0));
			myChart1.setOption({
				title:{
					text:"您当前所在班级：A班",
					textStyle:{
						fontSize:16,
						color:"#333333"
					}
				},
				legend:{
					x:'right',
					itemWidth:10,
					itemHeight:10,
					data:[{
						name:'同学成绩',
						icon:"bar"
					},{
						name:'班级平均分',
						icon:'bar'
					}]
				},
				calculable:true,
				grid:{
					x:30,
					x2:10,
					y2:80
				},
				dataZoom:{
					show:true,
				},
				xAxis: {
					type:"category",
					axisLine:{
						show:true,
						lineStyle:{
							color:"#d4d4d4"
						}
					},
					axisTick:{
						show:true,
						length:-5,
						lineStyle:{
							color:"#d4d4d4"
						}
					},
					axisLabel:{
						show:true,
						interval:0,
						textStyle:{
							color:"#999999"
						}
					},
		            data: ['王晓晔','张三','习近平','贾庆玲','李四','刘能','温家宝','江泽民','班级平均','贾庆玲','李四','刘能','温家宝','江泽民','江泽民']
		        },
				yAxis:{
					type:"value",
					axisLine:{
						show:true,
						lineStyle:{
							color:"#d4d4d4"
						}
					},
					axisTick:{
						show:false
					},
					axisLabel:{
						show:true,
						textStyle:{
							color:"#999999"
						}
					}
				},
				series:[
					{
						name:"同学成绩",
						type:"bar",
						stack:"成绩",
						itemStyle:{
							normal:{
								color:"#aac56c"
							}
						},
						data:[
						{
							value:10.2,
							itemStyle:{
								normal:{
									label:{
										show:true,
										position:"top",
										formatter:"{c}",
										textStyle:{
											color:"#333333",
										}
									}
								}
							}
						},{
							value:18,
							itemStyle:{
								normal:{
									label:{
										show:true,
										position:"top",
										formatter:"{c}",
										textStyle:{
											color:"#333333",
										}
									}
								}
							}
						},{
							value:22.5,
							itemStyle:{
								normal:{
									label:{
										show:true,
										position:"top",
										formatter:"{c}",
										textStyle:{
											color:"#333333",
										}
									}
								}
							}
						},{
							value:36,
							itemStyle:{
								normal:{
									label:{
										show:true,
										position:"top",
										formatter:"{c}",
										textStyle:{
											color:"#333333",
										}
									}
								}
							}
						},{
							value:43,
							itemStyle:{
								normal:{
									label:{
										show:true,
										position:"top",
										formatter:"{c}",
										textStyle:{
											color:"#333333",
										}
									}
								}
							}
						},56,66,75,'-',74,66,57,46,38,26],
						barWidth:30
					},
					{
						name:"班级平均分",
						type:"bar",
						stack:"成绩",
						itemStyle:{
							normal:{
								color:"#f1943c"
							}
						},
						data:['-','-','-','-','-','-','-','-',90,'','','','','',''],
						barWidth:30,
					}
				]
			});
		}
	})
	/*-------------------------*/
	
	/*--------- bottom部分点击效果 ----------*/
	var _li = $(".subSelect li");
	for (var i = 0; i < _li.length; i++) {
		_li.eq(i).on("click", function() {
			$(this).addClass("selected").siblings().removeClass("selected");
		});
	}
	/*--------- bottom部分点击效果 ----------*/
	
	/*---------- section部分选中效果----------*/
	for (var i = 0; i < $(".section li").length; i++) {
		$(".section li").eq(i).on("click", function() {
			$(this).addClass("selected").siblings().removeClass("selected");
		});
	}
	/*---------- section部分选中效果----------*/
	
	/*---------- 表单数据判断 ----------*/
	var _value1 = $.trim($(".first input").val());
	var _value2 = $.trim($('.second input').val());
	var _value3 = $.trim($('.third input').val());
	$('.first input').on("blur", function() {
		_value1 = $.trim($(".first input").val());
		if (_value1 == "") {
			$('.firstTips div').show();
		}
		else {
			$('.firstTips div').hide();
		}
		panduan();
	});
	var reg = /[0-9a-zA-Z]{6,32}/;
	
	$('.second input').on("blur", function() {
		panduan();
		panduan1();
	});
	
	var flag = false;
	$('.third input').on("blur", function() {
		_value3 = $.trim($('.third input').val());
		flag = true;
		panduan1();
	})
	function panduan() {
		_value1 = $.trim($(".first input").val());
		_value2 = $.trim($('.second input').val());
		if (_value2 == "") {
			$('.secondTips .summary').show();
		}
		else {
			if (reg.test(_value2)) {
				$('.secondTips .summary').hide();
				if (_value2 === _value1) {
					$('.secondTips .correct').css("display", "none");
					$(".secondTips div").show()
				}
				else {
					$(".secondTips div").hide();
					$('.secondTips .correct').css("display", "block");
				}
			}
			else {
				$('.secondTips .summary').show();
				$('.secondTips .correct').css("display", "none");
				$(".secondTips div").hide();
			}
		}
	}
	function panduan1() {
		if (flag) {
			if (_value3 === _value2) {
				$('.thirdTips div').hide();
			}
			else {
				$('.thirdTips div').show();
			}
		}
	}
	/*---------- 表单数据判断 ----------*/
	
	
});
