  $(document).ready(function() {
//kogato klina element s klas filter-button da se izpulni tova v funkciqta
      $(".filter-button").click(function() {
          //value e = na  (tozi element s klas filter-button koito sum kliknala) 
          //i mu wzimam atributa demek value  e = na atributa data-filter
          var value = $(this).attr('data-filter');
//ako value e na na all 
          if (value == "all") {
              //$('.filter').removeClass('hidden');
              $('.filter').show('1000');
          } else {
              //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
              //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
              $(".filter").not('.' + value).hide('3000');
              $('.filter').filter('.' + value).show('3000');

          }
      });

      if ($(".filter-button").removeClass("active")) {
          $(this).removeClass("active");
      }
      $(this).addClass("active");

  });
    $(document).ready(function() {
 $(".filter-button").click(function(event) {
     event.preventDefault();
$("#item_slide").css("display", "none");
$("#products_menu").css("display", "inline-block");

 });
          });

            $(document).ready(function() {
 $("#logo").click(function(event) {
     event.preventDefault();
$("#products_menu").css("display", "none");
$("#item_slide").css("display", "inline-block");

 });
 });
    $(document).ready(function() {
 $(".gallery_product").click(function() {
   
  var height = $(window).height() - 200;
  $(".modal-body").css("max-height", height);
})
    });