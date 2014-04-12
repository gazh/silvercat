/* Animate jump */
$(document).ready(function() {
 
	$(".js-jump").click(function(event){		
		event.preventDefault();
                $('html,body').animate({scrollTop:$('[name="'+this.hash.substring(1)+'"]').offset().top}, 700);
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
		var diode_id=$(this).attr("id");
		var diode_number=diode_id.substring(6,7);
		var diode_id="#diode"+diode_number;
		
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
	var direction="off";
	var temperature_min = 20;
	var temperature_max = 200;
	var heating_time=5000;
	var temperature_changer;
	
	var current_temperature=temperature_min;
	var full_temperature = current_temperature+"°C";
	var time_interval=heating_time/(temperature_max-temperature_min);
	
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
		var today=new Date();
		var h=today.getHours();
		var m=today.getMinutes();
		// add a zero in front of numbers<10
		h=checkTime(h);
		m=checkTime(m);
		$(".time").text(h+":"+m);
		t=setTimeout(function(){startTime()},2000);
		}
		
		function checkTime(i)
		{
		if (i<10)
		  {
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
$(document).ready(function(){
	
	var max_light=250
	var current_light=0;
	var current_opacity=0;
	
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
	
	$(document).click(function(){
		
		var post_message = $("#contact .post-message").text();
		
		console.log(post_message);
		console.log(post_message.length);
		
		if (post_message.length > 0) {
			$("#contact .post-message").fadeTo(2000,0);
		}
		
	});
	
});

/*Form ajax post*/
/*
	$( "#form" ).submit(function( event ) {
 
		// Stop form from submitting normally
		event.preventDefault();
	       
		// Get some values from elements on the page:
		var $form = $( this );
		var url = $form.attr( "action" );
		  
		var name = $("#name").val();
		var email = $("#email").val();
		var subject = $("#subject").val();
		var message = $("#message").val();
	       
		// Send the data using post
		var posting = $.post( url, { name: name, email: email, subject: subject, message: message } );
	       
		// Put the results in a div
		posting.done(function( data ) {
		  var content = $( data.post_message );
		  console.log(content);
		  $( ".post-message" ).empty().text( content );
		});
	});
*/