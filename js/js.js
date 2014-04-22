/*
 * Javascript functions
 *
 * by Gabrijel Skrenkoviæ
 *
 * v1.0
 *
 */


/* Animate jump */
$(document).ready(function() {
 
	$(".js-jump").click(function(event){		
		event.preventDefault();
                $('html,body').stop().animate({scrollTop:$('[name="'+this.hash.substring(1)+'"]').offset().top}, 700);
	});
});

/*Block toggle (diodes/motor/heater)*/
$(document).ready(function(){
	
	$(".js-block-toggle").click(function(){
		var block_id=$(this).children().first().attr("id");
		
		switch(block_id)
		{
			case "block-diode":
				var application_id="#application-diode";
				break;
			case "block-motor":
				var application_id="#application-motor";
				break;
			case "block-heater":
				var application_id="#application-heater";
				break;
			default:
				var application_id="#application-diode";
				break;
		}
		
		$(application_id).show().siblings("div").hide();
	});
	
});

/*Toggle diode tabs*/
$(document).ready(function(){
	
	$(".tabs div").click(function(){
		var tab=$(this).attr("class");
		
		switch(tab){
			
			case "tab-outputs":
				$(".diode-analog").hide();
				$(".diode-digital").show();
				break;
			case "tab-pwm":
				$(".diode-digital").hide();
				$(".diode-analog").show();
				break;
			case "tab-motor":
				$("#application-heater").hide();
				$("#application-motor").show();
				break;
			case "tab-heater":
				$("#application-motor").hide();
				$("#application-heater").show();
				break;
		}
	});
	
});

/*Toggle switch on/off*/
$(document).ready(function(){
	
	$(".switch").click(function(){
		$(this).toggleClass("switch-on");
	});
	
});

/*Switch on for diodes*/
$(document).ready(function(){

	$(".js-switch-diode").click(function(){
		var diode_id=$(this).attr("id"),
		    diode_number=diode_id.substring(6,7),
		    diode_id="#diode"+diode_number;
		
		$(diode_id).toggleClass("diode-on");
	});	
	
});

/*Switch on for motor*/
$(document).ready(function(){
	
	$(".js-switch-motor").click(function(){
		$("#motor").toggleClass("motor-on motor-off");
	});
	
});

/*Switch on for heater*/

$(document).ready(function(){
	
	//set initial direction
	var direction="off",
	    temperature_min = 20,
	    temperature_max = 200,
	    heating_time=5000,
	    temperature_changer,
	    
	    current_temperature=temperature_min,
	    full_temperature = current_temperature+"°C",
	    time_interval=heating_time/(temperature_max-temperature_min);
	
	function changeTemperature(current_temperature){
		full_temperature = current_temperature+"°C";
		$(".js-temperature").text(full_temperature);
	}
		
	$(".temperature span").text(full_temperature);
	
	
	
	$(".js-switch-heater").click(function(){
		$("#heater-motor").toggleClass("motor-on motor-off");
		
		clearInterval(temperature_changer);
		
		//toggle direction
		if (direction == "off") {
			direction = "on";
		}else{
			direction = "off";
		}		
		
		//show or hide heater-hot over time
		//change temperature
		if (direction == "on") {
			$("#heater").stop().animate({ opacity: 1 },heating_time);
			
			temperature_changer = setInterval(function(){
				changeTemperature(current_temperature);
				current_temperature++;
				if (current_temperature>=temperature_max+1) {
					clearInterval(temperature_changer);
				}
			},time_interval);
		}else{
			$("#heater").stop().animate({ opacity: 0 },heating_time);
			
			temperature_changer = setInterval(function(){
				changeTemperature(current_temperature);
				current_temperature--;
				if (current_temperature<=temperature_min-1) {
					clearInterval(temperature_changer);
				}
			},time_interval);
		}
		
	});
	
});

/*Clock*/
$(document).ready(function(){
	
	function startTime()
		{
		var today=new Date(),
		    h=today.getHours(),
		    m=today.getMinutes();
		// add a zero in front of numbers<10
		h=checkTime(h);
		m=checkTime(m);
		$(".time").text(h+":"+m);
		t=setTimeout(function(){startTime()},2000);
		}
		
		function checkTime(i){
		if (i<10){
		  i="0" + i;
		}
		
		return i;
	}
	
	startTime();
});

/*Slider for analog diode*/
$(document).ready(function(){
	
	$( "#light-drager" ).draggable({ containment: "#light-axis", scroll: false })
	
})

/*Analog diode*/
//Uses jquery-ui.js
$(document).ready(function(){
	
	var max_light=250,
	    current_light=0,
	    current_opacity=0;
	
	$("#light-drager").draggable({
		drag: function(){
			current_light=parseInt($("#light-drager").css("left"));
			$(".js-light").text(current_light);
			
			current_opacity=current_light/max_light;
			
			//inverted current opacity is used because function makes dioed shadow more and more invisible
			var inverted_current_opacity=1-current_opacity;
			
			$("#diode4").animate({ opacity: inverted_current_opacity },0.1);
		}
	});

	
});

/*Fadeout post-message*/
$(document).ready(function(){
	
	var post_message = $("#contact .post-message");
	
	//post_message is set to space string so fade in works
	post_message.text(" ");
	
	$(document).mousedown(function(){
		
		if (post_message.text().length > 0 && post_message.css("opacity") > 0) {
			$("#contact .post-message").fadeTo(1000,0);
		}
		
	});
	
});

/*Form ajax post*/
$(document).ready(function(){
	
	$("#form").submit(function(event){
		
		event.preventDefault();
		
		//sets variables that are sent
		var name = $("#name").val(),
		    email = $("#email").val(),
		    subject = $("#subject").val(),
		    message = $("#message").val(),
		    url = $("#form").attr( "action" );
		
		$.ajax({
			url: url,
			type: "POST",
			dataType: "json",
			data: ({
				name: name,
				email: email,
				subject: subject,
				message: message,
				
				//submit is sent for script to check exactly if is submit set
				submit: ""
				}),
			success: function(data){
				$("#contact .post-message").fadeTo(300,1).text(data.post_message);
				
				if (data.success) {
					$("#name, #email, #subject, #message").val("");
				}
			}
			
		});
		
	});
	
});

/*Nice Scrollbar*/
//Uses nicescroll.js
$(document).ready(function(){
	
	$("html").niceScroll();
	
});

/*Shrink header when scrolled*/
$(document).ready(function(){
	
	var default_padding = $("#header").css("padding");
	
	$(window).scroll(function(){
		
		if ($(window).scrollTop() > $("#header").height()) {
			$("#header").css("padding", 0);
		}else{
			$("#header").css("padding", default_padding);
		}
		
	});
	
});