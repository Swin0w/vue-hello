var msg = prompt("Scrivi qualcosa");

function initVue(msg){
  newVue({
    el: '#write',
    data: {
      'message' : msg
    },
  });
}
