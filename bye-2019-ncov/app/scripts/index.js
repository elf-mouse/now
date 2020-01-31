// import '@/adapter';
import $ from 'zeptoSrc/zepto';
import 'zeptoSrc/event';
import 'zeptoSrc/touch';
import data from './data';

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const questions = shuffle(data).slice(0, 10);
const questionsCount = questions.length;

//答题流程 var
var travel = {
  grade: 0,
  tu: '',
  des: '防疫知识问答，请收藏转发给家人朋友',
  test: questions,
  result: [
    {
      grade: 0,
      label: '0',
      asses: '全答错了，你是不是还没有开始消毒？',
      com: '我竟然一道都没对，要不你来试试？'
    },
    {
      grade: 1,
      label: '1',
      asses: '错误率极高！哪种方式可以有效消毒，你学会了吗？',
      com: '我测试不达标，再做套题学习一下'
    },
    {
      grade: 2,
      label: '2',
      asses: '不容乐观呀，错误率过半，需要加把劲！',
      com: '这些消毒知识，不允许只有我一个人知道'
    },
    {
      grade: 3,
      label: '3',
      asses: '还不错哦，正确率过半，需要再接再厉！',
      com: '这些消毒知识，不允许只有我一个人知道'
    },
    {
      grade: 4,
      label: '4',
      asses: '正确率极高！赶紧把你会的知识安利给家人朋友',
      com: '你的家人朋友都知道这些消毒知识吗？'
    },
    {
      grade: 5,
      label: '5',
      asses: '全答对了！赶紧把你会的知识安利给家人朋友',
      com: '你的家人朋友都知道这些消毒知识吗？'
    }
  ],
  go: function(i) {
    $('.ans').hide();
    $('.ans').css({ 'background-color': '#002d69' });
    $('.circle1').css({ 'background-color': '#002d69' });
    $('.ans1').css({ color: '#ffffff' });
    $('.choice').css({ color: '#ffffff' });
    if (i === questionsCount - 1) $('#item').html('答题结束');
    //题目数量
    else $('#item').html('继续答题');
    $('.ques_p').html(travel.test[i].ques);
    // $('.ques_p').css('background-image', 'url(' + travel.test[i].img + ')');

    for (var j = 0; j < travel.test[i].item.length; j++) {
      $('.ans')
        .eq(j)
        .show();
      $('.ans1')
        .eq(j)
        .html(travel.test[i].item[j]);

      //为每个选项设置事件
      if (travel.test[i].ans == j) message(1);
      else message(0);

      function message(t) {
        $('.ans')
          .eq(j)
          .off('tap');
        $('.ans')
          .eq(j)
          .on('tap', function() {
            //对弹出面板设置
            $(this).css({ 'background-color': '#7ee9ff' });
            $(this)
              .children()
              .eq(0)
              .css({ 'background-color': '#7ee9ff' });
            $(this)
              .children()
              .eq(0)
              .children()
              .css({ color: '#002d69' });
            $(this)
              .children()
              .eq(1)
              .children()
              .css({ color: '#002d69' });
            if (t == 1) {
              $('.sh_an').html('正确！');
              travel.grade = travel.grade + 10;
              // console.log(travel.grade);
            } else {
              $('.sh_an').html('答错了！');
            }
            setTimeout(function() {
              // $('.tip_btn').css({ 'background-color': '#118b40' });
              // $('.tip_btn')
              //   .children()
              //   .eq(0)
              //   .children()
              //   .attr({
              //     src: '%host%/news/2015/travel/earth1.png'
              //   });
              // $('.tip_btn')
              //   .children()
              //   .eq(1)
              //   .children()
              //   .css({ color: '#fff' });
              $('.sh_img').html(travel.test[i].ques);
              $('.sh_tip').html(travel.test[i].tip);
              $('.shelter').show(300);
              $('.shelter').addClass('fadeIn');
              $('.sh_back').addClass('rotateIn');
              $('.tip_btn').off('tap');
              $('.tip_btn').on('tap', function() {
                // $(this).css({ 'background-color': '#118b40' });
                // $(this)
                //   .children()
                //   .eq(0)
                //   .children()
                //   .attr({
                //     src: '%host%/news/2015/travel/earth2.png'
                //   });
                $(this)
                  .children()
                  .eq(1)
                  .children()
                  .css({ color: '#fff' });
                $('.sh_back').addClass('rotateOut');
                $('.shelter').addClass('fadeOut');
                setTimeout(function() {
                  $('.shelter').hide();
                  $('.shelter').removeClass('fadeOut');
                  $('.shelter').removeClass('fadeIn');
                  $('.sh_back').removeClass('rotateIn');
                  $('.sh_back').removeClass('rotateOut');
                }, 700);
                if (i !== questionsCount - 1) travel.go(i + 1);
                else {
                  $('.content').hide();
                  $('.result').show();
                  travel.conclude();
                }
              });
            }, 500);
          });
      }
    }
  },
  conclude: function() {
    var grade = travel.grade;
    var g = grade / 10;
    var gindex;
    if (g > 11) {
      gindex = 5;
    } else {
      gindex = Math.ceil(g / 3);
      // console.log(g + '----' + gindex);
    }
    travel.des = travel.result[gindex].com;
    setTimeout(function() {
      // $('.re_p').html('答对' + g + '题!<br/>' + travel.result[gindex].asses);
      $('.re_p').html(`<b>答题完毕，答对${g}题。</b><br/>科学防护，从我做起！`);

      $('.re_p').addClass('large');
    }, 400);
  }
};
//欢迎页进入答题

$('.wel_btn').on('tap', function() {
  $(this).css({ 'background-color': '#d2c665' });
  $(this)
    .children()
    .eq(0)
    .children()
    .attr({ src: '%host%/news/2015/travel/earth2.png' });
  $(this)
    .children()
    .eq(1)
    .children()
    .css({ color: '#fad6b2' });
  setTimeout(function() {
    $('.welcome').hide();
    $('.content').show();
    $('.content').addClass('fade');
    travel.go(0);
  }, 400);
});

//重玩，分享按钮
$('#re_play').on('tap', function() {
  $(this).css({ 'background-color': '#7ee9ff' });
  $(this)
    .children()
    .eq(0)
    .children()
    .attr({ src: '%host%/news/2015/travel/earth3.png' });
  $(this)
    .children()
    .eq(1)
    .children()
    .css({ color: '#036eb8' });
  window.location.reload();
});
$('#share').on('tap', function() {
  $(this).css({ 'background-color': '#7ee9ff' });
  $(this)
    .children()
    .eq(0)
    .children()
    .attr({ src: '%host%/news/2015/travel/earth5.png' });
  $(this)
    .children()
    .eq(1)
    .children()
    .css({ color: '#036eb8' });
  mShare.init();
});
//share面板
$('.share').on('tap', function() {
  $(this).hide();
  $('#share')
    .children()
    .eq(0)
    .children()
    .attr({ src: '%host%/news/2015/travel/earth4.png' });
  $('#share')
    .children()
    .eq(1)
    .children()
    .css({ color: '#7ee9ff' });
});
