"use strict"

function calc(){
    var hsitetype = document.getElementById("hsitetype");
    var hadapt = document.getElementById("hadapt");
    var hsitedes = document.getElementById("hsitedes");
    var result = document.getElementById("result");
    
    var timecode = 0;
    timecode += parseInt(hsitetype.options[hsitetype.selectedIndex].value1);
    parseInt(hadapt.options[hadapt.selectedIndex].value1);
    parseInt(hsitedes.options[hsitedes.selectedIndex].value1);
    timeresult.innerHTML = timecode;
    
    var price = 0;
    price += parseInt(hsitetype.options[hsitetype.selectedIndex].value);
    price += parseInt(hadapt.options[hadapt.selectedIndex].value);
    price += parseInt(hsitedes.options[hsitedes.selectedIndex].value);

    result.innerHTML = price;
}