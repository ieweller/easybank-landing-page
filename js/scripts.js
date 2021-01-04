// toggle mobile menu when hamburger/close icon is touched
$(".menu").click(function(){
  $("nav").fadeToggle(50);
  $(".overlay").fadeToggle(200);
  $(".menu").toggleClass('close');
  $("body").toggleClass('hide-overflow');
});

$(function() {
  $.ajax({
    type : 'GET',
    url : 'articles.json',
    async : false,
    beforeSend : function(){/*loading*/},
    dataType : 'json',
    success : function(result) {
      latestArticles(result);
    }
  });
});

function latestArticles(articlesList) {
  var buffer = "";

  $.each(articlesList, function(index, val){

    buffer += '<article><div class="thumbnail" style="background-image: url(';
    buffer += val.thumbnail;
    buffer += ')"></div><div class="details"><span rel="author">By ';
    buffer += val.author;
    buffer += '</span><a href="#"><h1>';
    buffer += val.title;
    buffer += '</h1></a><p>';
    buffer += val.content;
    buffer += '</p></div></article>';
  });
  // Adds table generated from JSON objects to DOM
  $('.latest-articles').html(buffer);
}
