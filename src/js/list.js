require('../css/reset.css');
require('../css/list.css');
require('../css/list-content.css');

var mixItUp = require('../../bower_components/mixitup/src/jquery.mixitup.js');

require('../components/top-navigation-animation.jsx');
require('../components/log-in.jsx');
require('../components/sign-in.jsx');
require('../components/back-to-top.jsx');
require('./menu-list.js');
require('./log-in.js');



$(document).ready(function () {
  var $galleryItems = $('#cd-gallery-items').children('li');
  var $galleryNavigation = $('.cd-item-navigation a');
  var $voteNumber = $('.cd-item-info button');

  $(window).on('scroll', function (){
    var position = 300;
    ($(this).scrollTop() > position) ? $("#back-to-top").addClass('is-visible') : $("#back-to-top").removeClass('is-visible');
    ($(this).scrollTop() > position) ? $('header').addClass('active') : $("header").removeClass('active');
  });

  $galleryItems.hover(
    function () {
      $this = $(this).children('.cd-item-wrapper');
      showNavigation($this.siblings('nav').find('.cd-item-navigation'),$this);
    },
    function () {
      $this = $(this).children('.cd-item-wrapper');
			hideNavigation($this.siblings('nav').find('.cd-item-navigation').eq(0));
    });

  $galleryNavigation.on('click', function (e) {
    e.preventDefault();
    var navigationAnchor = $(this);
    var direction = navigationAnchor.text();
    var activeContainer = navigationAnchor.parents('nav').siblings('.cd-item-wrapper');

    ( direction=="Next") ? showNextSlide(activeContainer) : showPreviousSlide(activeContainer);
    showNavigation(navigationAnchor.parents('.cd-item-navigation'), activeContainer);
  });

  function showNextSlide(container) {
    var itemToHide = container.find('.cd-item-front'),
    itemToShow = container.find('.cd-item-middle'),
		itemMiddle = container.find('.cd-item-back');

    itemToHide.addClass('move-right').removeClass('cd-item-front').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function () {
      itemToHide.addClass('hidden');
    });
    itemToShow.addClass('cd-item-front').removeClass('cd-item-middle');
  	itemMiddle.addClass('cd-item-middle').removeClass('cd-item-back');
  }

  function showPreviousSlide(container) {
    var itemToMiddle = container.find('.cd-item-front'),
		itemToBack = container.find('.cd-item-middle'),
		itemToShow = container.find('.move-right').slice(-1);

  	itemToShow.removeClass('hidden').addClass('cd-item-front');
  	itemToMiddle.removeClass('cd-item-front').addClass('cd-item-middle');
  	itemToBack.removeClass('cd-item-middle').addClass('cd-item-back');

    var stop = setInterval(checkClass, 100);

  	function checkClass(){
  		if( !itemToShow.hasClass('hidden') ) {
  			itemToShow.removeClass('move-right');
  			window.clearInterval(stop);
  		}
  	}
  }

  function showNavigation(selector, container) {
    var nextActive = (container.find('.cd-item-middle').length) > 0 ? true :false,
    preActive = (container.children('li').eq(0).hasClass('cd-item-front')) ? false : true;
    nextActive ? selector.find('a').eq(1).addClass('visible') : selector.find('a').eq(1).removeClass('visible');
    preActive ? selector.find('a').eq(0).addClass('visible') : selector.find('a').eq(0).removeClass('visible');
  }

  function hideNavigation(navigation) {
  	navigation.find('a').removeClass('visible');
  }

  //sort application
  var filterTabPlaceholder = $('.cd-tab-filter .placeholder a'),
  filterplaceholderVaule = '请选择',
  filterplaceholdertext = filterTabPlaceholder.text();

  $('.cd-tab-filter li').on('click', function (event) {
    var selectFilter = $(event.target).data('type');

    if ( $(event.target).is(filterTabPlaceholder) ) {
      (filterplaceholderVaule == filterTabPlaceholder.text()) ? filterTabPlaceholder.text(filterplaceholdertext) : filterTabPlaceholder.text(filterplaceholderVaule);
      $('.cd-tab-filter').toggleClass('is-open');
    }
    else {
      $('.cd-tab-filter').removeClass('is-open');
      filterTabPlaceholder.text($(event.target).text()).data('type', selectFilter);
      filterplaceholdertext = $(event.target).text();

      $('.cd-tab-filter .selected').removeClass('selected');
			$(event.target).addClass('selected');
    }
  });

  //点赞排序
  var empty = [];
  for (var i = 0; i < $galleryItems.length; i++) {
    var voteCount = $galleryItems.eq(i).find('#vote').text();
    var item = {title: $galleryItems.eq(i), vote: voteCount};
    empty.push(item);
    empty.sort(item);
    empty.sort(function (a, b) {
      return b.vote - a.vote;
    });
  }
  console.log(empty);
  empty.forEach(function (itemObject, index) {
    var title = itemObject.title;
    console.log(title);
    title.attr('data-myorder', index + 1);
  });

  //时间排序 根据后台录入时间后台排序，设置default


  //mixitup设置
  $('#cd-gallery-items').mixItUp({
    animation: {
      effects: 'stagger',
      easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      duration: 450,
      staggerSequence: function (i) {
        return (2*i) - (5*((i/3) - ((1/3) * (i%3))));
      }
    }
  });




  //ajax vote
  $voteNumber.on('click', function (e) {
    var target = $(e.target);
    var id = target.data("id");
    $.ajax({
      url: '/api/vote',
      type: 'PUT',
      data: {
        id: id
      },
      cache: false,
      dataType: 'json',
      success: function (doc) {
        target.text(doc.vote);
      },
      error: function () {
        target.parents('.cd-item-info').append('<span>请登录哦!</span>');
      }
    });
  });
});
