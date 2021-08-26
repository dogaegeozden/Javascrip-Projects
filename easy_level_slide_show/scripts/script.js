let mySlideImage = document.querySelector("img");
let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");
// console.log(mySlideImage);

// function nextSlide(){
//     alert("Test is successful!")
// }
nextButton.onclick = function(){
    // alert("Test is successful!")
    let mySrc = mySlideImage.getAttribute('src');
    // alert(mySrc)
    if (mySrc === 'images/slide-show-image-1.jpg') {
        // alert("Test is successful!")
        mySlideImage.setAttribute('src','images/slide-show-image-2.jpg');
    } else if (mySrc === 'images/slide-show-image-2.jpg') {
        mySlideImage.setAttribute('src','images/slide-show-image-3.jpg');
    } else if (mySrc === 'images/slide-show-image-3.jpg') {
        mySlideImage.setAttribute('src','images/slide-show-image-1.jpg');
    }
}

prevButton.onclick = function(){
    let mySrc = mySlideImage.getAttribute('src');
    if (mySrc === 'images/slide-show-image-1.jpg'){
        mySlideImage.setAttribute('src','images/slide-show-image-3.jpg');
    } else if (mySrc === 'images/slide-show-image-3.jpg'){
        mySlideImage.setAttribute('src','images/slide-show-image-2.jpg');
    } else if (mySrc === 'images/slide-show-image-2.jpg'){
        mySlideImage.setAttribute('src','images/slide-show-image-1.jpg');
    }
}

console.log(nextSlide())
