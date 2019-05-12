'use strict';

(function() {

  var tabs = document.querySelector('.js-tabs');

  if(tabs) {
    var btns = tabs.querySelectorAll('.js-button-tabs');
    var contents = tabs.querySelectorAll('.js-content-tabs');

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function (e) {
        e.preventDefault();
        var tab = e.currentTarget;
        var atr = tab.getAttribute('data-tab');

        for (var j = 0; j < contents.length; j++) {
          contents[j].classList.remove('active');
        };

        for (var j = 0; j < btns.length; j++) {
          btns[j].classList.remove('active');
        };

        tab.classList.add('active');
        document.querySelector("." + atr).classList.add('active');
      });
    }
  }

})();
