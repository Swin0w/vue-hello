var msg = prompt("Scrivi qualcosa");

function initVue(msg){
  new Vue({
    el: '#write',
    data: {
      'message' : msg
    },
  });
}
initVue(msg);
