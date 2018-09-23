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
	var aiArray = {head: "爱",trans: "Любить",transcrip: "ài",headhier1: "爫",texthier1: " - когти [zhǎo]",headhier2: "又",texthier2: " - опять [yòu]",headhier3: "一",texthier3: " - единица [yī]",headhier4: "冖",texthier4: " - крышка [mì]",headhier5: "丿",texthier5: " - линия без перевода",hint: "Опять вцепился	когтями в сердце."};
	var xiangArray = {head: "想",trans: "Думать, скучать, хотеть",transcrip: "xiǎng",headhier1: "木",texthier1: " - дерево [mù]",headhier2: "目",texthier2: " - глаз [mù]",headhier3: "心",texthier3: " - сердце [xīn]",hint: "Глаз дерева думает сердцем."};
	var woArray = {head: "我",trans: "Я (меня, мне)",transcrip: "wǒ",headhier1: "扌",texthier1: " - рука [shǒu]",headhier2: "戈",texthier2: " - копьё [gē]",hint: "Я держу в руке копьё."};
	var niArray = {head: "你",trans: "Ты (тебя, тебе)",transcrip: "nǐ",headhier1: "亻",texthier1: " - человек [rén]",headhier2: "冖",texthier2: " - крышка [mì]",headhier3: "小",texthier3: " - маленький[xiǎo]",hint: "Ты не просто маленький человек под крышкой."};
	var taArray = {head: "他",trans: "Он (его, ему)",transcrip: "tā",headhier1: "亻",texthier1: " - человек [rén]",headhier2: "也",texthier2: " - тоже [yě]",hint: "Он тоже человек."};
	var deArray = {head: "的",trans: "Притяжательный суффикс",transcrip: "de",headhier1: "白",texthier1: " - белый [bái]",headhier2: "勺",texthier2: " - ложка [sháo]",hint: "Ложка притягивает белый рис."};
	var maArray = {head: "吗",trans: "Частица вопросительных предложений",transcrip: "ma",headhier1: "口",texthier1: " - рот [kǒu]",headhier2: "马",texthier2: " - лошадь [mǎ]",hint: "Лошадиный рот."};
	var yeArray = {head: "也",trans: "Тоже",transcrip: "yě",headhier1: "乚",texthier1: " - линия без перевода",headhier2: "丨",texthier2: " - линия без перевода",hint: "К сожалению, ничем помочь в запоминании не можем."};
	var buArray = {head: "不",trans: "Не",transcrip: "bù",headhier1: "一",texthier1: " - единица [yī]",headhier2: "丨",texthier2: " - линия без перевода",headhier3: "丿",texthier3: " - линия без перевода",headhier4: "丶",texthier4: " - линия без перевода",hint: "К сожалению, ничем помочь в запоминании не можем."};
	var chiArray = {head: "吃",trans: "Есть, кушать",transcrip: "chī",headhier1: "口",texthier1: " - рот [kǒu]",headhier2: "乞",texthier2: " - просить [qǐ]",hint: "Рот просит покушать."};
	var haoArray = {head: "好",trans: "Хорошо",transcrip: "hǎo",headhier1: "女",texthier1: " - шаг (левой ногой) [chì]",headhier2: "子",texthier2: " - ребёнок [zǐ]",hint: "Хорошо, когда ребёнок рядом с женщиной."};
	var henArray = {head: "很",trans: "Очень",transcrip: "hěn",headhier1: "彳",texthier1: " - женщина [nǚ]",headhier2: "艮",texthier2: " - твёрдый, крепкий [gēn]",hint: "Очень твёрдый шаг."};
	var xieArray = {head: "谢",trans: "Благодарить",transcrip: "xiè",headhier1: "讠",texthier1: " - речь [yán]",headhier2: "寸",texthier2: " - вершок [cùn]",headhier3: "身",texthier3: " - тело (человека) [shēn]",hint: "Речь о вершине тела человека."};
	var menArray = {head: "们",trans: "Суффикс множественного числа",transcrip: "men",headhier1: "亻",texthier1: " - человек [rén]",headhier2: "门",texthier2: " - дверь [mén]",hint: "Много людей у двери."};
	var sheiArray = {head: "谁",trans: "Кто?",transcrip: "shéi",headhier1: "讠",texthier1: " - речь [yán]",headhier2: "隹",texthier2: " - короткохвостая птица [zhuī]",hint: "В своей речи птица спросила: Кто?"};
	var allHier = {ai: aiArray,xiang: xiangArray,wo: woArray,ni: niArray,ta: taArray,de: deArray,ma: maArray,ye: yeArray,bu: buArray,chi: chiArray,hao: haoArray,hen: henArray,xie: xieArray,men: menArray,shei: sheiArray};


	var threeArray = [
			["Я люблю тебя.",3,123],
			["Я люблю тебя?",4,1234]
		];
	var threeArrayRand = threeArray.slice().sort(compareRandom);


	var arr = [1, 2, 3, 4, 5];
	function compareRandom(a, b) {
	  return Math.random() - 0.5;
	}
	arr.sort(compareRandom);
	

	var classTail = [];

	function createRowTale(offset1,offset2,offset3,leftright) {
		if(leftright==1){
			if($('#playingField .tailWrapper.active').position().top==offset1 && $('#playingField .tailWrapper.active').position().left < offset2) {
		     $('#playingField .tailWrapper.active').css('margin-left',offset3+'px');
		    }
		}
		if(leftright==2){
			if($('#playingField .tailWrapper.active').position().top==offset1 && $('#playingField .tailWrapper.active').position().left > offset2) {
		     $('#playingField .tailWrapper.active').css('margin-right',offset3+'px');
		    }
		}
		if(leftright==3){
			if($('#playingField .tailWrapper.active').position().top==offset1 && $('#playingField .tailWrapper.active').position().left == offset2) {
		     $('#playingField .tailWrapper.active').css('margin-right',offset3+'px');
		    }
		}
	}

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
		    createRowTale(0,156,156,1);
		    createRowTale(0,260,156,2);
		    createRowTale(52,104,104,1);
		    createRowTale(52,312,104,2);
		    createRowTale(104,52,52,1);
		    createRowTale(104,364,52,2);
		    createRowTale(208,156,104,3);
		    createRowTale(260,156,104,3);
		    createRowTale(364,52,52,1);
		    createRowTale(364,364,52,2);
		    createRowTale(416,104,104,1);
		    createRowTale(416,312,104,2);
		    createRowTale(468,156,156,1);
		    createRowTale(468,260,156,2);
		    
		    $('#playingField .tailWrapper').removeClass('active')
		}
 };

