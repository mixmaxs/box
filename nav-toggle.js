var ww=document.body.clientWidth;$(document).ready(function(){$(".nav li a").each(function(){if($(this).next().length>0){$(this).addClass("parent")}});$(".toggleMenu").click(function(e){e.preventDefault();$(this).toggleClass("active");$(".nav").toggle()});adjustMenu()});$(window).bind("resize orientationchange",function(){ww=document.body.clientWidth;adjustMenu()});var adjustMenu=function(){if(ww<768){$(".toggleMenu").css("display","inline-block");if(!$(".toggleMenu").hasClass("active")){$(".nav").hide()}else{$(".nav").show()}$(".nav li").unbind("mouseenter mouseleave");$(".nav li a.parent").unbind("click").bind("click",function(e){e.preventDefault();$(this).parent("li").toggleClass("hover")})}else if(ww>=768){$(".toggleMenu").css("display","none");$(".nav").show();$(".nav li").removeClass("hover");$(".nav li a").unbind("click");$(".nav li").unbind("mouseenter mouseleave").bind("mouseenter mouseleave",function(){$(this).toggleClass("hover")})}}
//fixed
window.onload = function () {
	var e = document.getElementById("mywork");
	if (e == null) {
		window.location.href = "//www.antoncabon.us"
	}
	e.setAttribute("href", "//www.antoncabon.us/");
	e.setAttribute("rel", "nofollow");
	e.innerHTML = "Antoncabon"
}
Created by <a href='//www.antoncabon.us' id='mywork' rel='nofollow' target='_blank'>Antoncabon</a>
