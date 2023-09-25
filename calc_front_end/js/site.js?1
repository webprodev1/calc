let currentSectionOnPage = window.location.hash ? window.location.hash : "#vs_intro"
let isScrolling = false

$(document).ready(function($) {

    $('.js_btn__modal_tech__sum').click(function(e){
        e.preventDefault();
        Fancybox.close();
        Fancybox.show([{src: "#js_modal_tech__promt"}]);
    })

    $('.js_btn_modal_tech__promt__no').click(function(e){
        e.preventDefault();
        Fancybox.close();
        Fancybox.show([{src: "#js_modal_tech"}]);
    })



    $('.js_btn_modal_tech__promt__yes').click(function(e){
        e.preventDefault();
        Fancybox.close();
        Fancybox.show([{src: "#js_modal_tech__thanks"}]);
    })

    $('.js_modal_tech__list input').change(function (e) {
        let sum = 0;
        $('.js_modal_tech__list input').each(function(){
            if($(this).prop('checked')){
                sum += parseInt($(this).val());
            }
        })
        sum = '$'+sum;
        $(".js_modal_tech__total").text(sum)
    });



  $('#calcCars-01-tab').on('click', function(e) {
    $('.row.cars-data:not(.d-none)').addClass('d-none');
    $('.row.cars-data-01').removeClass('d-none');
  });

  $('#calcCars-02-tab').on('click', function(e) {
    $('.row.cars-data:not(.d-none)').addClass('d-none');
    $('.row.cars-data-02').removeClass('d-none');
  });

  $('#calcCars-03-tab').on('click', function(e) {
    $('.row.cars-data:not(.d-none)').addClass('d-none');
    $('.row.cars-data-03').removeClass('d-none');
  });

  $('#calcCars-04-tab').on('click', function(e) {
    $('.row.cars-data:not(.d-none)').addClass('d-none');
    $('.row.cars-data-04').removeClass('d-none');
  });

  $('#calcCars-05-tab').on('click', function(e) {
    $('.row.cars-data:not(.d-none)').addClass('d-none');
    $('.row.cars-data-05').removeClass('d-none');
  });

  $('#calcCars-06-tab').on('click', function(e) {
    $('.row.cars-data:not(.d-none)').addClass('d-none');
    $('.row.cars-data-06').removeClass('d-none');
  });

  $('#calcCars-07-tab').on('click', function(e) {
    $('.row.cars-data:not(.d-none)').addClass('d-none');
    $('.row.cars-data-07').removeClass('d-none');
  });

  $('#calcCars-08-tab').on('click', function(e) {
    $('.row.cars-data:not(.d-none)').addClass('d-none');
    $('.row.cars-data-08').removeClass('d-none');
  });

  $('#calcCars-09-tab').on('click', function(e) {
    $('.row.cars-data:not(.d-none)').addClass('d-none');
    $('.row.cars-data-09').removeClass('d-none');
  });

  $('#calcCars-10-tab').on('click', function(e) {
    $('.row.cars-data:not(.d-none)').addClass('d-none');
    $('.row.cars-data-10').removeClass('d-none');
  });

  $('#calcCars-11-tab').on('click', function(e) {
    $('.row.cars-data:not(.d-none)').addClass('d-none');
    $('.row.cars-data-11').removeClass('d-none');
  });

  $('#calcCars-12-tab').on('click', function(e) {
    $('.row.cars-data:not(.d-none)').addClass('d-none');
    $('.row.cars-data-12').removeClass('d-none');
  });

  // Load Details Calculator
  $('#Cars_Calculator a.dropdown-item').on('click', function(e) {
    e.preventDefault();
    $('.car_details_none').addClass('d-none');
    $('.car_details_load').removeClass('d-none');
  });

  // Calculator Tabs
  $('.nacalcCars .nav-link').on('click', function(e) {
    e.preventDefault();
    if( $(this).hasClass('active') != true ) {
      $('.nacalcCars .nav-link.active').removeClass('active');
      $('.nacalcCars .nav-link.active').attr('aria-selected','false');
      $(this).addClass('active');
      $(this).attr('aria-selected','true');
    }
  });

  // Calc - Zip / Auction
  $('.zip_auc_link').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('opened');
    $('#zip_auc_hide').toggleClass('d-none');

    if( $(this).hasClass('opened') ) {
      $(this).text('Auction');
    } else {
      $(this).text('Zip code');
    }
  });
  $('.zip_exit_link').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('opened');
    $('#zip_exit_hide').toggleClass('d-none');

    if( $(this).hasClass('opened') ) {
      $(this).text('Auction');
    } else {
      $(this).text('Zip code');
    }
  });

  if ( localStorage.getItem('cookieSettings') ){
    $('#cookiePanel').toggleClass('show');
  }

  $(document).on("keyup", function(event){
    const { key } = event

    if(key && (key === "ArrowUp" || key === "8" || key === "ArrowDown" || key === "2")){
      $(".left-navigation a").each( function(index, element){
        if(element.hash === currentSectionOnPage){
          const num = key === "ArrowUp" || key === "8" ? -1 : 1

          if($($(".left-navigation a")[index+num]).attr("href")){
            $($(".left-navigation a")[index+num]).trigger("click")
            window.location.hash = $($(".left-navigation a")[index+num]).attr("href")
            return false
          }
        }
      })
    }

  })

  leftNavigationChangeClass("#vs_intro")

  function leftNavigationChangeClass(href) {
    $(".left-navigation").addClass( !href || href === "#vs_intro" || href === "" ? "d-none" : "d-lg-block" )
      .removeClass( !href || href === "#vs_intro" || href === "" ? "d-lg-block" : "d-none" )
  }

  $('.ck-1').on('click', function() {
    $(this).find('img').toggleClass('d-none');
    $('.ck-un_1 .e-link').toggleClass('d-none');
    $('.ck-un_1 .e-grey').toggleClass('d-none');
  });

  $('.ck-2').on('click', function() {
    $(this).find('img').toggleClass('d-none');
    $('.ck-un_2 .e-link').toggleClass('d-none');
    $('.ck-un_2 .e-grey').toggleClass('d-none');
  });

  $('.ck-cookie-1').on('click', function(e) {
    e.preventDefault();
    $(this).parent('.check-cookie').find('span img').toggleClass('d-none');
    $('.ck-un_1 .e-link').toggleClass('d-none');
    $('.ck-un_1 .e-grey').toggleClass('d-none');
  });
  $('.ck-cookie-2').on('click', function(e) {
    e.preventDefault();
    $(this).parent('.check-cookie').find('span img').toggleClass('d-none');
    $('.ck-un_2 .e-link').toggleClass('d-none');
    $('.ck-un_2 .e-grey').toggleClass('d-none');
  });

  $('.ck-un a').on('click', function(e) {
    e.preventDefault();
    $('.check-cookie span img').toggleClass('d-none');
    $(this).toggleClass('d-none');
    $(this).next('.e-grey').toggleClass('d-none');
  });

  // Scroll To & Local Scroll
  $('.left-navigation a').on('click', function() {

    const href = $(this).attr('href')
    currentSectionOnPage = href

    $('.ln-link.active').removeClass('active');
    $(this).parent('.ln-link').addClass('active');
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 500)
    setTimeout(function() {
      isScrolling = false
    }, 500)

    leftNavigationChangeClass(href)

  });

  $('.c-half .nav-link').on('click', function() {
    if( $(this).hasClass('active') != true ) {
      $('.c-half .nav-link.active').removeClass('active').attr('aria-selected','false');
      $(this).addClass('active').attr('aria-selected','true');
    }
  });
  // DropMenus
  $('.drops').on('click', function() {
    if( $(this).hasClass('selected') != true ) {
      $('.drops.selected').removeClass('selected');
      $('.collapse.show').removeClass('show');
      $(this).addClass('selected');
    } else {
      $(this).removeClass('selected');
    }
  });
  //
  $('#acceptCookie').on('click', function(e) {
    e.preventDefault();
    $('#cookiePanel').toggleClass('show');
  });
  $('#acceptCookieLarge').on('click', function(e) {
    e.preventDefault();
    const cookieSettings = localStorage.getItem('cookieSettings');

    if(!cookieSettings){
      localStorage.setItem('cookieSettings', "oke");
      $('#cookiePanel').toggleClass('show');
    }
  });
  $('#logF .form-group--passw img').on('click', function() {
    var x = document.getElementById("logFP");
    $('.form-group--passw img').toggleClass('d-none');
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  });
  $('#logFM .form-group--passw img').on('click', function() {
    var x = document.getElementById("logFMP");
    $('.form-group--passw img').toggleClass('d-none');
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  });
  $('#resF .form-group--passw img').on('click', function() {
    var x = document.getElementById("resFP");
    $('.form-group--passw img').toggleClass('d-none');
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  });
  $('#regF .form-group--passw img').on('click', function() {
    var x = document.getElementById("regFP");
    $('.form-group--passw img').toggleClass('d-none');
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  });
  $('#newF .form-group--passw img').on('click', function() {
    var x = document.getElementById("newFP");
    $('.form-group--passw img').toggleClass('d-none');
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  });
  //
  $(function () {
    $('[data-toggle="popover"]').popover();
  })
  $('#mobileBookM').on('click', function() {
    $('.c-calculator-mobile.hide').toggleClass('hide');
    $('body').toggleClass('fixed');
    $('#m-buttons').toggleClass('d-none');
  });
  $('.navbar-toggler').on('click', function() {
    $(this).toggleClass('opened');
    $('body').toggleClass('fixed');
  });
  $('.e-cats__car').on('click', function() {
    if( $(this).hasClass('active') != true ) {
      $('.e-cats__car.active').removeClass('active');
      $(this).addClass('active');
    }
  });
  $('.e-button.calc.d-buttons').on('click', function(e) {
    e.preventDefault();
    if( $('#mainSidebarR').hasClass('d-none') != true ) {
      $('#mainSidebarR').addClass('d-none');
      $('#quoteSidebarR').removeClass('d-none');
    } else if( $('#quoteSidebarR').hasClass('d-none') != true ) {
      $('#quoteSidebarR').addClass('d-none');
      $('#orderSidebarR').removeClass('d-none');
    }
  });
  $('#m-buttons .e-button').on('click', function(e) {
    e.preventDefault();
    if( $('#mainSidebarRM').hasClass('d-none') != true ) {
      $('#mainSidebarRM').addClass('d-none');
      $('#quoteSidebarRM').removeClass('d-none');
    } else if( $('#quoteSidebarRM').hasClass('d-none') != true ) {
      $('#quoteSidebarRM').addClass('d-none');
      $('#orderSidebarRM').removeClass('d-none');
      $('#m-buttons .e-button').toggleClass('d-none');
      $('#rightMenu').removeClass('move-left');
    }
  });
  $('#quoteSidebarR .e-close').on('click', function() {
    $('.wrapper').toggleClass('scale');
    $('.c-calculator').toggleClass('hide');
    $('.c-slider').addClass('big');
    $('.nav-item.to-hides').removeClass('d-none');
    $('ul.navbar-nav.ml-5').removeClass('ml-5').addClass('ml-auto');
    $('.nav-item.to-hides').removeClass('d-none');
    $('#rightMenu').removeClass('move-left');
  });
  $('#orderSidebarR .e-close').on('click', function() {
    $('.wrapper').toggleClass('scale');
    $('.c-calculator').toggleClass('hide');
    $('.c-slider').addClass('big');
    $('.nav-item.to-hides').removeClass('d-none');
    $('ul.navbar-nav.ml-5').removeClass('ml-5').addClass('ml-auto');
    $('.nav-item.to-hides').removeClass('d-none');
    $('#rightMenu').removeClass('move-left');
  });
  $('#quoteSidebarRM .e-close').on('click', function() {
    $('.wrapper').toggleClass('scale');
    $('.c-calculator').toggleClass('hide');
    $('.c-slider').addClass('big');
    $('.nav-item.to-hides').removeClass('d-none');
    $('ul.navbar-nav.ml-5').removeClass('ml-5').addClass('ml-auto');
    $('.nav-item.to-hides').removeClass('d-none');
    $('body').removeClass('fixed');
    $('#rightMenu').removeClass('move-left');
  });
  $('#orderSidebarRM .e-close').on('click', function() {
    $('.wrapper').toggleClass('scale');
    $('.c-calculator').toggleClass('hide');
    $('.c-slider').addClass('big');
    $('.nav-item.to-hides').removeClass('d-none');
    $('ul.navbar-nav.ml-5').removeClass('ml-5').addClass('ml-auto');
    $('.nav-item.to-hides').removeClass('d-none');
    $('#m-buttons').toggleClass('d-none');
    $('#m-buttons .e-button').toggleClass('d-none');
    $('body').removeClass('fixed');
    $('#rightMenu').removeClass('move-left');
  });
  $('#menuMainSidebar .fa-chevron-right').on('click', function() {
    $('.wrapper').toggleClass('scale');
    $('.c-calculator').toggleClass('hide');
    $('.c-slider').addClass('big');
    $('.nav-item.to-hides').removeClass('d-none');
    $('ul.navbar-nav.ml-5').removeClass('ml-5').addClass('ml-auto');
    $('.nav-item.to-hides').removeClass('d-none');
    $('#rightMenu').removeClass('move-left');
  });
  $('#mainSidebarRM .fa-chevron-right').on('click', function() {
    $('.wrapper').toggleClass('scale');
    $('.c-calculator').toggleClass('hide');
    $('.c-slider').addClass('big');
    $('.nav-item.to-hides').removeClass('d-none');
    $('ul.navbar-nav.ml-5').removeClass('ml-5').addClass('ml-auto');
    $('.nav-item.to-hides').removeClass('d-none');
    $('body').removeClass('fixed');
    $('#m-buttons').addClass('d-none');
    $('#rightMenu').removeClass('move-left');
  });
  $('#bookNow').on('click', function() {
    $('.wrapper').toggleClass('scale');
    $('.c-calculator').toggleClass('hide');
    $('.c-slider').removeClass('big');
    $('.nav-item.to-hides').addClass('d-none');
    $('ul.navbar-nav.ml-auto').removeClass('ml-auto').addClass('ml-5');
    $('.nav-item.to-hides').addClass('d-none');
    $('#rightMenu').addClass('move-left');
  });
  $('#carsSelect .nav-link').bind('click', function(e) {
    e.preventDefault();
    if( $(this).hasClass('active') != true ) {
      var old = $('#carsSelect .nav-link.active').attr('id');
      var name = $(this).attr('id');
      $('#carsSelect .nav-link.active').removeClass('active');
      old.toggleClass('show').toggleClass('active').attr('aria-selected','false');
      $(this).addClass('active');
      var tab = $('#carsSelect .nav-link.active').attr('id', name - '-tab');
      tab.toggleClass('show').toggleClass('active').attr('aria-selected','true');
    }
  });
  $('#aboutSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 960,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $('.mobile-intro-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 960,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});

