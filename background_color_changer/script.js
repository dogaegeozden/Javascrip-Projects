var backgroundcolors = ["lightblue", "red", "green", "yellow", "orange"]


// console.log(randomColor)

var thebox = document.querySelector(".colored-box");
console.log(thebox);

function changeColor(color) {
    thebox.style.background = color;
}

function gfg_Run() {
    var randomColor= backgroundcolors[Math.floor(Math.random()*backgroundcolors.length)];
    changeColor(randomColor);
    // el_down.innerHTML = "Background Color changed";
}


// document.getElementById("test").innerHTML = testcolors;

// document.querySelector(".colored-box");
// document.querySelector(".colored-box").innerHTML;
