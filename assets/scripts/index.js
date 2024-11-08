const url = new URL(window.location.href);
console.log(url);
const params = new URLSearchParams(url.search);
console.log(params);
const queried = params.get('category');
console.log('queried for', queried);
