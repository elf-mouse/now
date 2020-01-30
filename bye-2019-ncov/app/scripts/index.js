import '@/adapter';
import $ from 'zeptoSrc/zepto';
import 'zeptoSrc/event';
import 'zeptoSrc/touch';

var r = Math.floor(Math.random() * 19);
// console.log(r);
//答题流程 var
var travel = {
  grade: 0,
  tu: '%host%/news/zt2020/2020wuhan/disinfect/images/dis200.jpg',
  des: '预防新型肺炎的消毒知识，请收藏转发给家人朋友',
  test: [
    {
      ques: '电吹风对着吹三十秒可以消毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 1,
      tip:
        '正确答案：B 不可以。<br/>新型冠状病毒对热敏感，但需要在56摄氏度下，30分钟，才能灭活，所以这种说法是错误的。',
      tip_img: ''
    },
    {
      ques: '84消毒液喷洒空气可以消毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 1,
      tip:
        '正确答案：B 不可以。<br/>84消毒液用于物体表面的消毒，并且要达到一定的浓度才能取得好的效果。',
      tip_img: ''
    },
    {
      ques: '点艾灸可以消毒杀菌？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 1,
      tip:
        '正确答案：B 不可以。<br/>新型冠状病毒感染的肺炎诊疗方案(试行第三版)中明确指出新型冠状病毒对热敏感，56℃30分钟、乙醚、75%乙醇、含氯消毒剂、过氧乙酸和氯仿等脂溶剂均可有效灭活病毒。并没有关于艾灸的推荐，所以是不可以的。',
      tip_img: ''
    },
    {
      ques: '紫外线消毒灯可以杀灭新型冠状肺炎病毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 0,
      tip:
        '正确答案：A 可以。<br/>北京市关于呼吸道传播性疾病（新型冠状病毒感染的肺炎）环境清洁消毒建议（试行）指出:病人检查后，感染疾病科医生或护士指导，检查床及周围表面使用消毒剂喷雾消毒，作用30min，技术员对控制台进行常规物表消毒；全体人员离开后，放射科技术员打开紫外线灯对检查室进行消毒，消毒时间>30min。',
      tip_img: ''
    },
    {
      ques: '用过的口罩可以直接用84消毒液浸泡消毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 1,
      tip:
        '正确答案：B 不可以。<br/>目前可以用于防护病毒的口罩是外科口罩和医用防护口罩，这几种口罩都是一次性的，遇到水后，防护效力就会减弱或消失，所以是不可以的。',
      tip_img: ''
    },
    {
      ques: '白醋加热雾化有消毒预防效果？',
      flag: '',
      img: '',
      item: ['有', '没有'],
      ans: 1,
      tip:
        '正确答案：B 没有。<br/>针对新型冠状病毒目前只推荐56℃30分钟、乙醚、75%乙醇、含氯消毒剂、过氧乙酸和氯仿等消毒的方法。',
      tip_img: ''
    },
    {
      ques: '酒精放入加湿器，喷出的雾气可以进行房间消毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 1,
      tip:
        '正确答案：B 不可以<br/>只有75%的酒精才可以杀灭新型冠状病毒，放入加湿器是达不到这样的浓度的。即使能达到也不主张应用，因为高浓度挥发的酒精会对人体的气管产生刺激，导致不良后果。',
      tip_img: ''
    },
    {
      ques: '超市或者药店买的含氯消毒液可以消毒新型肺炎病毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 0,
      tip:
        '正确答案：A 可以<br/>含氯消毒液是可以杀灭新型状病毒的，但要达到一定的浓度。',
      tip_img: ''
    },
    {
      ques: '在手上喷洒医用酒精可以起到消毒效果？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 0,
      tip: '正确答案：A 可以<br/>只限于75%的酒精可以杀灭新型冠状病毒。',
      tip_img: ''
    },
    {
      ques: '含氯消毒粉对新型冠状病毒有预防作用？',
      flag: '',
      img: '',
      item: ['有', '没有'],
      ans: 0,
      tip:
        '正确答案：A 有<br/>含氯消毒粉是可以杀灭新型冠状病毒的，需要做成水剂使用，氯的有效浓度要达到400-700mg/L，主要用于地面和物体表面的消毒。',
      tip_img: ''
    },
    {
      ques: '双氧水消毒对肺炎病毒有用？',
      flag: '',
      img: '',
      item: ['有', '没有'],
      ans: 0,
      tip:
        '正确答案：A 有<br/>双氧水是过氧化物的一种，对新型冠状病毒是有效的，但3%的双氧水通常用于伤口清洁，而不用于环境消毒。',
      tip_img: ''
    },
    {
      ques: '火碱能用来抗新型冠状病毒肺炎？',
      flag: '',
      img: '',
      item: ['能', '不能'],
      ans: 1,
      tip:
        '正确答案：B 不能<br/>火碱成分为氢氧化钠，是强碱，具有强腐蚀性。可用于杀灭新型冠状病毒的化学消毒剂包括：乙醚、75%乙醇、含氯消毒剂、过氧乙酸和氯仿，并不包括氢氧化钠，所以是不可以的。',
      tip_img: ''
    },
    {
      ques: '花露水含有酒精，可以消毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 1,
      tip:
        '正确答案：B 不可以<br/>只有75%的酒精才可以杀灭新型冠状病毒，花露水中的酒精含量微乎其微，是不可以用于消毒的。',
      tip_img: ''
    },
    {
      ques: '可以用喝的白酒稀释替代酒精消毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 1,
      tip:
        '正确答案：B 不可以<br/>酒精作为医用消毒剂是要达到一定的浓度的，只有达到特定的浓度才具有杀灭病毒的作用，白酒稀释很难达到标准的有效浓度。',
      tip_img: ''
    },
    {
      ques: '白醋煮沸可以消毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 1,
      tip:
        '正确答案：B 不可以<br/>醋中的主要成分是醋酸，也就是乙酸。过氧乙酸是可以杀灭新型冠状病毒的，但乙酸不是过氧乙酸，这是不同的两种物质。',
      tip_img: ''
    },
    {
      ques: '盐水漱口可以消毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 1,
      tip:
        '正确答案：B 不可以<br/>口腔医学研究表明，不论是用清水、还是用盐水漱口，对暂时减少口腔细菌的数量是有效的。作用原理是通过漱口减少口腔中病原微生物的定植，而不是杀灭病原微生物。消毒是指杀死病原微生物、但不一定能杀死细菌芽孢的方法。',
      tip_img: ''
    },
    {
      ques: '风油精能杀菌消毒？',
      flag: '',
      img: '',
      item: ['能', '不能'],
      ans: 1,
      tip:
        '正确答案：B 不能<br/>乙醚、75%乙醇、含氯消毒剂、过氧乙酸和氯仿是可以杀灭新型冠状病毒的，而风油精中没有有效杀灭病毒的成分。',
      tip_img: ''
    },
    {
      ques: '泡腾消毒片可以进行消毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 0,
      tip:
        '正确答案：A 可以<br/>含氯的泡腾消毒片是可以用于消毒的，它溶解于水中，配成一定浓度的消毒液是可以用于消毒的。',
      tip_img: ''
    },
    {
      ques: '95%的酒精消毒液可以预防新型冠状病毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 1,
      tip:
        '正确答案：B 不可以<br/>只有75%的酒精才可以用于针对新型冠状病毒的消毒，95%的酒精会凝固病原体表面的蛋白质，形成“盔甲”，反而不容易杀死病毒。',
      tip_img: ''
    },
    {
      ques: '电吹风对着吹三十秒可以消毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 1,
      tip:
        '正确答案：B 不可以。<br/>新型冠状病毒对热敏感，但需要在56摄氏度下，30分钟，才能灭活，所以这种说法是错误的。',
      tip_img: ''
    },
    {
      ques: '84消毒液喷洒空气可以消毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 1,
      tip:
        '正确答案：B 不可以。<br/>84消毒液用于物体表面的消毒，并且要达到一定的浓度才能取得好的效果。',
      tip_img: ''
    },
    {
      ques: '点艾灸可以消毒杀菌？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 1,
      tip:
        '正确答案：B 不可以。<br/>新型冠状病毒感染的肺炎诊疗方案(试行第三版)中明确指出新型冠状病毒对热敏感，56℃30分钟、乙醚、75%乙醇、含氯消毒剂、过氧乙酸和氯仿等脂溶剂均可有效灭活病毒。并没有关于艾灸的推荐，所以是不可以的。',
      tip_img: ''
    },
    {
      ques: '紫外线消毒灯可以杀灭新型冠状肺炎病毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 0,
      tip:
        '正确答案：A 可以。<br/>北京市关于呼吸道传播性疾病（新型冠状病毒感染的肺炎）环境清洁消毒建议（试行）指出:病人检查后，感染疾病科医生或护士指导，检查床及周围表面使用消毒剂喷雾消毒，作用30min，技术员对控制台进行常规物表消毒；全体人员离开后，放射科技术员打开紫外线灯对检查室进行消毒，消毒时间>30min。',
      tip_img: ''
    },
    {
      ques: '用过的口罩可以直接用84消毒液浸泡消毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 1,
      tip:
        '正确答案：B 不可以。<br/>目前可以用于防护病毒的口罩是外科口罩和医用防护口罩，这几种口罩都是一次性的，遇到水后，防护效力就会减弱或消失，所以是不可以的。',
      tip_img: ''
    },
    {
      ques: '白醋加热雾化有消毒预防效果？',
      flag: '',
      img: '',
      item: ['有', '没有'],
      ans: 1,
      tip:
        '正确答案：B 没有。<br/>针对新型冠状病毒目前只推荐56℃30分钟、乙醚、75%乙醇、含氯消毒剂、过氧乙酸和氯仿等消毒的方法。',
      tip_img: ''
    },
    {
      ques: '酒精放入加湿器，喷出的雾气可以进行房间消毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 1,
      tip:
        '正确答案：B 不可以<br/>只有75%的酒精才可以杀灭新型冠状病毒，放入加湿器是达不到这样的浓度的。即使能达到也不主张应用，因为高浓度挥发的酒精会对人体的气管产生刺激，导致不良后果。',
      tip_img: ''
    },
    {
      ques: '超市或者药店买的含氯消毒液可以消毒新型肺炎病毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 0,
      tip:
        '正确答案：A 可以<br/>含氯消毒液是可以杀灭新型状病毒的，但要达到一定的浓度。',
      tip_img: ''
    },
    {
      ques: '在手上喷洒医用酒精可以起到消毒效果？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 0,
      tip: '正确答案：A 可以<br/>只限于75%的酒精可以杀灭新型冠状病毒。',
      tip_img: ''
    },
    {
      ques: '含氯消毒粉对新型冠状病毒有预防作用？',
      flag: '',
      img: '',
      item: ['有', '没有'],
      ans: 0,
      tip:
        '正确答案：A 有<br/>含氯消毒粉是可以杀灭新型冠状病毒的，需要做成水剂使用，氯的有效浓度要达到400-700mg/L，主要用于地面和物体表面的消毒。',
      tip_img: ''
    },
    {
      ques: '双氧水消毒对肺炎病毒有用？',
      flag: '',
      img: '',
      item: ['有', '没有'],
      ans: 0,
      tip:
        '正确答案：A 有<br/>双氧水是过氧化物的一种，对新型冠状病毒是有效的，但3%的双氧水通常用于伤口清洁，而不用于环境消毒。',
      tip_img: ''
    },
    {
      ques: '火碱能用来抗新型冠状病毒肺炎？',
      flag: '',
      img: '',
      item: ['能', '不能'],
      ans: 1,
      tip:
        '正确答案：B 不能<br/>火碱成分为氢氧化钠，是强碱，具有强腐蚀性。可用于杀灭新型冠状病毒的化学消毒剂包括：乙醚、75%乙醇、含氯消毒剂、过氧乙酸和氯仿，并不包括氢氧化钠，所以是不可以的。',
      tip_img: ''
    },
    {
      ques: '花露水含有酒精，可以消毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 1,
      tip:
        '正确答案：B 不可以<br/>只有75%的酒精才可以杀灭新型冠状病毒，花露水中的酒精含量微乎其微，是不可以用于消毒的。',
      tip_img: ''
    },
    {
      ques: '可以用喝的白酒稀释替代酒精消毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 1,
      tip:
        '正确答案：B 不可以<br/>酒精作为医用消毒剂是要达到一定的浓度的，只有达到特定的浓度才具有杀灭病毒的作用，白酒稀释很难达到标准的有效浓度。',
      tip_img: ''
    },
    {
      ques: '白醋煮沸可以消毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 1,
      tip:
        '正确答案：B 不可以<br/>醋中的主要成分是醋酸，也就是乙酸。过氧乙酸是可以杀灭新型冠状病毒的，但乙酸不是过氧乙酸，这是不同的两种物质。',
      tip_img: ''
    },
    {
      ques: '盐水漱口可以消毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 1,
      tip:
        '正确答案：B 不可以<br/>口腔医学研究表明，不论是用清水、还是用盐水漱口，对暂时减少口腔细菌的数量是有效的。作用原理是通过漱口减少口腔中病原微生物的定植，而不是杀灭病原微生物。消毒是指杀死病原微生物、但不一定能杀死细菌芽孢的方法。',
      tip_img: ''
    },
    {
      ques: '风油精能杀菌消毒？',
      flag: '',
      img: '',
      item: ['能', '不能'],
      ans: 1,
      tip:
        '正确答案：B 不能<br/>乙醚、75%乙醇、含氯消毒剂、过氧乙酸和氯仿是可以杀灭新型冠状病毒的，而风油精中没有有效杀灭病毒的成分。',
      tip_img: ''
    },
    {
      ques: '泡腾消毒片可以进行消毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 0,
      tip:
        '正确答案：A 可以<br/>含氯的泡腾消毒片是可以用于消毒的，它溶解于水中，配成一定浓度的消毒液是可以用于消毒的。',
      tip_img: ''
    },
    {
      ques: '95%的酒精消毒液可以预防新型冠状病毒？',
      flag: '',
      img: '',
      item: ['可以', '不可以'],
      ans: 1,
      tip:
        '正确答案：B 不可以<br/>只有75%的酒精才可以用于针对新型冠状病毒的消毒，95%的酒精会凝固病原体表面的蛋白质，形成“盔甲”，反而不容易杀死病毒。',
      tip_img: ''
    }
  ],
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
  go: function(i, s) {
    s = r;
    var num = 11;
    $('.ans').css({ 'background-color': '#106e62' });
    $('.circle1').css({ 'background-color': '#106e62' });
    $('.ans1').css({ color: '#ffffff' });
    $('.choice').css({ color: '#ffffff' });
    if (i == num) $('#item').html('答题结束');
    //题目数量
    else $('#item').html('继续答题');

    $('.ques_p').html(travel.test[i + s].ques);
    $('.ques_p').css('background-image', 'url(' + travel.test[i + s].img + ')');

    for (var j = 0; j < 2; j++) {
      $('.ans1')
        .eq(j)
        .html(travel.test[i + s].item[j]);
      //为每个选项设置事件
      if (travel.test[i + s].ans == j) message(1);
      else message(0);

      function message(t) {
        $('.ans')
          .eq(j)
          .off('tap');
        $('.ans')
          .eq(j)
          .on('tap', function() {
            //对弹出面板设置
            $(this).css({ 'background-color': '#34a25d' });
            $(this)
              .children()
              .eq(0)
              .css({ 'background-color': '#34a25d' });
            $(this)
              .children()
              .eq(0)
              .children()
              .css({ color: '#ffffff' });
            $(this)
              .children()
              .eq(1)
              .children()
              .css({ color: '#ffffff' });
            if (t == 1) {
              $('.sh_an').html('正确！');
              travel.grade = travel.grade + 10;
              // console.log(travel.grade);
            } else {
              $('.sh_an').html('答错了！');
            }
            setTimeout(function() {
              $('.tip_btn').css({ 'background-color': '#118b40' });
              $('.tip_btn')
                .children()
                .eq(0)
                .children()
                .attr({
                  src: '%host%/news/2015/travel/earth1.png'
                });
              $('.tip_btn')
                .children()
                .eq(1)
                .children()
                .css({ color: '#fff' });
              $('.sh_img').html(travel.test[i + s].ques);
              $('.sh_tip').html(travel.test[i + s].tip);
              $('.shelter').show(300);
              $('.shelter').addClass('fadeIn');
              $('.sh_back').addClass('rotateIn');
              $('.tip_btn').off('tap');
              $('.tip_btn').on('tap', function() {
                $(this).css({ 'background-color': '#118b40' });
                $(this)
                  .children()
                  .eq(0)
                  .children()
                  .attr({
                    src: '%host%/news/2015/travel/earth2.png'
                  });
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
                if (i != num) travel.go(i + 1);
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
      $('.re_p').html('答对' + g + '题!<br/>' + travel.result[gindex].asses);
      $('.re_p').addClass('large');
    }, 400);
  }
};
//欢迎页进入答题

$('.wel_btn').on('tap', function() {
  $(this).css({ 'background-color': '#34a25d' });
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
  $(this).css({ 'background-color': '#34a25d' });
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
  $(this).css({ 'background-color': '#34a25d' });
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
    .css({ color: '#34a25d' });
});
