//分享
var UA = function() {
  var userAgent = navigator.userAgent.toLowerCase();
  return {
    ipad: /ipad/.test(userAgent),
    iphone: /iphone/.test(userAgent),
    android: /android/.test(userAgent),
    weixin: /micromessenger/.test(userAgent)
  };
};

if (UA.weixin) {
  wx.ready(function() {
    var url = window.location.href;
    // 在这里调用 API
    wx.onMenuShareAppMessage({
      title: '防疫知识问答', // 分享标题
      desc: '', // 分享描述
      link: url, // 分享链接
      imgUrl: '', // 分享图标
      type: '', //
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function() {
        // 用户确认分享后执行的回调函数
      },
      cancel: function() {
        // 用户取消分享后执行的回调函数
      }
    });

    wx.onMenuShareTimeline({
      title: '防疫知识问答', // 分享标题
      desc: '', // 分享描述
      link: url, // 分享链接
      imgUrl: '', // 分享图标
      type: '', //
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function() {
        // 用户确认分享后执行的回调函数
      },
      cancel: function() {
        // 用户取消分享后执行的回调函数
      }
    });
  });
}
