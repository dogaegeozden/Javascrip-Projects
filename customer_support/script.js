// Copyright © 2021 All rights reserved. Doga Ege Ozden
let btn = document.querySelector(".submit");
let discussionBox = document.querySelector(".discussion-box-deactive");
let msgViewBox = document.querySelector(".message-view-box");
let customerSupportBox = document.querySelector(".customer-support-box");

btn.addEventListener("click", startDiscussion);

// Customer Support
let name = "Jesica";
let age = 26;
let shift = "Full-Time"

class customerSupport {
    constructor(name,age,shift) {
        this.name = name;
        this.age = age;
        this.shift = shift;
    }

    greeting() {
        let AITalkBox = document.createElement("div");
        AITalkBox.setAttribute("class", "AI-talk-box");
        msgViewBox.appendChild(AITalkBox);
        let AITalkPara = document.createElement("p");
        AITalkPara.setAttribute("class", "AI-talk-para");
        AITalkPara.textContent = `Hello, my name is ${this.name}. How may I help you today?`;
        AITalkBox.appendChild(AITalkPara);
    }


}

let jesica = new customerSupport(name,age,shift);


function closeDiscussion () {
    discussionBox.style.display = "none";
    // You will able to user start the chat again.
    let closeDiscussionMessageBox = document.createElement("div");
    closeDiscussionMessageBox.setAttribute("class", "close-discussion-msg-box");
    customerSupportBox.appendChild(closeDiscussionMessageBox);
    let closeMessage = document.createElement("p");
    closeMessage.setAttribute("class", "cls-message");
    closeMessage.textContent = `Nice to talk with you. If you would like to talk again press "F5".`;
    closeDiscussionMessageBox.appendChild(closeMessage);
}

function startDiscussion () {
    discussionBox.setAttribute("class","discussion-box-active")
    btn.style.display = "none";
    let newBtn = document.createElement("button");
    newBtn.setAttribute("class", "send");
    newBtn.textContent = "Send";
    discussionBox.appendChild(newBtn);
    newBtn.style.position = "relative";
    newBtn.style.top = "6px";
    let sendBtn = document.querySelector(".send");
    sendBtn.addEventListener("click", sendMessage);
    let closeBtn = document.createElement("button");
    closeBtn.setAttribute("class", "clsBtn");
    closeBtn.textContent = "Quit Chat";
    discussionBox.appendChild(closeBtn);
    closeBtn.style.position = "relative";
    closeBtn.style.top = "6px";
    closeBtn.style.left = "180px";
    closeBtn.addEventListener("click", closeDiscussion);
    jesica.greeting();
}

