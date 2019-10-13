/**

VIEW IN FULLSCREEN FOR ACTUAL EXPERIENCE. HAVE FUN.

**/
var sectionNo = 1;
$(".btn-btm").click(function(){
	nextSection("right-card");
	nextSection("NavBubble");
	nextSection("left-form-section");

	
	if(sectionNo<4){
		sectionNo = sectionNo+1;
	}
	changeButtonColorAndText(sectionNo,"Submit");
		

});

$(".btn-back").click(function(){
	prevSection("right-card");
	prevSection("NavBubble");
	prevSection("left-form-section");
	if(sectionNo>1){
		sectionNo = sectionNo-1;
	}
	changeButtonColorAndText(sectionNo,"Submit");
});





function nextSection(className){
	var activeLeftSection = $("."+className+".active");
	var nextLeftSection = activeLeftSection.next();

	$("."+className).removeClass("prev");

	if(nextLeftSection.hasClass(className)){
		activeLeftSection.removeClass("active");
		activeLeftSection.addClass("notactive");
		nextLeftSection.removeClass("notactive");
		nextLeftSection.addClass("active");
	}
	checkForBackButton();
}


function prevSection(className){
	var activeLeftSection = $("."+className+".active");
	var nextLeftSection = activeLeftSection.prev();

	$("."+className).removeClass("prev");
	

	if(nextLeftSection.hasClass(className)){
		activeLeftSection.removeClass("active");
		activeLeftSection.addClass("notactive prev");
		nextLeftSection.removeClass("notactive");
		nextLeftSection.addClass("active prev");

		//activeLeftSection.removeClass("prev");
		//nextLeftSection.removeClass("prev");
	}

	checkForBackButton();
}

function changeButtonColorAndText(sectionNo,text){
	$(".btn-btm").removeClass("c"+(sectionNo-1));
	$(".btn-btm").removeClass("c"+(sectionNo+1));
	$(".btn-btm").text(text);
	$(".btn-btm").addClass("c"+sectionNo);
}

function changeNavDotColor(sectionNo){
	$(".btn-btm").removeClass("c"+(sectionNo-1));
	$(".btn-btm").addClass("c"+sectionNo);
}


function checkForBackButton(){
	if($(".left-form-section.c1").hasClass("active")){
		$(".btn-back").css("display","none");
	}else{
		$(".btn-back").css("display","block");
	}
}

	checkForBackButton();


$(".inner-div-input").focus(function(){
	$(this).parent().addClass("active");
})




$(".inner-div-input").focusout(function(){
	$(this).parent().removeClass("active");
})