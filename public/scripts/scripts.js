'use strict';

(function() {

  var header = document.querySelector('.js-header');
  var dialogs = header.querySelectorAll('.js-dialog');

  var dialogCallback = header.querySelector('.js-dialog-callback');
  var classCallback = 'js-dialog-callback';
  var btnOpenCallback = header.querySelector('.js-open-callback');
  var btnCloseCallback = dialogCallback.querySelector('.js-close-dialog');

  var ESC = 27;

  var openDialog = function(dialog, className, btnOpen, btnClose) {

    var open = function() {
      for (var i = 0; i < dialogs.length; i += 1) {
        if (!dialogs[i].classList.contains(className)) {
          dialogs[i].classList.remove('active');
        }
      }

      dialog.classList.toggle('active');
      btnOpen.classList.toggle('active');
    };

    var close = function() {
      dialog.classList.remove('active');
      btnOpen.classList.remove('active');
    }

    var onBtnOpenClick = function(e) {
      e.preventDefault();
      open();
    };

    var onBtnCloseClick = function(e) {
      e.preventDefault();
      close();
    };

    var onEscKeyup = function(e) {
      if (e.keyCode === ESC) {
        e.preventDefault();
        close();
      }
    };

    btnOpen.addEventListener('click', onBtnOpenClick);
    btnClose.addEventListener('click', onBtnCloseClick);
    document.addEventListener('keyup', onEscKeyup);
  };

  openDialog(dialogCallback, classCallback, btnOpenCallback, btnCloseCallback);

})();

'use strict';

(function() {
  var size = 100;
  var ellipsis = document.querySelectorAll('.js-ellipsis');

  if(ellipsis) {
    for (var i = 0; i < ellipsis.length; i += 1) {
      ellipsis[i].textContent = ellipsis[i].textContent.slice(0, size) + ' ...';
    }
  }

})();

'use strict';

(function() {
  var inputsTel = document.querySelectorAll('input[type="tel"]');
  var textareas = document.querySelectorAll('textarea');

  for (var i = 0; i < inputsTel.length; i += 1) {
    var maskTel = new IMask(
      inputsTel[i], {
        mask: '+{7}(000)000-00-00',
      }
    );
  }

  for (var i = 0; i < textareas.length; i += 1) {
    textareas[i].innerHTML = textareas[i].innerHTML.trim();
  }

})();

objectFitImages();
svg4everybody();
picturefill();
// new WOW().init();

'use strict';

(function() {

  var btn = document.querySelector('.js-button-nav');
  var block = document.querySelector('.js-panel-main-nav');
  var overlay = document.querySelector('.js-header-overlay');
  var ESC = 27;

  var toggle = function() {
    block.classList.toggle('active');
    btn.classList.toggle('active');
    overlay.classList.toggle('active');
  };

  var close = function() {
    block.classList.remove('active');
    btn.classList.remove('active');
    overlay.classList.remove('active');
  };

  var onBtnClick = function(e) {
    e.preventDefault();
    toggle();
  };

  var onCloseClick = function(e) {
    e.preventDefault();
    close();
  };

  var onEscKeyup = function(e) {
    if (e.keyCode === ESC) {
      e.preventDefault();
      close();
    }
  };

  btn.addEventListener('click', onBtnClick);
  overlay.addEventListener('click', onCloseClick);
  document.addEventListener('keyup', onEscKeyup);

})();

$(document).ready(function (){
  var btn = $('.js-button-down');
  var content = $('.js-down');

  btn.click(function (){
    $('html, body').animate({
      scrollTop: content.offset().top
    }, 500);
  });
});

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

'use strict';

(function() {
  var btns = document.querySelectorAll('.js-button-video');

  if(btns){
    var videoModal = document.querySelector('.js-modal-video');
    var video = videoModal.querySelector('.js-modal-video-iframe');
    var overlay = videoModal.querySelector('.js-modal-overlay');
    var btnClose = videoModal.querySelector('.js-modal-close');

    for (var i = 0; i < btns.length; i++) {
      var videoItem = btns[i].parentNode.parentNode;
      var atr = videoItem.getAttribute('data-video-id');
      videoItem.style.backgroundImage = 'url(https://img.youtube.com/vi/' + atr + '/0.jpg)';

      btns[i].addEventListener('click', function(e) {
        e.preventDefault();
        var btnVideo = e.currentTarget;
        var videoItem = btnVideo.parentNode.parentNode;
        var atr = videoItem.getAttribute('data-video-id');

        videoModal.classList.add('active');
        video.src = 'https://www.youtube.com/embed/' + atr+ '?enablejsapi=1';
        video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      })
    }

    btnClose.addEventListener('click', function(e) {
      videoModal.classList.remove('active');
      video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    });

    overlay.addEventListener('click', function(e) {
      videoModal.classList.remove('active');
      video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    });
  }
})();
