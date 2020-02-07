import { noResultMessage, NOTICE_COUNT } from '@/config';

const resultEl = document.querySelector('.result');
const noticeListEl = document.querySelector('.notice-list');

const renderResult = data => {
  resultEl.innerHTML = data
    ? `<div>
    <span class="school-name">${data.name}</span></div>
    <div>/ <span class="school-time">${data.time}</span> / <a href="${data.url}">查看详情</a>
  </div>`
    : noResultMessage;
};

const renderNotice = data => {
  let output = '';
  let list = data.slice(0, NOTICE_COUNT).map(item => item.notice);

  list.forEach(item => {
    let time = item.time.substring(5);

    if (item.title && item.content && item.source) {
      output += `<li>
        <div class="notice-time">${time}</div>
        <div class="notice-item">
          <h4>${item.title}</h4>
          <p>${item.content}</p>
        </div>
        <p class="source">信息来源：${item.source}</p>
      </li>`;
    }
  });

  noticeListEl.innerHTML = output;
};

export { renderResult, renderNotice };
