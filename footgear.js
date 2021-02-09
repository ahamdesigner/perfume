window.onload=function() {

let design = {
  "html":"<figure>Scent</figure>"
}

document.getElementsByClassName('Perfume').innerHTML = design.html

(function () {
    let old = console.log;
    let logger = document.getElementById('log');
    console.log = function () {
      for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<div class="clearfix"></div>';
        } else {
            logger.innerHTML += arguments[i] + '<div class="clearfix"></div>';
        }
      }
    }
})();

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

for (let avatar = 1; avatar <= 9; avatar++) {
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById("?").style.color= getRandomColor();

console.log('Designers Code', getRandomColor());

}