createTale(tailOne,'tail-one');
createTale(tailTwo,'tail-two');
createTale(tailThree,'tail-three');
createTale(tailJail,'tail-jail');


function modalWithBut(text,classname,text2) {
	if(!$('#modal-regul .modal-body .item-regul').hasClass(classname)){
		$('#modal-with-but .body-text').text(text);
		$('#modal-with-but').modal('show'); 
		var itemRegul = $('<div class="item-regul">');
		itemRegul.text(text2);
		itemRegul.addClass(classname);
		itemRegul.appendTo('#modal-regul .modal-body');
	}
}

modalWithBut("Выберите стартовые позиции для 4 туристов и начните путешествие! (кликнуть по желтым квадратам)","before-start","Игра начинает с выбора стартовых позиций для туриста. Для этого нужно кликать по желтым квадратам.");



function startPosTour() {
var buttonStart = $('<button type="button" class="button-hidden" id="button-start">');
buttonStart.text("СТАРТ")
buttonStart.appendTo('#infogame .infogame-but');
var tourist = ['one','two','three','four'];
for (var i = 0; i < tourist.length; i++) {
   		var imgTour = $('<div class="tourWrapper">');
		var tour = $('<div class="tour" data-task="">');
		var step = $('<span>');
		var statejail = $('<div  class="tour-state-in-jail">');
		var statebook = $('<div  class="tour-state-in-book">');
		tour.attr('data-view',tourist[i]);
		step.appendTo(tour);
		statejail.appendTo(tour);
		statebook.appendTo(tour);	
		tour.appendTo(imgTour);	
		imgTour.appendTo('#infogame .infogame-pic');
		}
$('#playStart>div').removeAttr("style");
}
function restartPosTour() {
	var buttonStart = $('<button type="button"  id="button-restart">');
		buttonStart.text("НАЧАТЬ ЗАНОВО")
		buttonStart.appendTo('#infogame .infogame-but');
		 $("#playStart").attr('style','opacity:0;pointer-events:none;');
		 $("#inCountry .tourWrapper").remove();
		$("#playingField").attr('style','opacity:0;pointer-events:none;');
}
startPosTour();

