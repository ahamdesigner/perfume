//Get date
getDate()
function getDate(){
  let today = new Date();
}

//Age collections
for (let virtualage = 19; virtualage <= 35; virtualage++) {

}

//Get Collection of ingredients.
let Collection =  
[
"ScentOs"
];

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
