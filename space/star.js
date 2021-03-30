//Port the console

    let brackets = console.log;
    let connector = document.getElementById("port");
    function brackets() {
      for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == "object") {
            connector.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]);
        } else {
            connector.innerHTML += arguments[i];
        }
      }
    }


//Get date
getDate()
function getDate(){
  let today = new Date();
  portal()
}

//Enable contract
let contract = document.getElementById("participate")
contract.onclick = function() {
  document.getElementById("aura").removeAttribute("hidden")
}

//Age collections
for (let virtualage = 0; virtualage <= 9; virtualage++) {

}

//Get Collection of ingredients.
let Collection =  
[
"ScentOs"
];

//Get guarantee
document.getElementById("ingr").innerHTML = Collection[0]

//Get a random color logic for mixing
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//Paint the color
document.getElementById("?").style.color= getRandomColor();

var x = document.getElementsByTagName("body")

console.log(x);
