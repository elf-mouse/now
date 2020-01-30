import $ from 'zeptoSrc/zepto';

$(document).ready(function() {
  //适配
  function filter() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var width = w * 0.1065;
    $('.ans').height(width);
    $('.wel_btn').height(width);
    $('.tip_btn').height(width);
    $('.re_btn').height(width);
    if (h / w < 1.444) {
      $('.question').css({ top: '0%' });
      $('.ques_p').css({ margin_top: '70%' });
      $('.sh_back').css({ height: '90%', top: '5%' });
      if (h / w < 1.295) {
        $('.question').css({ width: '70%', 'margin-left': '15%' });
        $('.ques_p').css({ 'margin-top': '60%' });
        $('.answer').css({ 'margin-top': '3%' });
      }
    }
    while (w > 900) {
      var w = window.innerWidth;
      var h = window.innerHeight;
      var width = w * 0.1065;
      $('.ans').height(width);
      $('.wel_btn').height(width);
      $('.tip_btn').height(width);
      $('.re_btn').height(width);
      if (h / w < 1.46) {
        $('.question').css({ top: '0%' });
        $('.ques_p').css({ margin_top: '70%' });
        $('.sh_back').css({ height: '90%', top: '9%' });
      }
    }
  }
  filter();
});
