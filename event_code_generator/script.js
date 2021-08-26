let userNameArea = document.querySelector(".name-input");
let userSurNameArea = document.querySelector(".last-name-input");
let userAgeArea = document.querySelector(".age-input");
let submitBtn = document.querySelector(".code-generator");
let makeUpNightAdmnBox = document.querySelector(".make-up-night");
let elctrMscAdmnBox = document.querySelector(".electro-music");
let dncAdmnBox = document.querySelector(".dance-night");
let userCodeBox = document.querySelector(".user-event-code-box");
let totalPara = document.querySelector(".total-para");

let total = 0;

submitBtn.addEventListener("click", codeGenerator);

let codeCaracters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ",", ".", "<", ">", "/", "?", ";", ":"];

let adminCodeList = [];
let userCodeList = [];

let allEventChkBoxes = document.querySelectorAll(".chk-box");

let allPrices = document.querySelectorAll(".price-info");

// As you see inorder to use variables that you create inside loop to use out side of the loop you have to declare them by using the var keyword.
for ( let q = 0; q < allPrices.length; q += 1) {
    var priceInfo1 = allPrices[0].textContent.slice(1);
    var priceInfo2 = allPrices[1].textContent.slice(1);
    var priceInfo3 = allPrices[2].textContent.slice(1);
}