function allowedTail(obj,x,y,z1,z2) {
				if(obj.offset().top+z1 == x && obj.offset().left+z2 == y ){
			        	obj.find(".tail").addClass("allowed");	
		     	    }
}
function playerInBook(text,count,text2) {

				$('#infogame .infogame-but button').remove();
				//$('#infogame h2').text(text);
				var buttonCostruct = $('<button type="button" id="button-construct">');
				buttonCostruct.attr('data-step',count);
				buttonCostruct.text("СОБРАTЬ ПРЕДЛОЖЕНИЕ");
				
	        	stepcount = 0;
	        	$('#playStart .tourWrapper.active .tour.active').find("span").text("+"+stepcount);
	        	if($('#playStart .tourWrapper.active .tour.active').attr('data-task')==""){
	        		if(count==3*1){
	        			if(threeArrayRand.length == 0){
	        				threeArrayRand = threeArray.slice().sort(compareRandom);
	        				console.log( threeArrayRand);
	        			}
	        			 modalWithBut(text,"player-in-book-3",text2)
		        		var task =	threeArrayRand[0];
		        		$('#playStart .tourWrapper.active .tour.active').attr('data-task',task[0]);
		        		$('#playStart .tourWrapper.active .tour.active').attr('data-task-count',task[1]);
		        		threeArrayRand.splice(0, 1);
		        		console.log( threeArray);
		        	}
	        	}
	        	buttonCostruct.attr('data-task',$('#playStart .tourWrapper.active .tour.active').attr('data-task'));
	        	buttonCostruct.attr('data-task-count',$('#playStart .tourWrapper.active .tour.active').attr('data-task-count'));
	        	buttonCostruct.appendTo('#infogame .infogame-but');
}

$(document).on('click ', '#button-construct', function () {

				
				if($('#formDeck .swiper-wrapper').children().length>= $(this).attr("data-task-count")){
				    	$('#formDeck').removeClass("formDeckDis");
				    	$('#formDeck').addClass("inTask");
				    	$('#formDeck .swiper-slide').attr("data-target","");
				    	swiper1.update();
				    	$('#formDeck>button').css("display","none");
							//$('#infogame h2').text("");
							modalWithBut("Кликайте по иероглифам в вашей колоде, чтобы собрать предложение. Чтобы заменить иероглиф, кликните по нему в предложении. Некоторые иероглифы могут использоваться два раза в предложении. ВНИМАНИЕ! Если вы отправите на проверку неправильно собранное предложение, вы лишитесь одной карточки с иероглифом. Если сомневаетесь жмите на кнопку ВЫЙТИ ИЗ ЗАДАНИЯ.","construct","Чтобы собрать предложение, кликайте по иероглифам в вашей колоде. Чтобы заменить иероглиф, кликните по нему в предложении. Некоторые иероглифы могут использоваться два раза в предложении. ВНИМАНИЕ! Если вы отправите на проверку неправильно собранное предложение, вы лишитесь одной карточки с иероглифом. Если сомневаетесь жмите на кнопку ВЫЙТИ ИЗ ЗАДАНИЯ.");
							$('#takeCard button').remove();
							var exitTask = $('<button type="button" id="button-exitTask">');
							exitTask.text("Выйти из задания");
							exitTask.appendTo('#takeCard');
							var buttonCheck = $('<button type="button" id="button-check">');
							buttonCheck.text("ПРОВЕРИТЬ");
							var taskText = $('<h3>');
							taskText.text($(this).attr("data-task"));
							taskText.appendTo('#infogame .infogame-task');
							var valCheck;
								for (var i = 0; i < threeArray.length; i++) {
								    if (threeArray[i][0]==$(this).attr("data-task")){
								    	valCheck=threeArray[i][2];
								    }
								}
								buttonCheck.attr('data-check',valCheck);
								buttonCheck.attr('data-task-count',$(this).attr("data-task-count"));
								var card = $('<div class="task-card empty">');
								for (var i = 0; i < $(this).attr("data-task-count"); i++) {
								    $('#infogame .infogame-task').append(card.clone());
								}

						$('#infogame .infogame-but button').remove();
						buttonCheck.appendTo('#infogame .infogame-but');
				    }
				    else{
				    	showH("Не хватает карт!","red");
				    	//$('#infogame h2').text("У вас не хватает карт, чтобы собрать предложение. Жмите на кнопку ВЗЯТЬ КАРТУ.");
				    }
				
				
				
	    });
$(document).on('click ', '#button-exitTask', function () {
			$('#formDeck>button').removeAttr("style");
			$('#formDeck').addClass("formDeckDis");
			$('#takeCard button').remove();
			var takeCardBut = $('<button onclick="openformTakeCard()" type="button">');
							takeCardBut.text("Взять карту");
							takeCardBut.appendTo('#takeCard');
							var regulBut = $('<button type="button" data-toggle="modal" data-target="#modal-regul" type="button">');
							regulBut.text("Правила");
							regulBut.appendTo('#takeCard');
			$('#playStart .tourWrapper.active .tour.active').click();
			$('#infogame .infogame-task').empty();
			$('#formDeck').removeClass("inTask");
			$('#formDeck .swiper-slide').attr("data-target","#myModal");
			$('#infogame h2').text('');
	    });	

function showH(text,color) {
		$('#infogame h2').text(text);	
		$('#infogame h2').addClass(color);	
		setTimeout(function() {	$('#infogame h2').removeAttr("class");
								}, 1100); 
}


