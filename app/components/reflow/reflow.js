(function(window, angular, $) {

'use strict';

angular.module('reflow', [])
.factory('reflow', reflow);


function reflow() {
  var factory = {};

  var cart = $('#cart');
  var content = $('#main-content');

  factory.reflow = function(width) {
    var basis = 100 / Math.floor(width / 320);
    $('.tile').css('flex', '0 0 ' + basis + '%');
    $('.tile-2x').css('flex', '0 0 ' + basis * 2 + '%');
  };

  factory.register = function() {
    $(window).bind('resize', function() {
      factory.reflow(content.width());
    });

    cart.watch({
      properties: 'width',
      callback: function(data, i) {
        factory.reflow(content.width());
      }
    });
  };

  return factory;
}

})(window, window.angular, window.jQuery);
