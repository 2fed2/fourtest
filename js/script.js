jQuery(document).ready(function($) {
	var tailOne = 19;
	var tailTwo = 17;
	var tailThree = 17;
	var tailJail = 19;
	var randomSummCount = tailOne + tailTwo + tailThree + tailJail;
	var randomCount = [];
	for (var i = 0; i < randomSummCount; i++) {
	    randomCount.push(i);
	}
	
	var classTail = [];
function createTale(count,className) {
   for (var i = 0; i < count; i++) {
   		var rand = Math.floor(Math.random() * randomCount.length);
			var tailWrapp = $('<div class="tailWrapper">');
			var tail = $('<div class="tail">');
			tailWrapp.addClass('active')
			classTail[randomCount[rand]]=className;

			tail.attr('data-pos',randomCount[rand]);
		    tail.appendTo(tailWrapp);	
		    tailWrapp.appendTo('#playingField');
		    randomCount.splice(rand, 1);
		    if($('#playingField .tailWrapper.active').position().top==0 && $('#playingField .tailWrapper.active').position().left < 156) {
		     $('#playingField .tailWrapper.active').css('margin-left',156+'px');
		    }
		     if($('#playingField .tailWrapper.active').position().top==0 && $('#playingField .tailWrapper.active').position().left > 260) {
		     $('#playingField .tailWrapper.active').css('margin-right',156+'px');
		    }
		    if($('#playingField .tailWrapper.active').position().top==52 && $('#playingField .tailWrapper.active').position().left < 104) {
		     $('#playingField .tailWrapper.active').css('margin-left',104+'px');
		    }
		     if($('#playingField .tailWrapper.active').position().top==52 && $('#playingField .tailWrapper.active').position().left > 312) {
		     $('#playingField .tailWrapper.active').css('margin-right',104+'px');
		    }
		    if($('#playingField .tailWrapper.active').position().top==104 && $('#playingField .tailWrapper.active').position().left < 52) {
		     $('#playingField .tailWrapper.active').css('margin-left',52+'px');
		    }
		     if($('#playingField .tailWrapper.active').position().top==104 && $('#playingField .tailWrapper.active').position().left > 364) {
		     $('#playingField .tailWrapper.active').css('margin-right',52+'px');
		    }
		    if($('#playingField .tailWrapper.active').position().top==208 && $('#playingField .tailWrapper.active').position().left == 156) {
		     $('#playingField .tailWrapper.active').css('margin-right',104+'px');
		    }
		    if($('#playingField .tailWrapper.active').position().top==260 && $('#playingField .tailWrapper.active').position().left == 156) {
		     $('#playingField .tailWrapper.active').css('margin-right',104+'px');
		    }
		    if($('#playingField .tailWrapper.active').position().top==364 && $('#playingField .tailWrapper.active').position().left < 52) {
		     $('#playingField .tailWrapper.active').css('margin-left',52+'px');
		    }
		     if($('#playingField .tailWrapper.active').position().top==364 && $('#playingField .tailWrapper.active').position().left > 364) {
		     $('#playingField .tailWrapper.active').css('margin-right',52+'px');
		    }
		    if($('#playingField .tailWrapper.active').position().top==416 && $('#playingField .tailWrapper.active').position().left < 104) {
		     $('#playingField .tailWrapper.active').css('margin-left',104+'px');
		    }
		     if($('#playingField .tailWrapper.active').position().top==416 && $('#playingField .tailWrapper.active').position().left > 312) {
		     $('#playingField .tailWrapper.active').css('margin-right',104+'px');
		    }
		     if($('#playingField .tailWrapper.active').position().top==468 && $('#playingField .tailWrapper.active').position().left < 156) {
		     $('#playingField .tailWrapper.active').css('margin-left',156+'px');
		    }
		     if($('#playingField .tailWrapper.active').position().top==468 && $('#playingField .tailWrapper.active').position().left > 260) {
		     $('#playingField .tailWrapper.active').css('margin-right',156+'px');
		    }
		    
		    $('#playingField .tailWrapper').removeClass('active')
		}
 };

createTale(tailOne,'tail-one');
createTale(tailTwo,'tail-two');
createTale(tailThree,'tail-three');
createTale(tailJail,'tail-jail');




$('#infogame h2').text('Выберите стартовые позиции для 4 туристов и начните путешествие!(кликнуть по желтым квадратам)');
var buttonStart = $('<button type="button" class="button-hidden" id="button-start">');
buttonStart.text("СТАРТ")
buttonStart.addClass("");
buttonStart.appendTo('#infogame .infogame-but');
var tourist = ['one','two','three','four'];
for (var i = 0; i < tourist.length; i++) {
   		var imgTour = $('<div class="tourWrapper">');
		var tour = $('<div class="tour">');
		tour.addClass(tourist[i]);
		tour.appendTo(imgTour);	
		imgTour.appendTo('#infogame .infogame-pic');
		}

	$(document).on('click ', '.tail-start', function () {
	        var leftOut = $(this).parent().parent().position().left;
	        var leftLoc = $(this).position().left;
	        var leftMain = leftOut + leftLoc;
	        var toptOut = $(this).parent().parent().position().top;
	        var topLoc = $(this).position().top;
	        var topMain = toptOut + topLoc;
	        $(this).parent().parent().attr('style','opacity:0;pointer-events:none;')
	        $('#infogame .infogame-pic .tourWrapper:first-child').clone().css({left:leftMain,top:topMain}).appendTo('#playStart');	
	        $('#infogame .infogame-pic .tourWrapper:first-child').remove();
	        if($('#infogame .infogame-pic').children().length == 0 ){
	        	$('#infogame h2').text('Нажимайте СТАРТ и начините путешествие!');
	        	$('#button-start').removeClass("button-hidden");
	        }
	    });			
	$(document).on('click ', '#button-start', function () {
	      $('#playingField').removeClass("playingFieldDis");
	      $(this).addClass("button-hidden");
	      $("#playStart .tourWrapper").addClass("active");
	      $('#infogame h2').text('Выберите путешественника и ходите на выделенное поле.');
	    });	

	$(document).on('click ', '#playStart .tourWrapper.active .tour:not(.player-in-jail)', function () {

		if(!$(this).hasClass("onField")){
			stepcount = 1;
			$(this).attr('data-step',stepcount);
        	$('#infogame h2').text('Сделайте первый ход на квадрат в зеленой рамке.');
        }
		$('#playStart .tourWrapper.active .tour').removeClass("active");
		$('#playingField .tailWrapper .tail').removeClass("allowed");
		$(this).addClass("onField");
	     $(this).addClass("active");

	     

	     var topPlayer = $(this).parent().position().top-1;
	     var leftPlayer = $(this).parent().position().left-1;
	     var rightPlayer = $(this).parent().position().left+51;
	     var bottomPlayer = $(this).parent().position().top+51;
	    
	     	$("#playingField .tailWrapper").each(function () {
	     	    if($(this).offset().top == bottomPlayer && $(this).offset().left == leftPlayer ){
		        	$(this).find(".tail").addClass("allowed");	
	     	    }
	     	    if($(this).offset().top+52 == topPlayer && $(this).offset().left == leftPlayer ){
		        	$(this).find(".tail").addClass("allowed");	
	     	    }
	     	    if($(this).offset().top == topPlayer && $(this).offset().left == rightPlayer ){
		        	$(this).find(".tail").addClass("allowed");	
	     	    }
	     	    if($(this).offset().top == topPlayer && $(this).offset().left+52 == leftPlayer ){
		        	$(this).find(".tail").addClass("allowed");	
	     	    }
		    });
	    });	


var stepcount = 1;

	$(document).on('click ', '#playingField .tailWrapper .tail.allowed', function () {
		stepcount = $('#playStart .tourWrapper.active .tour.active').attr('data-step');
		$('#playStart .tourWrapper').css("z-index",1);
	stepcount--;
	console.log(stepcount);
	$('#playStart .tourWrapper.active .tour.active').attr('data-step',stepcount);
		if (stepcount == 0){
			$(this).addClass('turnover');
	        $(this).addClass(classTail[$(this).parent().index()-1]);
	        if($(this).hasClass("tail-one")){
	        	$('#infogame h2').text('Путешественник может пройти 1 квадрат.');
	        	stepcount = 1;
	        	$('#playStart .tourWrapper.active .tour.active').attr('data-step',stepcount);
	        }
	        if($(this).hasClass("tail-two")){
	        	$('#infogame h2').text('Путешественник может пройти 2 квадрата.');
	        	stepcount = 2;
	        	$('#playStart .tourWrapper.active .tour.active').attr('data-step',stepcount);
	        }
	        if($(this).hasClass("tail-three")){
	        	$('#infogame h2').text('Путешественник может пройти 3 квадрата.');
	        	stepcount = 3;
	        	$('#playStart .tourWrapper.active .tour.active').attr('data-step',stepcount);
	        }
	        if($(this).hasClass("tail-jail")){
	        	$('#infogame h2').text('Путешественник попал в тюрьму и пока ходить не может. Встаньте другим путешественником на его квадрат, чтобы освободить его.');
	        	stepcount = 0;
	        	$('#playStart .tourWrapper.active .tour.active').attr('data-step',stepcount);
	        	$('#playStart .tourWrapper.active .tour.active').addClass("player-in-jail");
	        }
		}
		
	 		
		if (stepcount >= 0){
			$('#playStart .tourWrapper.active .tour.active').parent().css({left:$(this).offset().left,top:$(this).offset().top});
	      $('#playStart .tourWrapper.active .tour.active').addClass("click-player");
	      $('#playStart .tourWrapper.active .tour').removeClass("active");
		$('#playingField .tailWrapper .tail').removeClass("allowed");
		setTimeout(function() { $('#playStart .tourWrapper .tour.click-player:not(.player-in-jail)').click();
								$('#playStart .tourWrapper .tour.click-player').removeClass("click-player");
								}, 350);
		}

		if (stepcount <= 0){
			stepcount = -1;
		}
	      
		
	    });	


	$(document).on('click ', '#playStart .tourWrapper.active .tour.player-in-jail', function () {
		stepcount = $('#playStart .tourWrapper.active .tour.active').attr('data-step');
		stepcount--;
		console.log(stepcount);
		if (stepcount == 0){
			$('#playStart .tourWrapper.active .tour').removeClass("player-in-jail-now");
		$(this).addClass("player-in-jail-now");
		 var topPlayerJail = $(this).parent().position().top;
	     var leftPlayerJail = $(this).parent().position().left;
	     var rightPlayerJail = $(this).parent().position().left+52;
	     var bottomPlayerJail = $(this).parent().position().top+52;
	    console.log(topPlayerJail+'---'+leftPlayerJail+'---'+rightPlayerJail+'---'+bottomPlayerJail);
	     	$("#playStart .tourWrapper.active .tour:not(.player-in-jail-now)").each(function () {
	     		console.log($(this).parent().position().top+'---'+$(this).offset().left);
	     	    if($(this).parent().position().top == bottomPlayerJail && $(this).offset().left == leftPlayerJail ||$(this).parent().position().top+52 == topPlayerJail && $(this).parent().position().left == leftPlayerJail||$(this).parent().position().top == topPlayerJail && $(this).parent().position().left == rightPlayerJail ||$(this).parent().position().top == topPlayerJail && $(this).parent().position().left+52 == leftPlayerJail){
	     	    	
				        $('#playStart .tourWrapper.active .tour.active').parent().css({left:$('#playStart .tourWrapper.active .tour.player-in-jail.player-in-jail-now').parent().position().left,top:$('#playStart .tourWrapper.active .tour.player-in-jail.player-in-jail-now').parent().position().top});
					      $('#playStart .tourWrapper.active .tour').removeClass("active");
						$('#playingField .tailWrapper .tail').removeClass("allowed");
						$('#playStart .tourWrapper.active .tour.player-in-jail.player-in-jail-now').addClass("active");
						$('#playStart .tourWrapper.active .tour.active').attr('data-step',1);
						 $('#playStart .tourWrapper.active .tour.active').removeClass("player-in-jail");
						$('#playStart .tourWrapper.active .tour.active').removeClass("player-in-jail-now");
						$('#playStart .tourWrapper .tour.active').click();
						$('#playStart .tourWrapper .tour.active').parent().css('z-index',2);
	     	    }
		    });
		}

		

	})
})

