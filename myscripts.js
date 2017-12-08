 $(document).ready(function(){

 	$(".card").hover(function(){
 	 	$(this).addClass("card-mouseover");
 	});
 	$(".card").mouseleave(function(){
 		$(this).removeClass("card-mouseover");
 	});

 	$("#slide1").click(function(){
 		
 		document.getElementsByClassName("slide").style.transform = "translateZ( -182px )";
 		document.getElementsByClassName("slide").style.transform = "rotateY(   -0deg )";
 	});
 	$("#slide2").click(function(){
 		
 		this.style.transform = "translateZ( -182px )";
 		this.style.transform = "rotateY(  -60deg )";
 	});
 	$("#slide3").click(function(){
 		
 		this.style.transform = "translateZ( -182px )";
 		this.style.transform = "rotateY( -120deg )";
 	});
 	$("#slide4").click(function(){
 		
 		this.style.transform = "translateZ( -182px )";
 		this.style.transform = "rotateY(  -180deg )";
 	});
 	$("#slide5").click(function(){
 		
 		this.style.transform = "translateZ( -182px )";
 		this.style.transform = "rotateY(  -240deg )";
 	});
 	$("#slide6").click(function(){
 		
 		this.style.transform = "translateZ( -182px )";
 		this.style.transform = "rotateY(  -300deg )";
 	});







});