$(document).on('click ', '.tail-start', function () {
	$(this).addClass("selected");
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
	        	showH("Жмите СТАРТ!","green")
	        	//$('#infogame h2').text('Жмите СТАРТ!');
	        	$('#button-start').removeClass("button-hidden");
	        }
	    });	

	$(document).on('click ', '#button-start', function () {
	      $('#playingField').removeClass("playingFieldDis");
	      $('#takeCard').removeClass("takeCardDis");
	      $(this).remove();
	      $("#playStart .tourWrapper").addClass("active");
	      modalWithBut('Выберите туриста и ходите на квадраты, выделенные зеленой рамкой. Доберитесь до центра поля, чтобы попасть в страну!',"start","Ходить можно только на квадраты, обведенные зеленой рамкой. Цель - дойти до центра поля.");
	      $("#playStart .tourWrapper.active .tour:not(.player-in-jail)").each(function () {
					stepcount = 1;
					$(this).attr('data-step',stepcount);
					$(this).find("span").text("+"+stepcount);	
				})
	    });	



	$(document).on('click ', '#playStart .tourWrapper.active .tour:not(.player-in-jail,.player-in-book)', function () {
		$('#playerTail .tourWrapper').remove();
		$(this).parent().clone().appendTo('#playerTail');
		$('#infogame .infogame-but button').remove();
		if(!$(this).hasClass("onField")){
        	$(this).addClass("onField");
        }
		$('#playStart .tourWrapper.active .tour').removeClass("active");
		$('#inCountry .tourWrapper.active .tour').removeClass("active");
		$('#playingField .tailWrapper .tail').removeClass("allowed");
		
	     $(this).addClass("active");

	     var topPlayer = $(this).parent().offset().top-1;
	     var leftPlayer = $(this).parent().offset().left-1;
	     var rightPlayer = $(this).parent().offset().left+51;
	     var bottomPlayer = $(this).parent().offset().top+51;
	     	$("#playingField .tailWrapper").each(function () {
	     		
	     		if(!$(this).hasClass("center")){
	     			allowedTail($(this),bottomPlayer,leftPlayer,0,0);
	     			allowedTail($(this),topPlayer,leftPlayer,52,0);
	     			allowedTail($(this),topPlayer,rightPlayer,0,0);
	     			allowedTail($(this),topPlayer,leftPlayer,0,52);
	     		}
	     		else{
	     			allowedTail($(this),bottomPlayer,leftPlayer,0,0);
	     			allowedTail($(this),bottomPlayer,rightPlayer,0,104);
	     			allowedTail($(this),topPlayer,leftPlayer,104,0);
	     			allowedTail($(this),topPlayer,rightPlayer,104,104);
	     			allowedTail($(this),topPlayer,rightPlayer,0,0);
	     			allowedTail($(this),bottomPlayer,rightPlayer,104,0);
	     			allowedTail($(this),topPlayer,leftPlayer,0,104);
	     			allowedTail($(this),bottomPlayer,leftPlayer,104,104);

	     		}

		     	    
		    });
	     	
	    });	


