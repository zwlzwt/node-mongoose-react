require('../css/reset.css');
require('../css/detail.css');


require('../components/top-navigation-animation.jsx');
require('../components/log-in.jsx');
require('../components/sign-in.jsx');
require('../components/back-to-top.jsx');
require('./log-in.js');
require('./menu-list.js');

var img = document.getElementById('cd-img1');
var img2 = document.getElementById('cd-img2');
var img3 = document.getElementById('cd-img3');
var img4 = document.getElementById('cd-img4');
img.src = require('../public/build1.jpg');
img2.src = require('../public/build2.jpg');
img3.src = require('../public/build3.jpg');
img4.src = require('../public/build4.jpg');

$(document).ready(function () {
  var $upComment = $('.cd-upComment').children('#cd-textarea');
  $upComment.on('change keyup', function () {
    $this = $(this);
    $this.val() == '' ? $this.prev().removeClass('float') : $this.prev().addClass('float');
  });

  $(window).on('scroll', function (){
    var position = 300;
    ($(this).scrollTop() > position) ? $("#back-to-top").addClass('is-visible') : $("#back-to-top").removeClass('is-visible');
    ($(this).scrollTop() > position) ? $('header').addClass('active') : $("header").removeClass('active');
  });

  $('.commentId').on('click', function () {
    var $this = $(this);
    var toId = $this.data('tid');
    var toCommentId = $this.data('cid');

    if ($('#toId').length > 0) {
      $('#toId').val(toId);
    }
    else {
      $('<input>').attr({
        type: 'hidden',
        id: 'toId',
        name:'comment[tid]',
        value: toId
      }).appendTo('.cd-upComment');
    }

    if ($('#commentId').length > 0) {
      $('#commentId').val(toCommentId);
    }
    else {
      $('<input>').attr({
        type: 'hidden',
        id: 'commentId',
        name:'comment[cid]',
        value: toCommentId
      }).appendTo('.cd-upComment');
    }
  });
});
