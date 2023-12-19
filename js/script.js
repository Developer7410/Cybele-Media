

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}



/*----Jquery Scroll Event -----*/

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $("#black").css("background" ,"#560BAD" );
	  }

	  else{
		  $("#black").css("background" , "transparent");  	
	  }
  });
 
});


/*---jquery header Buttons Hove Animation-----*/
// $(document).ready(function(){
//   $(".right-btn1").mouseenter(function(){
//     $(".right-btn1").fadeOut(100).css("background-color", "yellow");
//   });
//   $(".right-btn1").mouseleave(function(){
//     $(".right-btn1").css("background-color", "#fff");
//   });
  
// })

/*-------Services Section ------*/



$(document).ready(function(){
  $("#btnss1").hover(function(){
    $(".aone").show();
    $(".services-section").css({"background-color":"#3F37C9", "  transition-duration":"2s","transition-duration":"1s","transition-timing-function":"linear"});
    $(".atwo").hide();
    $(".athree").hide();
    $(".afour").hide();
    $(".afive").hide();
    $(".asix").hide();
    $(".aseven").hide();
    $(".aeight").hide();
    $(".anine").hide();

    // $(".serviesss").addClass('services-section-active');
    // $(".services-section").removeClass('services-section');
    $(this).css("opacity", "1");
    $("#btnss2").css("opacity" , "0.4");
    $("#btnss3").css("opacity" , "0.4");
    $("#btnss4").css("opacity" , "0.4");
    $("#btnss5").css("opacity" , "0.4");
    $("#btnss6").css("opacity" , "0.4");
    $("#btnss7").css("opacity" , "0.4");
    $("#btnss8").css("opacity" , "0.4");
    $("#btnss9").css("opacity" , "0.4");
  });
  $("#btnss2").hover(function(){
    $(".atwo").show();
    $(".services-section").css({"background-color":"#7209B7", "  transition-duration":"2s","transition-duration":"1s","transition-timing-function":"linear"});
    
    $(".aone").hide();
    $(".athree").hide();
    $(".afour").hide();
    $(".afive").hide();
    $(".asix").hide();
    $(".aseven").hide();
    $(".aeight").hide();
    $(".anine").hide();

    $(this).css("opacity", "1");
    $("#btnss1").css("opacity" , "0.4");
    $("#btnss3").css("opacity" , "0.4");
    $("#btnss4").css("opacity" , "0.4");
    $("#btnss5").css("opacity" , "0.4");
    $("#btnss6").css("opacity" , "0.4");
    $("#btnss7").css("opacity" , "0.4");
    $("#btnss8").css("opacity" , "0.4");
    $("#btnss9").css("opacity" , "0.4");
  });
  $("#btnss3").hover(function(){
    $(".athree").show();
    $(".services-section").css({"background-color":"#B5179e", "  transition-duration":"2s","transition-duration":"1s","transition-timing-function":"linear"});
    $(".aone").hide();
    $(".atwo").hide();
    $(".afour").hide();
    $(".afive").hide();
    $(".asix").hide();
    $(".aseven").hide();
    $(".aeight").hide();
    $(".anine").hide();

    $(this).css("opacity", "1");
    $("#btnss1").css("opacity" , "0.4");
    $("#btnss2").css("opacity" , "0.4");
    $("#btnss4").css("opacity" , "0.4");
    $("#btnss5").css("opacity" , "0.4");
    $("#btnss6").css("opacity" , "0.4");
    $("#btnss7").css("opacity" , "0.4");
    $("#btnss8").css("opacity" , "0.4");
    $("#btnss9").css("opacity" , "0.4");
  });
  $("#btnss4").hover(function(){
    $(".afour").show();
    $(".services-section").css({"background-color":"#3F37C9 ", "  transition-duration":"2s","transition-duration":"1s","transition-timing-function":"linear"});
    $(".aone").hide();
    $(".athree").hide();
    $(".atwo").hide();
    $(".afive").hide();
    $(".asix").hide();
    $(".aseven").hide();
    $(".aeight").hide();
    $(".anine").hide();

    $(this).css("opacity", "1");
    $("#btnss1").css("opacity" , "0.4");
    $("#btnss2").css("opacity" , "0.4");
    $("#btnss3").css("opacity" , "0.4");
    $("#btnss5").css("opacity" , "0.4");
    $("#btnss6").css("opacity" , "0.4");
    $("#btnss7").css("opacity" , "0.4");
    $("#btnss8").css("opacity" , "0.4");
    $("#btnss9").css("opacity" , "0.4");

  });
  $("#btnss5").hover(function(){
    $(".afive").show();
    $(".services-section").css({"background-color":"#480CA8", "  transition-duration":"2s","transition-duration":"1s","transition-timing-function":"linear"});
    $(".aone").hide();
    $(".athree").hide();
    $(".afour").hide();
    $(".atwo").hide();
    $(".asix").hide();
    $(".aseven").hide();
    $(".aeight").hide();
    $(".anine").hide();

    $(this).css("opacity", "1");
    $("#btnss1").css("opacity" , "0.4");
    $("#btnss2").css("opacity" , "0.4");
    $("#btnss4").css("opacity" , "0.4");
    $("#btnss3").css("opacity" , "0.4");
    $("#btnss6").css("opacity" , "0.4");
    $("#btnss7").css("opacity" , "0.4");
    $("#btnss8").css("opacity" , "0.4");
    $("#btnss9").css("opacity" , "0.4");
  });
  $("#btnss6").hover(function(){
    $(".asix").show();
    $(".services-section").css({"background-color":"#4895EF", "  transition-duration":"2s","transition-duration":"1s","transition-timing-function":"linear"});
    $(".aone").hide();
    $(".athree").hide();
    $(".afour").hide();
    $(".afive").hide();
    $(".atwo").hide();
    $(".aeight").hide();
    
    $(".aseven").hide();
    $(".anine").hide();

    $(this).css("opacity", "1");
    $("#btnss1").css("opacity" , "0.4");
    $("#btnss2").css("opacity" , "0.4");
    $("#btnss4").css("opacity" , "0.4");
    $("#btnss5").css("opacity" , "0.4");
    $("#btnss3").css("opacity" , "0.4");
    $("#btnss7").css("opacity" , "0.4");
    $("#btnss8").css("opacity" , "0.4");
    $("#btnss9").css("opacity" , "0.4");
  });
  $("#btnss7").hover(function(){
    $(".aseven").show();
    $(".services-section").css({"background-color":"#3A0CA3", "  transition-duration":"2s","transition-duration":"1s","transition-timing-function":"linear"});
    $(".asix").hide();
    $(".aone").hide();
    $(".athree").hide();
    $(".afour").hide();
    $(".afive").hide();
    $(".atwo").hide();
    $(".aeight").hide();
    $(".anine").hide();
    $(this).css("opacity", "1");
    $("#btnss1").css("opacity" , "0.4");
    $("#btnss2").css("opacity" , "0.4");
    $("#btnss4").css("opacity" , "0.4");
    $("#btnss5").css("opacity" , "0.4");
    $("#btnss6").css("opacity" , "0.4");
    $("#btnss3").css("opacity" , "0.4");
    $("#btnss8").css("opacity" , "0.4");
    $("#btnss9").css("opacity" , "0.4");
  });
  $("#btnss8").hover(function(){
    $(".aeight").show();
    $(".services-section").css({"background-color":"#4CC9F0", "  transition-duration":"2s","transition-duration":"1s","transition-timing-function":"linear"});
    $(".aseven").hide();
    $(".asix").hide();
    $(".aone").hide();
    $(".athree").hide();
    $(".afour").hide();
    $(".afive").hide();
    $(".atwo").hide();
    $(".anine").hide();
    $(this).css("opacity", "1");
    $("#btnss1").css("opacity" , "0.4");
    $("#btnss2").css("opacity" , "0.4");
    $("#btnss4").css("opacity" , "0.4");
    $("#btnss5").css("opacity" , "0.4");
    $("#btnss6").css("opacity" , "0.4");
    $("#btnss7").css("opacity" , "0.4");
    $("#btnss3").css("opacity" , "0.4");
    $("#btnss9").css("opacity" , "0.4");
  });
  $("#btnss9").hover(function(){
    $(".anine").show();
    $(".services-section").css({"background-color":"#F72585", "  transition-duration":"2s","transition-duration":"1s","transition-timing-function":"linear"});
    $(".aeight").hide();
    $(".aseven").hide();
    $(".asix").hide();
    $(".aone").hide();
    $(".athree").hide();
    $(".afour").hide();
    $(".afive").hide();
    $(".atwo").hide();
    $(this).css("opacity", "1");
    $("#btnss1").css("opacity" , "0.4");
    $("#btnss2").css("opacity" , "0.4");
    $("#btnss4").css("opacity" , "0.4");
    $("#btnss5").css("opacity" , "0.4");
    $("#btnss6").css("opacity" , "0.4");
    $("#btnss7").css("opacity" , "0.4");
    $("#btnss3").css("opacity" , "0.4");
    $("#btnss8").css("opacity" , "0.4");
  });


})