function codeGenerator () {
    let userName = userNameArea.value;
    let surName = userSurNameArea.value;
    let userAge = userAgeArea.value;
    if ( userName !== "" && userName !== " " && surName !== "" && surName !== " " && userAge >= 18 ) {
        for ( let i = 0; i < allEventChkBoxes.length ; i += 1 ) {
            if ( allEventChkBoxes[i].checked === true ) {
                if ( allEventChkBoxes[i].className === "make-up-chkbox chk-box") {
                    let uniqueCode = "";

                    if ( adminCodeList.indexOf(uniqueCode) === -1 ) {
                        for ( let a = 0; a < 30; a += 1) {
                            let uniqueCodeCar = codeCaracters[Math.floor(Math.random()*codeCaracters.length)];
                            uniqueCode += uniqueCodeCar;
                        }
                    }

                    adminCodeList.push(uniqueCode);
                    let salesInfoBox = document.createElement("div");
                    let salesInfoBoxAttribute = "sales-info-box";
                    salesInfoBox.setAttribute("class", salesInfoBoxAttribute);
                    makeUpNightAdmnBox.appendChild(salesInfoBox);


                    let salesInfoPara = document.createElement("p");
                    let salesInfoParaAttribute = "sales-info-para";
                    salesInfoPara.setAttribute("class", salesInfoParaAttribute);
                    salesInfoPara.textContent = userName + " " + surName + ": " + uniqueCode;
                    salesInfoBox.appendChild(salesInfoPara);



                    let removeBtn = document.createElement("button");
                    let removeBtnAttribute = "tckt-info-remove-btn";
                    removeBtn.setAttribute("class", removeBtnAttribute);
                    removeBtn.textContent = "Remove";
                    removeBtn.addEventListener("click", cancelUserTicket);
                    removeBtn.addEventListener("click", decresePrice);
                    salesInfoBox.appendChild(removeBtn);

                    let allRemoveBtns = document.querySelectorAll(".tckt-info-remove-btn");
                    for ( let a = 0; a < allRemoveBtns.length; a += 1 ) {
                        allRemoveBtns[a].addEventListener("click", removeTicketInformation);

                    }

                    function removeTicketInformation () {
                        var div = this.parentElement;
                        div.style.display = "none";
                    }

                    function decresePrice () {
                        total -= Number(priceInfo1);
                        totalPara.textContent = "$" + total;
                    }


                    let userEventInfoBox = document.createElement("div");
                    let userEventInfoBoxAttribute = "user-event-info-box";
                    userEventInfoBox.setAttribute("class", userEventInfoBoxAttribute);
                    userCodeBox.appendChild(userEventInfoBox);

                    let userEventInfoPara = document.createElement("p");
                    let userEventInfoParaAttribute = "user-event-info-para";
                    userEventInfoPara.setAttribute("class", userEventInfoParaAttribute);
                    userEventInfoPara.textContent = "Make Up Event: " + uniqueCode;
                    userEventInfoBox.appendChild(userEventInfoPara);

                    let cancelEventBtn = document.createElement("button");
                    let cancelEventBtnAttribute = "cancel-event-btn";
                    cancelEventBtn.setAttribute("class", cancelEventBtnAttribute);
                    cancelEventBtn.textContent = "Cancel";
                    cancelEventBtn.addEventListener("click", cancelEventP2);
                    cancelEventBtn.addEventListener("click", userDecreasePrice);
                    userEventInfoBox.appendChild(cancelEventBtn);

                    let allCancelBtns = document.querySelectorAll(".cancel-event-btn");

                    for ( let a = 0; a < allCancelBtns.length; a += 1 ) {
                        allCancelBtns[a].addEventListener("click", cancelEventP1);

                    }


                    function cancelEventP1 () {
                        var div = this.parentElement;
                        div.style.display = "none";

                    }

                    function cancelEventP2 () {
                        salesInfoBox.style.display = "none";
                    }

                    function cancelUserTicket () {
                        userEventInfoBox.style.display = "none";
                    }

                    total += Number(priceInfo1);
                    totalPara.textContent = "$" + total;

                    function userDecreasePrice () {
                        total -= Number(priceInfo1);
                        totalPara.textContent = "$" + total;
                    }


                } else if ( allEventChkBoxes[i].className === "electro-msc-chkbox chk-box") {
                    let uniqueCode = "";

                    if ( adminCodeList.indexOf(uniqueCode) === -1 ) {
                        for ( let a = 0; a < 30; a += 1) {
                            let uniqueCodeCar = codeCaracters[Math.floor(Math.random()*codeCaracters.length)];
                            uniqueCode += uniqueCodeCar;
                        }
                    }

                    adminCodeList.push(uniqueCode);
                    let salesInfoBox = document.createElement("div");
                    let salesInfoBoxAttribute = "sales-info-box";
                    salesInfoBox.setAttribute("class", salesInfoBoxAttribute);
                    elctrMscAdmnBox.appendChild(salesInfoBox);

                    let salesInfoPara = document.createElement("p");
                    let salesInfoParaAttribute = "sales-info-para";
                    salesInfoPara.setAttribute("class", salesInfoParaAttribute);
                    salesInfoPara.textContent = userName + " " + surName + ": " + uniqueCode;
                    salesInfoBox.appendChild(salesInfoPara);

                    let removeBtn = document.createElement("button");
                    let removeBtnAttribute = "tckt-info-remove-btn";
                    removeBtn.setAttribute("class", removeBtnAttribute);
                    removeBtn.textContent = "Remove";
                    removeBtn.addEventListener("click", cancelUserTicket);
                    removeBtn.addEventListener("click", decresePrice);
                    salesInfoBox.appendChild(removeBtn);
                    let allRemoveBtns = document.querySelectorAll(".tckt-info-remove-btn");
                    for ( let a = 0; a < allRemoveBtns.length; a += 1 ) {
                        allRemoveBtns[a].addEventListener("click", removeTicketInformation);

                    }

                    function removeTicketInformation () {
                        var div = this.parentElement;
                        div.style.display = "none";
                    }

                    function decresePrice () {
                        total -= Number(priceInfo2);
                        totalPara.textContent = "$" + total;
                    }

                    let userEventInfoBox = document.createElement("div");
                    let userEventInfoBoxAttribute = "user-event-info-box";
                    userEventInfoBox.setAttribute("class", userEventInfoBoxAttribute);
                    userCodeBox.appendChild(userEventInfoBox);

                    let userEventInfoPara = document.createElement("p");
                    let userEventInfoParaAttribute = "user-event-info-para";
                    userEventInfoPara.setAttribute("class", userEventInfoParaAttribute);
                    userEventInfoPara.textContent = "Electro Music Party: " + uniqueCode;
                    userEventInfoBox.appendChild(userEventInfoPara);

                    let cancelEventBtn = document.createElement("button");
                    let cancelEventBtnAttribute = "cancel-event-btn";
                    cancelEventBtn.setAttribute("class", cancelEventBtnAttribute);
                    cancelEventBtn.textContent = "Cancel";
                    cancelEventBtn.addEventListener("click", cancelEventP2);
                    cancelEventBtn.addEventListener("click", userDecreasePrice);
                    userEventInfoBox.appendChild(cancelEventBtn);

                    let allCancelBtns = document.querySelectorAll(".cancel-event-btn");

                    for ( let a = 0; a < allCancelBtns.length; a += 1 ) {
                        allCancelBtns[a].addEventListener("click", cancelEventP1);

                    }

                    function cancelEventP1 () {
                        var div = this.parentElement;
                        div.style.display = "none";
                    }

                    function cancelEventP2 () {
                        salesInfoBox.style.display = "none";
                    }

                    function cancelUserTicket () {
                        userEventInfoBox.style.display = "none";
                    }

                    total += Number(priceInfo2);
                    totalPara.textContent = "$" + total;

                    function userDecreasePrice () {
                        total -= Number(priceInfo2);
                        totalPara.textContent = "$" + total;
                    }


                } else if ( allEventChkBoxes[i].className === "dance-nght-chkbox chk-box") {
                    let uniqueCode = "";

                    if ( adminCodeList.indexOf(uniqueCode) === -1 ) {
                        for ( let a = 0; a < 30; a += 1) {
                            let uniqueCodeCar = codeCaracters[Math.floor(Math.random()*codeCaracters.length)];
                            uniqueCode += uniqueCodeCar;
                        }
                    }

                    adminCodeList.push(uniqueCode);
                    let salesInfoBox = document.createElement("div");
                    let salesInfoBoxAttribute = "sales-info-box";
                    salesInfoBox.setAttribute("class", salesInfoBoxAttribute);
                    dncAdmnBox.appendChild(salesInfoBox);

                    let salesInfoPara = document.createElement("p");
                    let salesInfoParaAttribute = "sales-info-para";
                    salesInfoPara.setAttribute("class", salesInfoParaAttribute);
                    salesInfoPara.textContent = userName + " " + surName + ": " + uniqueCode;
                    salesInfoBox.appendChild(salesInfoPara);

                    let removeBtn = document.createElement("button");
                    let removeBtnAttribute = "tckt-info-remove-btn";
                    removeBtn.setAttribute("class", removeBtnAttribute);
                    removeBtn.textContent = "Remove";
                    removeBtn.addEventListener("click", cancelUserTicket);
                    removeBtn.addEventListener("click", decresePrice);
                    salesInfoBox.appendChild(removeBtn);
                    let allRemoveBtns = document.querySelectorAll(".tckt-info-remove-btn");
                    for ( let a = 0; a < allRemoveBtns.length; a += 1 ) {
                        allRemoveBtns[a].addEventListener("click", removeTicketInformation);

                    }

                    function removeTicketInformation () {
                        var div = this.parentElement;
                        div.style.display = "none";
                    }

                    function decresePrice () {
                        total -= Number(priceInfo3);
                        totalPara.textContent = "$" + total;
                    }

                    let userEventInfoBox = document.createElement("div");
                    let userEventInfoBoxAttribute = "user-event-info-box";
                    userEventInfoBox.setAttribute("class", userEventInfoBoxAttribute);
                    userCodeBox.appendChild(userEventInfoBox);

                    let userEventInfoPara = document.createElement("p");
                    let userEventInfoParaAttribute = "user-event-info-para";
                    userEventInfoPara.setAttribute("class", userEventInfoParaAttribute);
                    userEventInfoPara.textContent = "Dance Night: " + uniqueCode;
                    userEventInfoBox.appendChild(userEventInfoPara);

                    let cancelEventBtn = document.createElement("button");
                    let cancelEventBtnAttribute = "cancel-event-btn";
                    cancelEventBtn.setAttribute("class", cancelEventBtnAttribute);
                    cancelEventBtn.textContent = "Cancel";
                    cancelEventBtn.addEventListener("click", cancelEventP2);
                    cancelEventBtn.addEventListener("click", userDecreasePrice);
                    userEventInfoBox.appendChild(cancelEventBtn);

                    let allCancelBtns = document.querySelectorAll(".cancel-event-btn");

                    for ( let a = 0; a < allCancelBtns.length; a += 1 ) {
                        allCancelBtns[a].addEventListener("click", cancelEventP1);

                    }


                    function cancelEventP1 () {
                        var div = this.parentElement;
                        div.style.display = "none";
                    }

                    function cancelEventP2 () {
                        salesInfoBox.style.display = "none";
                    }

                    function cancelUserTicket () {
                        userEventInfoBox.style.display = "none";
                    }

                    total += Number(priceInfo3);
                    totalPara.textContent = "$" + total;

                    function userDecreasePrice () {
                        total -= Number(priceInfo3);
                        totalPara.textContent = "$" + total;
                    }

                }

            }
        }
    } else {
        alert("You may forgot to fill some information. In order to buy tickets you should be 18 years old or over.");
    }

}
