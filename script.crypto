$(document).ready(function() {
        readydate = new Date();
        $("body h2").text(readydate.getMonth() + "." +readydate.getFullYear())
        Leap($("ol.calendar").attr('data-leap'))
        Life($("ol.calendar").attr('data-days'))
        Paint()
        function Life(input) {
            var i;
            for (i = 1; i < input; i++) {
                let li = document.createElement('li')
                li.classList.add('day-'+i);
                li.innerText = i;
                $("ol.calendar").append(li);
            }
        }
        function Leap(input) {
            var i;
            for (i = 0; i < input; i++) {
                let li = document.createElement('li')
                li.classList.add('leap-future');
                li.innerText = "Leap Future";
                $("ol.calendar").prepend(li)
            }
        }
        function Paint(date){
            date = new Date();
            let cudate = "day-" + date.getDate()
            $("li."+cudate).css("border","1px solid #ffc3c3")
        }
        
        console.info("Loka Samasta Sukhino Bhavanthu")
        console.info("Samasta Sukhino Bhavanthu")
        console.info("Sukhino Bhavanthu")
        console.trace("Sukhino")
        console.error("Bhavanthu")
    });