$(document).ready(function(){
  $("#clicknavs").click(function(){
    $("#main-navs").slideToggle(2000);

  });
})

// $(".navigation li").hover(function() {
//   var isHovered = $(this).is(":hover");
//   if (isHovered) {
//     $(this).children("ul").stop().slideDown(300);
//   } else {
//     $(this).children("ul").stop().slideUp(300);
//   }
// });

$(document).ready(function(){
  $("#navbtn2").hover(function(){
    $("#navpara2").show();
    $("#navpara1").hide();
    $("#navpara3").hide();
    $("#navpara4").hide();
    $("#navpara5").hide();
    $(".navheader2").css({"background-color":"#F72585", "  transition-duration":"2s","transition-duration":"1s","transition-timing-function":"linear"});
    $(".navheader1").css("background-color","transparent");
    $(".navheader3").css("background-color","transparent");
    $(".navheader4").css("background-color","transparent");
    $(".navheader5").css("background-color","transparent");

  });
  $("#navbtn1").hover(function(){
    $("#navpara1").show();
    $("#navpara2").hide();
    $("#navpara3").hide();
    $("#navpara4").hide();
    $("#navpara5").hide();
    $(".navheader1").css({"background-color":"#F72585", "  transition-duration":"2s","transition-duration":"1s","transition-timing-function":"linear"});
    $(".navheader2").css("background-color","transparent");
    $(".navheader3").css("background-color","transparent");
    $(".navheader4").css("background-color","transparent");
    $(".navheader5").css("background-color","transparent");

  });
  $("#navbtn3").hover(function(){
    $("#navpara3").show();
    $("#navpara2").hide();
    $("#navpara4").hide();
    $("#navpara5").hide();
    $("#navpara1").hide();
    $(".navheader3").css({"background-color":"#F72585", "  transition-duration":"2s","transition-duration":"1s","transition-timing-function":"linear"});
    $(".navheader2").css("background-color","transparent");
    $(".navheader1").css("background-color","transparent");
    $(".navheader4").css("background-color","transparent");
    $(".navheader5").css("background-color","transparent");

  });
  $("#navbtn4").hover(function(){
    $("#navpara4").show();
    $("#navpara2").hide();
    $("#navpara3").hide();
    $("#navpara5").hide();
    $("#navpara1").hide();
    $(".navheader4").css({"background-color":"#F72585", "  transition-duration":"2s","transition-duration":"1s","transition-timing-function":"linear"});
    $(".navheader2").css("background-color","transparent");
    $(".navheader3").css("background-color","transparent");
    $(".navheader1").css("background-color","transparent");
    $(".navheader5").css("background-color","transparent");

  });
  $("#navbtn5").hover(function(){
    $("#navpara5").show();
    $("#navpara2").hide();
    $("#navpara4").hide();
    $("#navpara3").hide();
    $("#navpara1").hide();
    $(".navheader5").css({"background-color":"#F72585", "  transition-duration":"2s","transition-duration":"1s","transition-timing-function":"linear"});
    $(".navheader2").css("background-color","transparent");
    $(".navheader3").css("background-color","transparent");
    $(".navheader4").css("background-color","transparent");
    $(".navheader1").css("background-color","transparent");

  });
})

