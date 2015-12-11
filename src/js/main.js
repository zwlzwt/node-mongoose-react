require("../css/reset.css");
require("../css/mainstyle.css");




require('../components/back-to-top.jsx');
require('../components/top-navigation-animation.jsx');
require('../components/main-detail-01.jsx');
require('../components/main-detail-02.jsx');
require('../components/main-detail-03.jsx');
require('./log-in.js');


$(document).ready(function () {
  var isLateralNavAnimating = false;
  var $cdSelected = $('.cd-side-navigation a');
  var $cover = $('.cd-side-navigation').find('.cd-cover');
  var $navigationSvg = $('.cd-side-navigation li');
  var $navigationWrapper = $('.cd-navigation-wrapper');

  $('.cd-meun-trigger').on('click', function(event){
	event.preventDefault();
	//stop if nav animation is running
	if( !isLateralNavAnimating ) {
		// if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true;

		$('body').toggleClass('navigation-is-open');
		$navigationWrapper.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			//animation is over 每次动画结束出发事件webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend
			isLateralNavAnimating = false;
		});
	}
});


  $cdSelected.on('click',function (e) {
    e.preventDefault();
    $('body').removeClass('navigation-is-open');
     smoothScroll($(this.hash));
     // 注意hash的用法返回一个href后面带＃的字符串，i.e：'#section1'
     var seletedPosition = $(this).parent().index(),
     $navigationSvgItem = $navigationSvg.eq(seletedPosition);
     updateSliderNavigation($navigationWrapper,seletedPosition);
  });

// 更新新的被点图标
  function updateSliderNavigation(pagination, n) {
		var navigationDot = pagination.find('.selected');
		navigationDot.removeClass('selected');
		pagination.find('li').eq(n).addClass('selected');
	}



  // 翻页动画
  function smoothScroll(target) {
    $('body').animate(
      {'scrollTop':target.offset().top},
      300
    );
  }

  $(window).on('scroll', function (){
      var position = 300;
  });

  // 滚动页面动画
  $(window).on('scroll', function (){
    var position = 300;
    ($(this).scrollTop() > position) ? $("#back-to-top").addClass('is-visible') : $("#back-to-top").removeClass('is-visible');
    ($(this).scrollTop() > position) ? $('header').addClass('active') : $("header").removeClass('active');
    scrollSection();
  });

  function scrollSection(){
    var contentSection = $('.cd-section');
    contentSection.each(function () {
      var $this = $(this);
      var activeCoverIndex = $('.cd-selected a[href="#'+$this.attr('id')+'"]').data('number') - 1;
      if (( $this.offset().top - $(window).height()/2 <= $(window).scrollTop()) && ($this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop())) {
        $('.cd-selected').eq(activeCoverIndex).addClass('selected');
        $cover.removeClassPrefix('item').addClass('item-'+(activeCoverIndex+1));
      }
      else {
        $('.cd-selected').eq(activeCoverIndex).removeClass('selected');
      }
    });

  }

  // jQuery插件编写
    $.fn.removeClassPrefix = function (Prefix) {
      this.each(function (i, el) {
        var classes = el.className.split(" ").filter(function (c) {
          return c.lastIndexOf(Prefix, 0) !== 0;
        });
        el.className = $.trim(classes.join(" "));
      });
      return this;
    };
});
