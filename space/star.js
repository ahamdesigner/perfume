// scent identify the contents 
window.onload=function() {
// Make the console available in the Pwa itself
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

//Get hero date
getDate()
function getDate(){
  let today = new Date();
}

// Enable aura
let contract = document.getElementById('participate')
contract.onclick = function() {
  document.getElementById('aura').removeAttribute('hidden')
}

// Age the collections
for (let virtualage = 0; virtualage <= 9; virtualage++) {

}

// Get Collection of ingredients.
let Collection =  
[
'ScentOs'
];

// Get guarantee
document.getElementById('ingr').innerHTML = Collection[0]

// Get a random color logic for mixing
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Paint the color
document.getElementById("?").style.color= getRandomColor();

// yoga nidra 
console.log('');

}
