window.onload=function() {

let design = {
  "html":"
<h4 style='line-height:30px;' align=center>Introducing</h4>
<h3 style='line-height:38px;' spellcheck=false align=center>DigitalImage</h3>
<input id='query' class='clearfix' type='hidden'/>
<input style='align:center; display:inline-block; margin: auto; display: flex; align-items: center;justify-content: center;' id='range' class='clearfix' type='range' min='0' max='100' value='30' step='10' contenteditable=false />

<!-- 
<h4 align=center>അമ്മേ 🙏 ശരണം</h4>
-->

<h4 align=center>Perfume</h4>

<!--
<h4 style=font-family:'Noto Sans',sans-serif;  align=center>अतिथिदेवो भव:</h4>
<h4 align=center>I ❤️ ലക്ഷ്മി</h4>
<h6 class=recycleable align=center>
Cool Wind
</h6>
<h5 class=recycleable align=center>
Happy Space
</h5>
<h6 class=recycleable align=center>
Amruth
</h6>
<h6 align=center>
Digital Architect & Digital Coding
</h6>
<h4 font-family: Noto Sans; align=center>Syam</h4>
<h6 align=center>
Technology Support
</h6>
<img title=vedah src=vedahtech.jpeg alt=vedah style='width:100%;height:auto;margin:auto;'/>
<h4 style=color:navy; align=center>Atheesh</h4>
<h6 align=center>
Digital Marketing by superAds limited
</h6>
<h6 align=center>Stable version</h6>
<h6 align=center>Updated 1.0 Version</h6>
<h4 font-family: Noto Sans; align=center>Status</h4>
<h6 align=center>
Rose Jasmine
</h6>
-->

<h4 font-family: Noto Sans; align=center class=coins>DigitalNotes</h4>
<ol class=notes>
 <li>Woody</li>
 <li>Citrus</li>
 <li>Vetiver</li>
 <li>Cardamom</li>
 <li>Natural scent</li>
 <li>Saffron</li>
 <li>Pepper</li>
 <li>Fresh</li>
 <li>Mint</li>
</ol>

<img src=eternal.gif class=infinity title=eternal alt=eternal style='display:flex;text-align:center;margin:20px auto;'/>

<label align=center class="switch" contenteditable=false>
  <input type="checkbox" checked >
  <span class="slider round"></span>
</label>
<h4 font-family: Noto Sans; align=center>Ambience</h4>
<img src=chakra.svg class=infinity title=infinity alt=infinity style='width:100%;height:auto;text-align:center;margin:auto;'/>
<label align=center class="switch" style=margin-top:20px; contenteditable=false>
  <input id=participate type="checkbox">
  <span class="slider round"></span>
</label>
<h4 hidden id=agree style=margin-top:10px; align=center>
Start
</h4>

<div hidden id=aura>
 <ol class=sandal>
 <li>Sandalwood</li>
 <li>Turmeric</li>
 <li>Kesar</li>
 <li>Cinnamon</li>
 <li>Tulsi</li>
</ol>
</div>

<h6 align=center>
Digital Payment
</h6>
<label align=center class="switch" contenteditable=false>
  <input onchange=getPaid() id=cash type="checkbox">
  <span class="slider round"></span>
</label>

<section id=payment hidden>
<img src=1611459626723.jpg title=upi alt=donate style=display:flex;width:100%; >
<img title=phonepe src=PhonePeQR_FederalBank5071.png alt=phonepe style='display:flex;width:100%;height:auto;margin:auto;'/>
<a href=https://gpay.app.goo.gl/pay-QZjQXN3BMzR style='display:flex; margin: auto o auto 30px;' />
<img  title=gpay src=buy-buttons-white.png alt=gpay style='display:flex;width:50%;height:auto;text-align:center;margin:auto;'/>
</a>
</section>

<pre align=center class=chakra id="log"></pre>
"
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
