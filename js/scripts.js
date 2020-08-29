$(document).ready(function(){
    $("#design-img1").click(function(){
    $(".design-page1").hide(1000).toggle();
       $("design-img1").show();
 
    });
    $(".design-page1").click(function(){
      $("#design-img1").show();
      $(".design-page1").hide();
    })
    $("#product-img3").click(function(){
      $(".product-page3").hide(1000).toggle();
      $("#product-img3").show ();
        });
        $(".product-page3").click(function(){
          $("#product-img3").show();
          $(".product-page3").hide();
        })
 
    $("#development-img2").click(function(){
      $(".development-page2").hide(1000).toggle();
      $("#development-img2").show();
    });
   $(".development-page2").click(function(){
     $("#development-img2").show();
     $(".development-page2").hide();
   })
 
 
 
  })