window.dataURL = "https://data.trends.cash:9007/"
window.app = "lockipedia.com"

var getUrlVars = function() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}

const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 0) {
    return interval + ' years ago';
  }

  interval = Math.floor(seconds / 2592000);
  if (interval > 0) {
    return interval + ' months ago';
  }

  interval = Math.floor(seconds / 86400);
  if (interval > 0) {
    return interval + ' days ago';
  }

  interval = Math.floor(seconds / 3600);
  if (interval > 0) {
    return interval + ' hours ago';
  }

  interval = Math.floor(seconds / 60);
  if (interval > 0) {
    return interval + ' minutes ago';
  }

  if(seconds < 10) return 'just now';

  return Math.floor(seconds) + ' seconds ago';
};

function newLinesToBr(text) {
  return text.replace(/(?:\r\n|\r|\n)/g, '<br>')
}

function urlify(text) {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function(url) {
    return `<a href="${url}" target="_blank">${url}</a>`;
  })
}
