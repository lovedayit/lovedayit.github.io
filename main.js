document.addEventListener('DOMContentLoaded', function() {
  
  var days = document.querySelector('#ngays span');
  var hour = document.querySelector('#gio');
  var min = document.querySelector('#phut');
  var second = document.querySelector('#giay');

  var startDate = new Date(2017, 10, 04);
  days.innerText = Math.floor((new Date - startDate)/86400000);
  countTime();

  function countTime() {
    let today = new Date();
    let ms = (today - startDate) % 86400000;
    hour.innerText = Math.floor(ms / 3600000);
    min.innerText = Math.floor(ms % 3600000 / 60000);
    second.innerText = Math.floor(ms % 3600000 % 60000 / 1000);
  }

  setInterval(countTime, 1000);

}, false);