$(".menu").click(function(){
  $("nav").fadeToggle(50);
  $(".overlay").fadeToggle(200);
  $(".menu").toggleClass('close');
});