var stepcount = 1;
var jailcount = 0;
var restartcount = 0;
var incountrytcount = 0;
var tourView = "";
	$(document).on('click ', '#playingField .tailWrapper:not(.center) .tail.allowed', function () {
		if(!tourView==""){
				$('#playStart .tourWrapper.active .tour[data-view="'+tourView+'"]').addClass('active');
				$('#playStart .tourWrapper.active .tour[data-view="'+tourView+'"]').removeClass('incountry');
				incountrytcount--;
				$('#playStart .tourWrapper.active .tour[data-view="'+tourView+'"]').parent().css('opacity',1);
				$('#inCountry .tourWrapper.active .tour[data-view="'+tourView+'"]').parent().attr('style','opacity:0;pointer-events:none; ');
				setTimeout(function() {	$('#inCountry .tourWrapper.active .tour[data-view="'+tourView+'"]').parent().remove();
								}, 1900); 
				$('#playStart .tourWrapper.active .tour[data-view="'+tourView+'"]').attr('data-step',1);

		}
		stepcount = $('#playStart .tourWrapper.active .tour.active').attr('data-step');
		$('#playStart .tourWrapper').css("z-index",1);

	stepcount--;
	
	$('#playStart .tourWrapper.active .tour.active').attr('data-step',stepcount);
$('#playStart .tourWrapper.active .tour.active').find("span").text("+"+stepcount);
		if (stepcount == 0){
			$(this).addClass('turnover');
	        $(this).addClass(classTail[$(this).parent().index()-1]);
	        if($(this).hasClass("tail-one")){
	        	$('#playStart .tourWrapper.active .tour.active').attr('data-step',3);

	        	$('#playStart .tourWrapper.active .tour.active').addClass("player-in-book");
	        }
	        if($(this).hasClass("tail-two")){
	        	
	        	$('#playStart .tourWrapper.active .tour.active').attr('data-step',3);
	        	$('#playStart .tourWrapper.active .tour.active').addClass("player-in-book");
	        }
	        if($(this).hasClass("tail-three")){
	        	
	        	$('#playStart .tourWrapper.active .tour.active').attr('data-step',3);
	        	$('#playStart .tourWrapper.active .tour.active').addClass("player-in-book");
	        }
	        if($(this).hasClass("tail-jail")){

	        	jailcount++;
	        	if(jailcount<4){
	        		if(jailcount+incountrytcount==4){
	        			$('#infogame h2').text('Верните из страны одного путешественника, чтобы освободить другого из тюрьмы. Кликните по путешевтвеннику, который уже в стране.');
	        		}
	        		else{
	        			$('#infogame h2').text('Путешественник попал в тюрьму и пока ходить не может. Встаньте другим путешественником на его квадрат, чтобы освободить его.');
	        		}
	        		

	        	}
	        	else{
	        		jailcount=0;
	        		restartcount++;
	        		if(restartcount<4){
	        			$('#infogame h2').text('Все ваши путешественники попали в тюрьму. Скорее раставляйте их на оставшиеся стартовые позиции и продолжайте путешествие!');
	        			startPosTour();
					      $('#playingField').addClass("playingFieldDis");
					      $("#playStart .tourWrapper").remove();
	        		}
	        		else{
	        			$('#infogame h2').text('К сожалению вы исчерпали все возможные стартовые позиции. Хотите начать заново?');	
	        			restartPosTour();
	        		}
	        	}
	        	
	        	stepcount = 0;
	        	$('#playStart .tourWrapper.active .tour.active').attr('data-step',stepcount);
	        	$('#playStart .tourWrapper.active .tour.active').addClass("player-in-jail");
	        }
		}
		
	 		
		if (stepcount >= 0){

			$('#playStart .tourWrapper.active .tour.active').parent().css({left:$(this).offset().left-$("#playStart").offset().left,top:$(this).offset().top-$("#playStart").offset().top});
	      $('#playStart .tourWrapper.active .tour.active').addClass("click-player");
	      //$('#playStart .tourWrapper.active .tour').removeClass("active");
		$('#playingField .tailWrapper .tail').removeClass("allowed");

		if(!tourView==""){
				setTimeout(function() { $('#playStart .tourWrapper .tour.click-player:not(.player-in-jail)').click();
								$('#playStart .tourWrapper .tour.click-player').removeClass("click-player");
								$('#playStart .tourWrapper.active .tour.active').parent().css('transition','0.3s all');
								tourView = "";
								}, 2050);
				
				 
		}
		else{
			
			setTimeout(function() { $('#playStart .tourWrapper .tour.click-player').click();
								$('#playStart .tourWrapper .tour.click-player').removeClass("click-player");
								
								}, 350);
		}
		
		}
		
		

		if (stepcount <= 0){
			stepcount = -1;
		}
	      
		
	    });	


$(document).on('click ', '#playingField .tailWrapper.center .tail.allowed', function () {
	incountrytcount++;
	console.log(incountrytcount);
	$('#playingField .tailWrapper .tail').removeClass("allowed");
	$('#playStart .tourWrapper.active .tour.active').addClass("incountry");
	$('#playStart .tourWrapper.active .tour.active').parent().clone().removeAttr("style").appendTo('#inCountry');	
	$('#inCountry .tourWrapper .tour').removeClass("active");
	setTimeout(function() {	$('#inCountry .tourWrapper').css("opacity",1);
								}, 2000);
			$('#playStart .tourWrapper.active .tour.active').parent().attr('style','opacity:0;pointer-events:none;left:'+($(this).offset().left-$("#playStart").offset().left+26)+'px;top:'+($(this).offset().top-$("#playStart").offset().top+26)+'px;transition: 2s all;');
	if(incountrytcount<4){
		if(jailcount+incountrytcount==4){
	        			$('#infogame h2').text('Верните из страны одного путешественника, чтобы освободить другого из тюрьмы. Кликните по путешевтвеннику, который уже в стране.');
	        		}
	        		else{
	        			$('#infogame h2').text('Поздравляем! Ваш турист добрался до страны! Не забудьте про остальных!');
	        		}
			
	}
	else{
		incountrytcount=0;
		$('#infogame h2').text('Поздравляем! Все ваши туристы добрались до страны! Хотите сыграть еше раз?');
		restartPosTour();
	}
			
	    });	



