(function($) {
	'use strict';
	$(function() {
    var btn;
    var btnsDropdown = $('.js-dropdown-button');

    if (btnsDropdown) {
      btnsDropdown.on('click', function(e){
        e.preventDefault();
        btn = $(this);
        btnsDropdown.not(btn).parents('.js-dropdown').removeClass('active');
        btn.parents('.js-dropdown').toggleClass('active');
      });
    }

	});
})(jQuery);
