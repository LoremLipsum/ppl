'use strict';

(function() {

  var header = document.querySelector('.js-header');

  if(header) {
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
  }

})();

(function($) {
	'use strict';
	$(function() {
    var btn;
    var btnsDropdown = $('.js-dropdown-button');
    var btnsFooter = $('.js-footer-nav-dropdown-button');

    if (btnsDropdown) {
      btnsDropdown.on('click', function(e){
        e.preventDefault();
        btn = $(this);
        btnsDropdown.not(btn).parents('.js-dropdown').removeClass('active');
        btn.parents('.js-dropdown').toggleClass('active');
      });
    }

    var initDropdown = function() {
      if ($(window).outerWidth() < 620) {
        btnsFooter.on('click', function(e){
          e.preventDefault();
          btn = $(this);
          btnsFooter.not(btn).parents('.js-footer-nav-dropdown').removeClass('active');
          btn.parents('.js-footer-nav-dropdown').toggleClass('active');
        });
      }
    }

    initDropdown();

    $(window).resize(function() {
      initDropdown();
    });

	});
})(jQuery);

'use strict';

(function() {
  var size = 90;
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

  var btnOpen = document.querySelector('.js-button-nav');

  if(btnOpen) {

    var block = document.querySelector('.js-panel-main-nav');
    var btnClose = block.querySelector('.js-panel-main-close');
    var overlay = document.querySelector('.js-header-overlay');
    var ESC = 27;

    var open = function() {
      block.classList.add('active');
      overlay.classList.add('active');
    };

    var close = function() {
      block.classList.remove('active');
      overlay.classList.remove('active');
    };

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
    overlay.addEventListener('click', onBtnCloseClick);
    btnClose.addEventListener('click', onBtnCloseClick);
    document.addEventListener('keyup', onEscKeyup);
  }

})();

'use strict';

(function() {

  var modals = document.querySelectorAll('.js-modal');

  if (modals.length) {
    var btnsClose = document.querySelectorAll('.js-modal-close');
    var overlays = document.querySelectorAll('.js-modal-overlay');

    var btnsCallback = document.querySelectorAll('.js-callback-button');
    var callback = document.querySelector('.js-callback-modal');
    var ESC = 27;

    var close = function() {
      for (var i = 0; i < modals.length; i += 1) {
        modals[i].classList.remove('active');
      }
    }

    // Закрывает модальное окно по клику на крестик
    for (var i = 0; i < btnsClose.length; i += 1) {
      btnsClose[i].addEventListener('click', function(e) {
        e.preventDefault();
        e.currentTarget.parentNode.parentNode.classList.remove('active');
      });
    }

    // Закрывает модальное окно по клику на оверлей
    for (var i = 0; i < overlays.length; i += 1) {
      overlays[i].addEventListener('click', function(e) {
        e.preventDefault();
        e.currentTarget.parentNode.classList.remove('active');
      });
    }

    var onEscKeyup = function(e) {
      if (e.keyCode === ESC) {
        e.preventDefault();
        close();
      }
    };

    document.addEventListener('keyup', onEscKeyup);

    for (var i = 0; i < btnsCallback.length; i += 1) {
      btnsCallback[i].addEventListener('click', function(e) {
        e.preventDefault();
        callback.classList.add('active');
      });
    }
  }

})();

'use strict';

(function() {

  var pageHeader = document.querySelector('.js-page-header');
  var dialogs = pageHeader.querySelectorAll('.js-page-dialog');

  var dialogCallback = pageHeader.querySelector('.js-page-dialog-callback');
  var classCallback = 'js-page-dialog-callback';
  var btnOpenCallback = pageHeader.querySelector('.js-open-page-callback');
  var btnCloseCallback = dialogCallback.querySelector('.js-close-page-dialog');

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

  var btnOpen = document.querySelector('.js-button-page-nav');

  if (btnOpen) {
    var block = document.querySelector('.js-panel-page-nav');
    var btnClose = block.querySelector('.js-panel-page-close');
    var overlay = document.querySelector('.js-page-header-overlay');
    var ESC = 27;

    var open = function() {
      block.classList.toggle('active');
      overlay.classList.toggle('active');
    };

    var close = function() {
      block.classList.remove('active');
      overlay.classList.remove('active');Open
    };

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
    overlay.addEventListener('click', onBtnCloseClick);
    document.addEventListener('keyup', onEscKeyup);
  }


})();

