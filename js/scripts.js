$(".menu").click(function(){
  $("nav").fadeToggle(200);
  $(".overlay").fadeToggle(600);
  $(".menu").toggleClass('close');
});