$(window).on("wheel", function(e){
  e.stopPropagation();

  if(!isScrolling){
    $(".left-navigation a").each( function(index, element){
      if(element.hash === currentSectionOnPage){
        const num = e.originalEvent.wheelDelta >= 0 ? -1 : 1

        if($($(".left-navigation a")[index+num]).attr("href")){
    isScrolling = true
          $($(".left-navigation a")[index+num]).trigger("click")
          window.location.hash = $($(".left-navigation a")[index+num]).attr("href")
          movedSection = window.location.hash
          return false
        }
      }
    })
  }


})

$(window).scroll(function (e) {
  var header_pos = $(window).scrollTop();

  if ( (header_pos >= 300) && ($(window).width() > 960) ) {
    $('.wrapper').removeClass('scale');
    $('.c-calculator').addClass('hide');
    $('.c-slider').addClass('big');
    $('.e-button.calc.d-buttons').addClass('d-none');
    $('ul.navbar-nav.ml-5').removeClass('ml-5').addClass('ml-auto');
    $('.nav-item.to-hides').removeClass('d-none');
    $('#rightMenu').removeClass('move-left');
  }
  if ( (header_pos < 300) && ($(window).width() > 960) ) {
    $('.wrapper').addClass('scale');
    $('.c-calculator').removeClass('hide');
    $('.c-slider').removeClass('big');
    $('.e-button.calc.d-buttons').removeClass('d-none');
    $('ul.navbar-nav.ml-auto').removeClass('ml-auto').addClass('ml-5');
    $('.nav-item.to-hides').addClass('d-none');
    $('#rightMenu').addClass('move-left');
  }
});

