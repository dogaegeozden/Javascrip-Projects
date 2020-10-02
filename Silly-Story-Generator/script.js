// This is the part where you grap the DOM tree elements
let nameArea = document.querySelector(".User-Name");
let generatorButton = document.querySelector(".Generator-Btn");
let storyBox = document.querySelector(".Story-Box");

// This is the part where you create caracters
let caracters = ["Franklin", "Hector", "Victoria", "Bella", "Ella", "Diane", "Stella"];

// This is the part that you created the destination places
let places = ["Lyon", "Nice", "Marseille"];

let eventsP1 = ["Let me tell you one of my greatest story", "Listen careful."];

// This is the part that allows your code to run function with a click
generatorButton.addEventListener("click", randomStoryGenerator);

// This is the part that you create random story generator function
function randomStoryGenerator () {

    generatorButton.textContent = "Tell me another story!";
    let randomCaracter1 = caracters[Math.floor(Math.random()*caracters.length)];
    let randomCaracter2 = caracters[Math.floor(Math.random()*caracters.length)];
    let randomPlaces = places[Math.floor(Math.random()*places.length)];
    let randomEventP1 = eventsP1[Math.floor(Math.random()*eventsP1.length)];
    let userName = nameArea.value;
    if ( randomCaracter1 !== randomCaracter2) {
        if ( randomEventP1 === "Let me tell you one of my greatest story" ) {
            let story = `Let me tell you one of my greatest story ${userName}. We were in Paris in 1560's. I made a wonderful wine with anason, magical Lavana flower, and grapes. It was so strong and delicous. We drank it all night. I was super fun. But three days later we woke up in ${ randomPlaces } with ${ randomCaracter1 } and ${ randomCaracter2 }. It's weird that no one was remembering what actually happened.`;
            let storyPara = document.createElement("p");
            storyPara.textContent = story;
            storyBox.appendChild(storyPara);
        } else if ( randomEventP1 === "Listen careful." ){
            let story = `Listen careful ${userName}. I were in some small town in England. I was making a research about infinite coridor. And, my mystic vobon stone was lead me here. You know it's common for churces to collect rare books and put them into their library. So for this reason I asked to the head priest to enter their church and read some books for my resarch. They accepted it and let me in. Different than other churces in this town priest weren't allowing anyone to enter their church. They they were also putting bandanas to their arms with the symbol of hell. Later I figure out they were using infinite coridor to bring someone back from hell. After I figure this out. I called my friends ${ randomCaracter1} and ${randomCaracter2} immediately. Do you know we stop these brains washed priest to call drakula back from hell!`;
            let storyPara = document.createElement("p");
            storyPara.textContent = story;
            storyBox.appendChild(storyPara);
        }

    }
}
