function acceptCookies(){
    myEle = document.querySelector(".cookies");
    myEle.remove();
}

function temperatureChange(element){
    high = [24,27,21,26];
    low = [18,19,16,21];
    deg = "°C";

    highDaysArray = document.querySelectorAll(".high");
    lowDaysArray = document.querySelectorAll(".low");
    console.log(highDaysArray.length + ", " + lowDaysArray.length);
    if(element.value == "fahrenheit"){
        deg = "°F";
        for(var i=0; i<high.length; i++) {
            high[i] = high[i] * 9 / 5 + 32;
            low[i] = low[i] * 9 / 5 + 32;
        }
    }
    
    
    for(var i=0; i<highDaysArray.length; i++) {
        highDaysArray[i].innerHTML = high[i] +deg;
        lowDaysArray[i].innerHTML = low[i] + deg;
    }


 
}