$(document).on('click ', '#inCountry .tourWrapper.active .tour', function () {
	$('#playerTail .tourWrapper').remove();
		$(this).parent().clone().appendTo('#playerTail');
$('#infogame .infogame-but button').remove();
		tourView = $(this).attr("data-view");
		$('#infogame h2').text('Если хотите вывести путешественника из страны, то просто ступайте на один из выделенных квадратов!');
		$('#playStart .tourWrapper.active .tour').removeClass("active");
		$('#inCountry .tourWrapper.active .tour').removeClass("active");
		$('#playingField .tailWrapper .tail').removeClass("allowed");
	     $(this).addClass("active");
$('#playingField .tailWrapper').eq(23).find('.tail').addClass("allowed");
$('#playingField .tailWrapper').eq(24).find('.tail').addClass("allowed");
$('#playingField .tailWrapper').eq(32).find('.tail').addClass("allowed");
$('#playingField .tailWrapper').eq(33).find('.tail').addClass("allowed");
$('#playingField .tailWrapper').eq(40).find('.tail').addClass("allowed");
$('#playingField .tailWrapper').eq(41).find('.tail').addClass("allowed");
$('#playingField .tailWrapper').eq(49).find('.tail').addClass("allowed");
$('#playingField .tailWrapper').eq(50).find('.tail').addClass("allowed");
	     
	    });	
 

$(document).on('click ', '#button-restart', function () {
	 $("#playingField").removeAttr("style");
	 $("#playStart").removeAttr("style");
	      $("#playingField .tailWrapper:not(.center)").remove();
			$("#playStart .tourWrapper").remove();
			createTale(tailOne,'tail-one');
			createTale(tailTwo,'tail-two');
			createTale(tailThree,'tail-three');
			createTale(tailJail,'tail-jail');
			$(this).remove();
			$('#infogame h2').text('Выберите стартовые позиции для 4 туристов и начните путешествие!(кликнуть по желтым квадратам)');
			startPosTour();
			 $('#playingField').addClass("playingFieldDis");
			 $('.tail-start').removeClass("selected");
	    });	



$(document).on('click ', '#playStart .tourWrapper.active .tour.player-in-jail', function () {
	$('#playerTail .tourWrapper').remove();
		$(this).parent().clone().appendTo('#playerTail');
	$('#infogame .infogame-but button').remove();
		var topPlayerJail = $(this).parent().offset().top;
	     var leftPlayerJail = $(this).parent().offset().left;
	   //  $('#infogame h2').text('');
		$('#playStart .tourWrapper.active .tour').removeClass("player-in-jail-now");
			$(this).addClass("player-in-jail-now");
modalWithBut("Из тюрьмы можно освободить, только встав на эту клетку последним ходом туриста. (перед тем как встать на квадрат, у туриста должен оставаться один ход)","complite","Из тюрьмы можно освободить, только встав на эту клетку последним ходом туриста. (перед тем как встать на квадрат, у туриста должен оставаться один ход)");
					showH("Освободи меня!","red");
			if(!tourView==""){
							
									$('#playStart .tourWrapper.active .tour[data-view="'+tourView+'"]').addClass('active');
									$('#playStart .tourWrapper.active .tour[data-view="'+tourView+'"]').removeClass('incountry');
									incountrytcount--;
									$('#playStart .tourWrapper.active .tour[data-view="'+tourView+'"]').attr('data-step',1);
									$('#playStart .tourWrapper.active .tour[data-view="'+tourView+'"]').parent().css('opacity',1);
									$('#inCountry .tourWrapper.active .tour[data-view="'+tourView+'"]').parent().attr('style','opacity:0;pointer-events:none; ');
									setTimeout(function() {	$('#inCountry .tourWrapper.active .tour[data-view="'+tourView+'"]').parent().remove();
										$('#playStart .tourWrapper.active  .tour[data-view="'+tourView+'"]').parent().css('transition','0.3s all');
										tourView ="";
													}, 1900); 
									$('#playStart .tourWrapper.active .tour[data-view="'+tourView+'"]').attr('data-step',1);

							}
		$("#playingField .tailWrapper .tail.allowed").each(function () {
				if($(this).offset().top == topPlayerJail && $(this).offset().left == leftPlayerJail){
					stepcount = $('#playStart .tourWrapper.active .tour.active').attr('data-step');	
					console.log(stepcount);
					stepcount--;

					if (stepcount == 0){
						jailcount--;
						//$('#infogame h2').text('Ура! Вы освободили заключенного!');
						showH("Ура! Освобождение!","green");
						console.log(tourView);
						
							$('#playStart .tourWrapper.active .tour.active').parent().css({left:$('#playStart .tourWrapper.active .tour.player-in-jail.player-in-jail-now').parent().position().left,top:$('#playStart .tourWrapper.active .tour.player-in-jail.player-in-jail-now').parent().position().top});
					      $('#playStart .tourWrapper.active .tour').removeClass("active");
					      $('#inCountry .tourWrapper.active .tour').removeClass("active");
						$('#playingField .tailWrapper .tail').removeClass("allowed");
						$('#playStart .tourWrapper.active .tour.player-in-jail.player-in-jail-now').addClass("active");
						$('#playStart .tourWrapper.active .tour.active').attr('data-step',1);
						 $('#playStart .tourWrapper.active .tour.active').removeClass("player-in-jail");
						$('#playStart .tourWrapper.active .tour.active').removeClass("player-in-jail-now");
						$('#playStart .tourWrapper .tour.active').click();
						$('#playStart .tourWrapper .tour.active').parent().css('z-index',2);
					}
					else{
						showH("Так осовободить нельзя!","red");
					}

				}
				else{
		
				}
				
		})



});
$(document).on('click ', '#playStart .tourWrapper.active .tour.player-in-book', function () {
	showH("Собери предложение!","yellow");
	$('#playerTail .tourWrapper').remove();
		$(this).parent().clone().appendTo('#playerTail');
		$('#playStart .tourWrapper.active .tour').removeClass("active");
				$(this).addClass("active");
				if($(this).attr('data-step')==1){
		        	playerInBook('Собрав правильно предложение, турист сможет сделать 1 шаг. Чтобы начать собирать предложение, нужно кликнуть по кнопке "СОБРАТЬ ПРЕДЛОЖЕНИЕ"',1);
		        }
		        if($(this).attr('data-step')==2){
		        	playerInBook('Собрав правильно предложение, турист сможет сделать 2 шага. Чтобы начать собирать предложение, нужно кликнуть по кнопке "СОБРАТЬ ПРЕДЛОЖЕНИЕ"',2);
		        }
		        if($(this).attr('data-step')==3){
		        	playerInBook('Собрав правильно предложение, турист сможет сделать 3 шага. Чтобы начать собирать предложение, нужно кликнуть по кнопке "СОБРАТЬ ПРЕДЛОЖЕНИЕ"',3,'Если турист попал на поле с цифрой 3, значит, собрав правильно предложение, турист сможет сделать 3 шага. Чтобы начать собирать предложение, нужно кликнуть по кнопке "СОБРАТЬ ПРЕДЛОЖЕНИЕ"');
		        }
		        //$('#playStart .tourWrapper.active .tour').removeClass("active");
				$('#inCountry .tourWrapper.active .tour').removeClass("active");
});

