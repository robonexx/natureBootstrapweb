$(function () {
  $(document).scroll(function(){
      var $nav = $("#navCore");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });  
});