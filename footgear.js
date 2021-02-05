(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function () {
      for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<div class="clearfix"></div>';
        } else {
            logger.innerHTML += arguments[i] + '<div class="clearfix"></div>';
        }
      }
    }
})();

window.onload=function() {

let today = new Date();
function getDate(){
    console.info('.notes',today);
}
getDate()
console.log('Console is ready')


 let paytrigger = document.getElementById('cash')

 paytrigger.onchange=function() {

  if(this.checked = true) {

   document.getElementById("payment").removeAttribute('hidden')

  } 

 } 

}
