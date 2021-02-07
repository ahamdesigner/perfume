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

getDate()

let today = new Date();
function getDate(){
  
}

 let paytrigger = document.getElementById('cash')
 paytrigger.onchange=function() {
 if(this.checked = true) {
   document.getElementById("payment").removeAttribute('hidden')
 } 
} 

let contract = document.getElementById('participate')
contract.onclick = function() {
  document.getElementById('aura').removeAttribute('hidden')
}

function patternoflife(num) {    
   if(num==1) 
      return 0; 
   if (num == 2) 
      return 1; 
   return patternoflife(num - 1) + patternoflife(num - 2); 
} 

console.log('Designers Code', patternoflife(2))

 



}
