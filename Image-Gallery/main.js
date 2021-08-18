const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i <= 5; i += 1) {
    const newImage = document.createElement('img');
    var xxx = `images/pic${i}.jpg`;
    newImage.setAttribute('src', xxx);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", displayedImageChanger);
}

function displayedImageChanger (e) {
    xxx = e.target.src;
    displayedImage.setAttribute('src', xxx);

    // Down below is from the source code of the example
    // newImage.onclick = function(e) {
    //     displayedImage.src = e.target.src;
    // }
}

btn.addEventListener("click", darkenLightenFunc);

function darkenLightenFunc () {
    if ( btn.getAttribute("class") === "dark" ) {
        // alert("dark");
        let newBtnClass = "light";
        btn.setAttribute("class",newBtnClass);
        btn.textContent = "Lighten";
        overlay.style.background = "rgba(0,0,0,0.5)";
    } else if ( btn.getAttribute("class") === "light" ) {
        // alert("light");
        let newBtnClass = "dark";
        btn.setAttribute("class", newBtnClass);
        btn.textContent = "Darken";
        overlay.style.background = "rgba(0,0,0,0)";
    }
}


/* Wiring up the Darken/Lighten button */
