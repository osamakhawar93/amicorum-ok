$("#carousel-example-generic").carousel({interval:3e3,pause:"hover"}),$(document).ready(function(){$(document).scroll(function(){$(this).scrollTop()>700?$(".navbar-fixed-top").css("background-color","#271b41"):$(".navbar-fixed-top").css("background-color","transparent")})}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=$(this.hash);(o=o.length?o:$("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),$("html, body").animate({scrollTop:o.offset().top},1e3,function(){var e=$(o);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}))}});


$(".navoverlay li").click(function(){
    $(".navoverlay li").removeClass("active");
    $(this).addClass("active");
})