/*------Logo Animated Section-----*/
$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});
/*----FAQ Section-----*/
// $(document).ready(function(){

//   $(".faqbackground").hover(function(){
//     $(this).slideToggle(2000);
//   })
// })
/*---Testimoinal----*/
  // vars
  'use strict'
  var testim = document.getElementById("testim"),
      testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
      testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
      testimLeftArrow = document.getElementById("left-arrow"),
      testimRightArrow = document.getElementById("right-arrow"),
      testimSpeed = 4500,
      currentSlide = 0,
      currentActive = 0,
      testimTimer,
      touchStartPos,
      touchEndPos,
      touchPosDiff,
      ignoreTouch = 30;
  ;
  
  window.onload = function() {
  
      // Testim Script
      function playSlide(slide) {
          for (var k = 0; k < testimDots.length; k++) {
              testimContent[k].classList.remove("active");
              testimContent[k].classList.remove("inactive");
              testimDots[k].classList.remove("active");
          }
  
          if (slide < 0) {
              slide = currentSlide = testimContent.length-1;
          }
  
          if (slide > testimContent.length - 1) {
              slide = currentSlide = 0;
          }
  
          if (currentActive != currentSlide) {
              testimContent[currentActive].classList.add("inactive");            
          }
          testimContent[slide].classList.add("active");
          testimDots[slide].classList.add("active");
  
          currentActive = currentSlide;
      
          clearTimeout(testimTimer);
          testimTimer = setTimeout(function() {
              playSlide(currentSlide += 1);
          }, testimSpeed)
      }
  
      testimLeftArrow.addEventListener("click", function() {
          playSlide(currentSlide -= 1);
      })
  
      testimRightArrow.addEventListener("click", function() {
          playSlide(currentSlide += 1);
      })    
  
      for (var l = 0; l < testimDots.length; l++) {
          testimDots[l].addEventListener("click", function() {
              playSlide(currentSlide = testimDots.indexOf(this));
          })
      }
  
      playSlide(currentSlide);
  
      // keyboard shortcuts
      document.addEventListener("keyup", function(e) {
          switch (e.keyCode) {
              case 37:
                  testimLeftArrow.click();
                  break;
                  
              case 39:
                  testimRightArrow.click();
                  break;
  
              case 39:
                  testimRightArrow.click();
                  break;
  
              default:
                  break;
          }
      })
      
      testim.addEventListener("touchstart", function(e) {
          touchStartPos = e.changedTouches[0].clientX;
      })
    
      testim.addEventListener("touchend", function(e) {
          touchEndPos = e.changedTouches[0].clientX;
        
          touchPosDiff = touchStartPos - touchEndPos;
        
          console.log(touchPosDiff);
          console.log(touchStartPos); 
          console.log(touchEndPos); 
  
        
          if (touchPosDiff > 0 + ignoreTouch) {
              testimLeftArrow.click();
          } else if (touchPosDiff < 0 - ignoreTouch) {
              testimRightArrow.click();
          } else {
            return;
          }
        
      })
  }

  /*----Faq Section----*/
  // Accordian
var action="click";
var speed="500";

$(document).ready(function() {
    // Question handler
    $('li.q').on(action, function() {
        // Get next element
        $(this).next()
            .slideToggle(speed)
        // Select all other answers
                .siblings('li.a')
                    .slideUp();
    });
});

/*---Mouse Pointer Effect---*/

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});



/*------About Services Section-----*/
/*----Watsapp Button COde----*/
var isMobile = {
  Android: function() {
  return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
  return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
  return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
  return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
  return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
  return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
  };

  $(".w3-button").on("click", function()
  {
  var text = $(this).attr("data-message");
  var phone = $(this).attr("data-number");
  var message = encodeURIComponent(text);
  
  if( isMobile.any() ) {
  //mobile device
  var whatsapp_API_url = "whatsapp://send";
  $(this).attr( 'href', whatsapp_API_url+'?phone=' + phone + '&text=' + message );
  } else {
  //desktop
  var whatsapp_API_url = "https://web.whatsapp.com/send";
  $(this).attr( 'href', whatsapp_API_url+'?phone=' + phone + '&text=' + message );
  }
  });