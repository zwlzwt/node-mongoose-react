require('../components/menu-list.jsx');
require('../css/menu-list.css');
// var $ = require('../../bower_components/jquery/dist/jquery');

$('.cd-nav-trigger').on('click',function (e) {
  e.preventDefault();
  $(this).toggleClass('menu-is-open');
  $('#menu-nav ul').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');
});
