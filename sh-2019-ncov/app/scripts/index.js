import echarts from 'echarts';
import 'echarts/map/js/province/shanghai';
// import data from '../data/wuhan2020.json';

let state = false;
const button = document.getElementById('switch');

const showDistrict = (myChart, { upToNow, data }) => {
  button.textContent = '状态分布';
  const total = data.map(item => item.value).reduce((acc, cur) => acc + cur);
  const max = Math.max(...data.map(item => item.value));

  let option = {
    title: {
      text: '上海 2019-nCoV 疫情区域分布',
      subtext: `截至${upToNow} | 来源“上海发布”（仅含常住人口${total}例）`
    },
    tooltip: {
      trigger: 'item',
      formatter: `{b}<br>确诊病例：{c}`
    },
    visualMap: {
      min: 0,
      max: max + 10,
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

  myChart.setOption(option);
};

const showStatus = (myChart, { upToNow, distribution }) => {
  button.textContent = '区域分布';

  let data = distribution;

  const total1 = data
    .slice(0, 1)
    .map(item => item.value)
    .reduce((acc, cur) => acc + cur);
  const total2 = data
    .slice(1)
    .map(item => item.value)
    .reduce((acc, cur) => acc + cur);
  const itemNames = data.map(item => item.name);

  let option = {
    title: {
      text: '上海 2019-nCoV 疫情状态分布',
      subtext: `截至${upToNow} | 来源“上海发布”`
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}：{d}%'
    },
    legend: {
      orient: 'vertical',
      bottom: 10,
      left: 10,
      selectedMode: false,
      // data: data.map(item => item.name),
      formatter: function(name) {
        let label = '';

        switch (name) {
          case itemNames[0]:
            label = `${name}：${data[0].value}`;
            break;
          case itemNames[1]:
            label = `${name}：${data[1].value}`;
            break;
          case itemNames[2]:
            label = `${name}：${data[2].value}`;
            break;
          case itemNames[3]:
            label = `${name}：${data[3].value}`;
            break;
          case itemNames[4]:
            label = `${name}：${data[4].value}`;
            break;
          case itemNames[5]:
            label = `${name}：${data[5].value}`;
            break;
          case '确诊病例':
            label = `${name}：${total2}`;
            break;
        }
        return label;
      }
    },
    series: [
      {
        type: 'pie',
        radius: '40%',
        center: ['50%', '40%'],
        label: {
          position: 'inner'
        },
        labelLine: {
          show: false
        },
        data: [
          { value: total1, name: '疑似病例' },
          { value: total2, name: '确诊病例' }
        ]
      },
      {
        type: 'pie',
        radius: ['60%', '90%'],
        center: ['50%', '40%'],
        label: false,
        data
      }
    ],
    color: [
      '#ff961e',
      '#f06061',
      '#ffd2a0',
      '#c91014',
      '#9c0a0d',
      '#65b379',
      '#87878b'
    ]
  };

  myChart.setOption(option);
};

function wuhan2020(data) {
  const myChart = echarts.init(document.getElementById('app'));

  button.addEventListener('click', () => {
    state = !state;

    myChart.clear();

    if (state) {
      showDistrict(myChart, data);
    } else {
      showStatus(myChart, data);
    }
  });

  if (state) {
    showDistrict(myChart, data);
  } else {
    showStatus(myChart, data);
  }
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

let url = '/data/wuhan2020.json'; // local
// let url = '/now/sh-2019-ncov/dist/data/wuhan2020.json'; // remote
ajax(url, wuhan2020);