$(document).on('click ', '#formTakeCard .swiper-wrapper .swiper-slide', function () {
	var hier = $(this).attr("data-hierog");
	var valHier = $(this).attr("data-val");
	var card = $('<div class="swiper-slide"  data-toggle="modal" data-target="#myModal" type="button" data-hierog="'+hier+'" data-val="'+valHier+'">');
	card.text($(this).text());
	card.appendTo($("#formDeck .swiper-wrapper"));
	//$(this).parent().css("margin-top",-60);
	
	$(this).addClass('remove-now');
	$(this).css('background','none');

	setTimeout(function() {
	$("#formTakeCard .swiper-wrapper").removeAttr('style');
	$("#formTakeCard .swiper-wrapper .swiper-slide").removeAttr('data-swiper-column');
	$("#formTakeCard .swiper-wrapper .swiper-slide").removeAttr('data-swiper-row');
	$("#formTakeCard .swiper-wrapper .swiper-slide").removeAttr('style');
	$("#formTakeCard .swiper-wrapper .swiper-slide.remove-now").remove();
	swiper2.update();
		if($("#formTakeCard .swiper-wrapper").children().length==0){
			$("#takeCard").addClass("takeCardDis");
			$("#formTakeCard").addClass("formTakeCardDis");
		}
	}, 350); 


	var cardcount = $("#cardDeck button").attr("data-count-card");
	cardcount++;
	$("#cardDeck button").attr("data-count-card",cardcount);
	$("#cardDeck button span").text(cardcount);
});

