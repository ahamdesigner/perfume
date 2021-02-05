window.onload=function() {
let today = new Date();
function getDate(){
    console.info('.notes',today);
}
getDate()

console.log('fine')

 let paytrigger = document.getElementById('cash')

 paytrigger.onchange=function() {

  if(this.checked = true) {

  document.getElementById("payment").removeAttribute('hidden')

  } 

 } 

}