(function($) {
	'use strict';
	$(function() {

    var btn = $('.js-button-down');
    var content = $('.js-down');

    btn.click(function (){
      $('html, body').animate({
        scrollTop: content.offset().top
      }, 500);
    });


	});
})(jQuery);

(function($) {
	'use strict';
	$(function() {
    var header = $('.js-header-scroll');
    var lastScrollTop = 0;
    var SCROLL_HEIGHT = 200;

    $(window).scroll(function(e){
      var st = $(this).scrollTop();
      if (st > lastScrollTop || st < SCROLL_HEIGHT) {
        header.removeClass('active');
      } else  {
        header.addClass('active');
      }
      lastScrollTop = st;
    });
	});
})(jQuery);

'use strict';

(function() {
  var btnsAll = document.querySelectorAll('.js-more-button');
  var btnsMob = document.querySelectorAll('.js-more-button-mob');
  var content;
  var atr;
  var hiddenItems;
  var btn;
  var text;
  var TABLET = 768;

  var show = function(btns) {
    for (var i = 0; i < btns.length; i += 1) {
      content = btns[i].parentNode.querySelector('.js-more-content');
      atr = parseInt(content.getAttribute('data-more'), 10);
      hiddenItems = content.querySelectorAll('.js-more-content > *:nth-child(n + ' + (atr + 1) + ')');
      for (var j = 0; j < hiddenItems.length; j += 1) {
        hiddenItems[j].classList.add('js-hidden');
      }

      btns[i].addEventListener('click', function(e) {
        e.preventDefault();
        btn = e.currentTarget;
        content = btn.parentNode.querySelector('.js-more-content');
        atr = parseInt(content.getAttribute('data-more'), 10);
        hiddenItems = content.querySelectorAll('.js-more-content > *:nth-child(n + ' + (atr + 1) + ')');
        console.log(hiddenItems);
        for (var j = 0; j < hiddenItems.length; j += 1) {
          hiddenItems[j].classList.toggle('js-hidden');
        }
        text = btn.textContent === 'Скрыть' ? 'Смотреть больше' : 'Скрыть';
        btn.textContent = text;
      })
    }
  };

  if (btnsAll.length) {
    show(btnsAll);
  }

  if(btnsMob.length) {
    var showMob = function() {
      if(parseInt(window.innerWidth, 10) < 768) {
        show(btnsMob);
      }
    };

    showMob();

    window.addEventListener('resize', function() {
      showMob();
    });
  }

})();

'use strict';

(function() {

  var textSlider = new Swiper('.js-about-slider-text', {
    slidesPerView: 1,
    touchRatio: 0,
    thumbs: {
      swiper: imageSlider,
    },
    navigation: {
      nextEl: '.js-about-slider-next',
      prevEl: '.js-about-slider-prev',
      clickable: true,
      disabledClass: 'disabled',
    },
  });

  var imageSlider = undefined;

  function initSlider() {
    var screenWidth = parseInt(window.innerWidth, 10);
    if ( (screenWidth > (767)) && (imageSlider == undefined)) {
      var imageSlider = new Swiper('.js-about-slider-image', {
        slidesPerView: 1,
        watchSlidesVisibility: true,
        touchRatio: 0,
        watchSlidesProgress: true,
        navigation: {
          nextEl: '.js-about-slider-next',
          prevEl: '.js-about-slider-prev',
          clickable: true,
          disabledClass: 'disabled',
        },
      });
    } else if ((screenWidth < 768) && (imageSlider != undefined)) {
      imageSlider.destroy();
      imageSlider = undefined;
    }
  }

  initSlider();

  window.addEventListener('resize', function() {
    initSlider();
  });

})();

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
      767: {
        slidesPerView: 0,
        pagination: {
          el: '.js-main-slider-pagination',
          clickable: true,
        },
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
    breakpoints: {
      767: {
        thumbs: {
          swiper: '',
        },
        pagination: {
          el: '.js-main-slider-pagination',
          clickable: true,
        },
      }
    }
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

  if(btns.length){
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
        video.src = 'https://www.youtube.com/embed/' + atr+ '?enablejsapi=1&autoplay=1';
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
