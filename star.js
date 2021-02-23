// Pwa identify the contents
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

//Get the date today
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
for (let age = 1; age <= 9; age++) {
}

// Get Collection of ingredients.
let Collection =  
[
'Vetiver','Woody','Citrus','Mint','Cardamom','Saffron',
'Natural Scent','Pepper','Fresh','Mint','Agrumen',
'Aldehyde','Amber','Ambergris','Ambrette','Amyris',
'Benzoin','Calone','Cashmeran','Castoreum','Citron',
'Clary Sage','Coumarin','Frangipani','Frankincense',
'Galbanum','Guaiac Wood','Hedione','Heliotrope',
'Indole','Iso E Super','Jasmine','Labdanum','Monoi',
'Muguet','Musk','Myrrh','Narciussus','Neroli','Oakmoss',
'Orris','Osmanthus','Oudh','Patchouli','Rose',
'Rose de Mai','Sandalwood','Tonka Bean','Tuberose',
'Vanila','Ylang Ylang','Chrysanthemum','star anise seed','Padmanabham'
];

// Mix 3 ingredients from collection
for (let mix = 0; mix < 4; mix++) {
let MixIngredient = Math.floor(Math.random() * Collection.length);
let CollectionList  = 'ingr-' + mix;
document.getElementById(CollectionList).innerHTML = Collection[MixIngredient]
}

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
console.log('Designers #032425 Random (:', getRandomColor());

}
