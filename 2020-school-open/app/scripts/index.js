import { renderResult, renderNotice } from '@/template';

const wuhan2020 = data => {
  renderNotice(data);

  const searchObj = {
    textEl: document.querySelector('.search-text'),
    btnEl: document.querySelector('.search-btn')
  };

  const search = keyword => {
    let reg = new RegExp(`%([0-9]+):${keyword}%`);
    let result = reg.exec(JSON.stringify(data));
    renderResult(result ? data[result[1]] : false);
  };

  searchObj.btnEl.addEventListener('click', () => {
    search(searchObj.textEl.value.trim());
  });
};

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
// let url = '/now/sh-2019-ncov/dist/data/wuhan2020.json'; // test
// let url = '/schoolopens/2020index/data/wuhan2020.json'; // yiban
ajax(url, wuhan2020);
