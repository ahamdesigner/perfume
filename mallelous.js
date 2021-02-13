window.onload=function() {

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

let contract = document.getElementById('participate')
contract.onclick = function() {
  document.getElementById('aura').removeAttribute('hidden')
}


for (let avatar = 1; avatar <= 9; avatar++) {
}

// Get the 3 ingredients.
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
'Vanila','Ylang Ylang'
];

for (let mix = 0; mix < 3; mix++) {
let MixIngredient = Math.floor(Math.random() * Collection.length);
let CollectionList  = 'ingr-' + mix;
document.getElementById(CollectionList).innerHTML = Collection[MixIngredient]
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

console.log('Designers Code: Nice Scent', getRandomColor());

}
