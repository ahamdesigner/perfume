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

//Get hero date today
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
for (let ശ്യാം = 0; ശ്യാം <= 9; ശ്യാം++) {
}

// Get Collection of ingredients.
let Collection =  
[
'രാമച്ചം','ഏലയ്ക്ക','കുങ്കുമപ്പൂവ്','മുല്ല',
'റോസ','ചന്ദനം','ശ്യാം','ചെമ്പരത്തി'
];

// Mix 3 ingredients from collection
for (let mix = 0; mix < 4; mix++) {
let MixIngredient = Math.floor(Math.random() * Collection.length);
let CollectionList  = 'ingr-' + mix;
document.getElementById(CollectionList).innerHTML = Collection[MixIngredient]
}

// Get guarantee
document.getElementById('ingr-4').innerHTML = Collection.slice(-1)[0]

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

// Console The designers code
console.log('Designers #032425 Designed ', getRandomColor());

}
