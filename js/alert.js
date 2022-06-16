"use strict"

function calc(){
    var hsitetype = document.getElementById("hsitetype");
    var hadapt = document.getElementById("hadapt");
    var hsitedes = document.getElementById("hsitedes");
    var result = document.getElementById("result");
    
    var timecode = 0;
    timecode += parseInt(hsitetype.options[hsitetype.selectedIndex].getAttribute('value1'));
    timecode += parseInt(hadapt.options[hadapt.selectedIndex].getAttribute('value1'));
    timecode += parseInt(hsitedes.options[hsitedes.selectedIndex].getAttribute('value1'));
    if (timecode == 1){
    timeresult.innerHTML = timecode + " день";
    };
    if (timecode >= 2 && timecode <= 4){
        timeresult.innerHTML = timecode + " дня";
    };
    if (timecode >= 5){
        timeresult.innerHTML = timecode + " дней";
    };
    
    var price = 0;
    price += parseInt(hsitetype.options[hsitetype.selectedIndex].value);
    price += parseInt(hadapt.options[hadapt.selectedIndex].value);
    price += parseInt(hsitedes.options[hsitedes.selectedIndex].value);

    result.innerHTML = price;
}