require('../components/log-in.jsx');
require('../components/sign-in.jsx');
require('../components/top-navigation-animation.jsx');


// 登录注册
var $loginContainer = $('.log-container');
if ($('.cd-form').length > 0) floatLabels();
  function floatLabels() {
    $loginContainer.find('.cd-label').next().each(
      function () {
        var $singleInput = $(this);
        $singleInput.on('change keyup',function () {
          ($singleInput.val() == '') ? $singleInput.prev('.cd-label').removeClass('float') : $singleInput.prev('.cd-label').addClass('float');
        });
      }
    );
  }

  $('.hide-password').on('click',function () {
    var inputAttr = $(this).prev('input');
    (inputAttr.attr('type') == 'password') ? inputAttr.attr('type','text') : inputAttr.attr('type','password');
    ('Hide' == $(this).text()) ?  $(this).text('Show') : $(this).text('Hide');
  });

  $('.scrollheader').find('.cd-log').on('click',function (event) {
    event.preventDefault();
    $(event.target).is('#sign-in') ? signSelected() : logSelected();
  });

  $('.login-title h3').on('click',function () {
    logSelected();
  });
  $('.signin-title h3').on('click',function () {
    signSelected();
  });
  $('.close-button').on('click',function (e) {
    e.preventDefault();
    $('.fullscreen').removeClass('selected');
  });
  $(document).keyup(function (key) {
    if(key.which == '27') $('.fullscreen').removeClass('selected');
  });


  function signSelected() {
    $('.fullscreen').addClass('dialog-animation');
    $('.fullscreen').addClass('selected');
    $('.signin-title h3').addClass('selected');
    $('.login-title h3').removeClass('selected');
    $('.cd-signin').removeClass('hidden');
    $('.cd-login').addClass('hidden');
  }

  function logSelected() {
    $('.fullscreen').addClass('dialog-animation');
    $('.fullscreen').addClass('selected');
    $('.signin-title h3').removeClass('selected');
    $('.login-title h3').addClass('selected');
    $('.cd-signin').addClass('hidden');
    $('.cd-login').removeClass('hidden');
  }

  //密码再次输入确认
  $(document).ready(function () {
    $('#regist-btn').on('click',function () {
      var repassword = $('.cd-signin').find('#cd-repassword').val(),
      password = $('.cd-signin').find('#cd-password').val(),
      repassWarning = $('.cd-signin').find('.err-warning repassword'),
      passordWarning = $('.cd-signin').find('.err-warning passord');

      if (password == null || password.trim() == '') {
        passordWarning.text('密码不能为空');
        return;
      }else if (password.length < 6 || password.length > 20) {
        passordWarning.text('你输入的密码不符合要求');
        return;
      }else if(repassword == null || repassword.trim() == '') {
        repassWarning.text('请确认密码');
        return;
      }else if (repassword !== password) {
        repassWarning.text('两次密码输入不一致');
        return;
      }
      $('.cd-signin').submit();
    });
  });