function sendMessage () {
    let textArea = document.querySelector(".discussion-textarea");
    let userTalkD = document.createElement("div");
    userTalkD.setAttribute("class", "user-talk-box");
    msgViewBox.appendChild(userTalkD);
    let userTalkP = document.createElement("p");
    userTalkP.setAttribute("class", "user-talk-para");
    userTalkP.textContent = textArea.value;
    userTalkD.appendChild(userTalkP);
    textArea.value = "";

    let inCaseSensetiveUserTalk = userTalkP.textContent.toLowerCase();

    // this is the part that jesica introduces her boss.
    if (inCaseSensetiveUserTalk.includes("who is he") === true || inCaseSensetiveUserTalk.includes("who is this guy") === true || inCaseSensetiveUserTalk.includes("who is this dude") === true || inCaseSensetiveUserTalk === "wih" ) {
        let AITalkBox = document.createElement("div");
        AITalkBox.setAttribute("class", "AI-talk-box");
        msgViewBox.appendChild(AITalkBox);
        let AITalkPara = document.createElement("p");
        AITalkPara.setAttribute("class", "AI-talk-para");
        AITalkPara.textContent = `His name is Doga Ege Ozden. He is studying Business Administration and Marketing. He is very smart, handsome, generous, cool, and rich.`;
        AITalkBox.appendChild(AITalkPara);

    // This is the part that makes here answer to greeting messages
    } else if (inCaseSensetiveUserTalk === "hello" || inCaseSensetiveUserTalk === "hi" || inCaseSensetiveUserTalk === "hello " || inCaseSensetiveUserTalk === "hi " || inCaseSensetiveUserTalk === "hello\n" || inCaseSensetiveUserTalk === "hi\n") { // \n is how you define enter in input area you use it as new line or line break
        let AITalkBox = document.createElement("div");
        AITalkBox.setAttribute("class", "AI-talk-box");
        msgViewBox.appendChild(AITalkBox);
        let AITalkPara = document.createElement("p");
        AITalkPara.setAttribute("class", "AI-talk-para");
        AITalkPara.textContent = `Hi`;
        AITalkBox.appendChild(AITalkPara);

    } else if (inCaseSensetiveUserTalk === "hey" || inCaseSensetiveUserTalk === "hey " || inCaseSensetiveUserTalk === "hey jesica" || inCaseSensetiveUserTalk === "hey jessica") { // \n is how you define enter in input area you use it as new line or line break
        let AITalkBox = document.createElement("div");
        AITalkBox.setAttribute("class", "AI-talk-box");
        msgViewBox.appendChild(AITalkBox);
        let AITalkPara = document.createElement("p");
        AITalkPara.setAttribute("class", "AI-talk-para");
        AITalkPara.textContent = `Hey`;
        AITalkBox.appendChild(AITalkPara);

    // This is the part that makes her answer how are you kind questions.
    } else if (inCaseSensetiveUserTalk.includes("what's up") === true || inCaseSensetiveUserTalk.includes("whats up") === true  || inCaseSensetiveUserTalk.includes("what's popin") === true  || inCaseSensetiveUserTalk.includes("whats popin") === true  || inCaseSensetiveUserTalk.includes("how are you") === true  || inCaseSensetiveUserTalk.includes("hru") === true  || inCaseSensetiveUserTalk.includes("how r u") === true  || inCaseSensetiveUserTalk.includes("how are u") === true ) {
        let AITalkBox = document.createElement("div");
        AITalkBox.setAttribute("class", "AI-talk-box");
        msgViewBox.appendChild(AITalkBox);
        let AITalkPara = document.createElement("p");
        AITalkPara.setAttribute("class", "AI-talk-para");
        AITalkPara.textContent = `I'm fine thank you.`;
        AITalkBox.appendChild(AITalkPara);

    // This is the part that makes here polite.
    } else if (inCaseSensetiveUserTalk.includes("thank you") === true || inCaseSensetiveUserTalk.includes("thanks") === true  || inCaseSensetiveUserTalk.includes("ty") === true  || inCaseSensetiveUserTalk.includes("thx") === true  || inCaseSensetiveUserTalk.includes("tysm") === true ) {
        let AITalkBox = document.createElement("div");
        AITalkBox.setAttribute("class", "AI-talk-box");
        msgViewBox.appendChild(AITalkBox);
        let AITalkPara = document.createElement("p");
        AITalkPara.setAttribute("class", "AI-talk-para");
        AITalkPara.textContent = `Thank youu. Your welcome`;
        AITalkBox.appendChild(AITalkPara);

    // This is the part that Jesica explains what are you doing.
    } else if (inCaseSensetiveUserTalk.includes("what is he doing") === true || inCaseSensetiveUserTalk.includes("why should i hire him") === true ) {
        let AITalkBox = document.createElement("div");
        AITalkBox.setAttribute("class", "AI-talk-box");
        msgViewBox.appendChild(AITalkBox);
        let AITalkPara = document.createElement("p");
        AITalkPara.setAttribute("class", "AI-talk-para");
        AITalkPara.textContent = `He is currently studying in a college and doing freelancer jobs. You should hire him because he works relly hard and he is creative.`;
        AITalkBox.appendChild(AITalkPara);

    } else {
        let AITalkBox = document.createElement("div");
        AITalkBox.setAttribute("class", "AI-talk-box");
        msgViewBox.appendChild(AITalkBox);
        let AITalkPara = document.createElement("p");
        AITalkPara.setAttribute("class", "AI-talk-para");
        AITalkPara.textContent = `Sorry, I couldn't understand can you repeat.`;
        AITalkBox.appendChild(AITalkPara);
    }
}