$(document).on('click ', '#formDeck:not(.inTask) .swiper-wrapper .swiper-slide', function () {
	var hier = $(this).attr("data-hierog");
	$("#myModal .modal-body .hier-header").text(allHier[hier].head);
	$("#myModal .modal-body .hier-trans").text(allHier[hier].trans);
	$("#myModal .modal-body .hier-transcrip").text(allHier[hier].transcrip);
	var countTemp = 0;
	 $("#myModal .modal-body .hier-body .hier").each(function () {
					countTemp++;
					var indexhead = "headhier"+countTemp;
					$(this).find(".hier-head").text(allHier[hier][indexhead]);
					var indextext = "texthier"+countTemp;
					$(this).find(".hier-text").text(allHier[hier][indextext]);
				});
	 $("#myModal .modal-body .hier-hint").text(allHier[hier].hint);
	$("#myModal .modal-body audio").attr("src","audio/"+hier+".mp3");
	hierAudio = document.getElementById("hier-audio");
	
});
$(document).on('click ', '#formDeck.inTask .swiper-wrapper .swiper-slide', function () {
	
	var count = 0;
	$("#infogame .infogame-task .task-card.empty").each(function () {
				count++;
					if(count==1){
						$(this).addClass("thisIs");
						
					}	
				});
	$(this).clone().appendTo('#infogame .infogame-task .task-card.empty.thisIs');	
	$('#infogame .infogame-task .task-card.empty.thisIs').removeClass("empty");
	$('#infogame .infogame-task .task-card.thisIs').removeClass("thisIs");
	
});
$(document).on('click ', '#infogame .infogame-task .task-card:not(empty)', function () {
	
	$(this).empty();
	$(this).addClass("empty");
});
$(document).on('click ', '#button-check', function () {
			var count = 0;
			var answer = "";
			$("#infogame .infogame-task .task-card.empty").each(function () {
				count++;	
				});
			if(count>=1){
						$('#infogame h2').text('Вы собрали не все предложение! Жмите на карты в своей колоде, чтобы собрать его.');

					}
			else{
				$("#infogame .infogame-task .task-card .swiper-slide").each(function () {
						answer = answer + $(this).attr('data-val');
				});
				if (answer==$(this).attr('data-check')){
					//$('#infogame h2').text('');
					modalWithBut("Поздравляем! Предложение собрано верно. Если хотите его прослушать, жмите ПРОСЛУШАТЬ. Или выходите из задания.","complite","После успешного составления предложения ваш турист получает дополнительные шаги. Вы можете прослушать предложение или выходить из задания.");
					showH("+"+$('#playStart .tourWrapper.active .tour.active').attr("data-step"),"green");
					$('#playStart .tourWrapper.active .tour.active').removeClass('player-in-book');
					$('#playStart .tourWrapper.active .tour.active').click();
					$('#playStart .tourWrapper.active .tour.active').attr("data-task","");
					$('#playStart .tourWrapper.active .tour.active span').text("+"+$('#playStart .tourWrapper.active .tour.active').attr("data-step"));
					var lisBut = $('<button type="button" id="button-lis">');
						lisBut.text("Прослушать");
						lisBut.attr('data-task-count',$(this).attr("data-task-count"));
						lisBut.appendTo('#infogame .infogame-task');
				}
				else{
					//$('#infogame h2').text('Предложение собрано неверно! Выходите из задания.');
					modalWithBut("Предложение собрано неверно! Выходите из задания.","not-complite","Если предложение собрано неверно, вы можете только выйти из задания.");
					showH("Неверно!","red");
				}
			}
			
	    });	
    var width = $(window).width();
 if (width < 1000 ) {
$('head meta[name="viewport"]').attr('content','width=700px;initial-scale=1; minimum-scale=1; maximum-scale=1;user-scalable=no;');
 }


    

})
    


var hierAudio = document.getElementById("hier-audio"); 
var y = document.getElementById("myAudio2"); 
function playAudioHier() { 
	$('.wrapper .cat-loader').removeClass("disCat");
	hierAudio.load();
	//y.load();
	hierAudio.play();
			//x.onended = function() {
				//$('.wrapper .cat-loader').removeClass("disCat");
				//playAudio2();
			//};
	hierAudio.oncanplaythrough = function() {
           $('.wrapper .cat-loader').addClass("disCat");
      };
} 


function playAudio2() { 
	y.load();
    y.play();
    y.oncanplaythrough = function() {
				 $('.wrapper .cat-loader').addClass("disCat");
				}
} 

function openFormDeck() { 
    $('#formDeck').removeClass("formDeckDis");
    $('#formTakeCard').addClass("formTakeCardDis");
    if($('#formDeck .swiper-wrapper').children().length==0){
    	$('#infogame h2').text('У вас пока что нет ни одной карты с иероглифом. Возьмите свою первую карту!');
    }
    else{
    	$('#infogame h2').text('Кликните по карте, чтобы изучить подробную информацию об иероглифе!');
    }
    
     swiper1.update();

} 

var swiper1 = new Swiper('#formDeck .swiper-container', {
    slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 60,
    mousewheel: true,
    resizeReInit: true,
    navigation: {
        nextEl: '#formDeck .swiper-button-next',
        prevEl: '#formDeck .swiper-button-prev',
   		 },
	});

var swiper2 = new Swiper('#formTakeCard .swiper-container', {
    slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 60,
    mousewheel: true,
    resizeReInit: true,
    navigation: {
        nextEl: '#formTakeCard .swiper-button-next',
        prevEl: '#formTakeCard .swiper-button-prev',
   		 },
	});
function openformTakeCard() { 
    $('#formTakeCard').removeClass("formTakeCardDis");
    $('#formDeck').addClass("formDeckDis");
     swiper2.update();

} 
function closeFormDeck() { 
    $('#formDeck').addClass("formDeckDis");
} 
function formTakeCard() { 
    $('#formTakeCard').addClass("formTakeCardDis");
} 
