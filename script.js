function acceptCookies(){
    myEle = document.querySelector(".cookies");
    myEle.remove();
}

function temperatureChange(element){
    if (element.value == "fahrenheit") {
        myEle = document.querySelector(".high1");
        myEle.innerHTML = '<h4 class="high1">75.2°F</h4>';
        myEle = document.querySelector(".high2");
        myEle.innerHTML = '<h4 class="high2">80.6°F</h4>';
        myEle = document.querySelector(".high3");
        myEle.innerHTML = '<h4 class="high3">69.8°F</h4>';
        myEle = document.querySelector(".high4");
        myEle.innerHTML = '<h4 class="high4">78.8°F</h4>';

        myEle = document.querySelector(".low1");
        myEle.innerHTML = '<h4 class="low1">64.4°F</h4>';
        myEle = document.querySelector(".low2");
        myEle.innerHTML = '<h4 class="low2">66.2°F</h4>';
        myEle = document.querySelector(".low3");
        myEle.innerHTML = '<h4 class="low3">60.8°F</h4>';
        myEle = document.querySelector(".low4");
        myEle.innerHTML = '<h4 class="low4">69.8°F</h4>';
    }

    if (element.value == "celsius"){
        myEle = document.querySelector(".high1");
        myEle.innerHTML = '<h4 class="high1">24°C</h4>';
        myEle = document.querySelector(".high2");
        myEle.innerHTML = '<h4 class="high2">27°C</h4>';
        myEle = document.querySelector(".high3");
        myEle.innerHTML = '<h4 class="high3">21°C</h4>';
        myEle = document.querySelector(".high4");
        myEle.innerHTML = '<h4 class="high4">26°C</h4>';

        myEle = document.querySelector(".low1");
        myEle.innerHTML = '<h4 class="low1">18°C</h4>';
        myEle = document.querySelector(".low2");
        myEle.innerHTML = '<h4 class="low2">19°C</h4>';
        myEle = document.querySelector(".low3");
        myEle.innerHTML = '<h4 class="low3">16°C</h4>';
        myEle = document.querySelector(".low4");
        myEle.innerHTML = '<h4 class="low4">21°C</h4>';
    }

}