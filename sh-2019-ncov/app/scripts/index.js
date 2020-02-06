import echarts from 'echarts';
import 'echarts/map/js/province/shanghai';
// import data from '../data/wuhan2020.json';

function wuhan2020(data) {
  let option = {
    title: {
      text: '上海 2019-nCoV 疫情分布',
      subtext: '数据来自“上海发布”（注：仅包含本市常住人口168例）'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}<br/>确诊病例：{c}'
    },
    visualMap: {
      min: 0,
      max: 50,
      text: ['高', '低'],
      realtime: false,
      calculable: true,
      inRange: {
        color: ['white', 'yellow', 'orangered']
      }
    },
    series: [
      {
        name: '本市 2019-nCoV 确诊病例',
        type: 'map',
        map: '上海',
        label: {
          show: false,
          formatter: function(data) {
            return data.name.substr(0, 2);
          }
        },
        data
      }
    ]
  };

  const myChart = echarts.init(document.getElementById('app'));
  myChart.setOption(option);
}

function ajax(url, success) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      return success(data);
    }
  };
  xhr.open('GET', url);
  xhr.send();
}

// let url = '/data/wuhan2020.json'; // local
let url = '/now/sh-2019-ncov/dist/data/wuhan2020.json'; // remote
ajax(url, wuhan2020);
