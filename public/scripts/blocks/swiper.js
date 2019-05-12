'use strict';

(function() {
  var mainSliderNav = new Swiper('.js-main-slider-nav', {
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,
    // freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1220: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 1,
      },
    }
  });
  var mainSlider = new Swiper('.js-main-slider', {
    spaceBetween: 10,
    loop:true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.js-main-slider-next',
      prevEl: '.js-main-slider-prev',
    },
    thumbs: {
      swiper: mainSliderNav,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  var swiperScroll = new Swiper('.js-swiper-scroll', {
    direction: 'vertical',
    slidesPerView: 'auto',
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      snapOnRelease: true,
      grabCursor: true,
    },
    mousewheel: true,
  });

})();
