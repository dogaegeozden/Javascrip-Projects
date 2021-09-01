// Copyright © 2021 All rights reserved. Doga Ege Ozden
let addItemButton = document.querySelector("button");
let toDoListBox = document.querySelector(".text-box");


addItemButton.onclick = function () {
    let newChildToDoListBox = document.createElement('div');
    newChildToDoListBox.setAttribute("class", "child-to-do-list-box");
    toDoListBox.appendChild(newChildToDoListBox);
    let allChildToDoListBoxes = document.querySelectorAll(".child-to-do-list-box");
    for (let i = 0; i < allChildToDoListBoxes.length; i++ ) {
        allChildToDoListBoxes[i].style.background = "#25632a";
        allChildToDoListBoxes[i].style.height = "70px";
        allChildToDoListBoxes[i].style.width = "550px";
        allChildToDoListBoxes[i].style.margin = "0px 0px 10px 0px";
        allChildToDoListBoxes[i].style.border = "solid 2px black";
        allChildToDoListBoxes[i].style.padding = "0px 10px 10px 10px";
    }
    
    let inputVal = document.querySelector("input").value;
    let newToDoListPara = document.createElement("p");
    newToDoListPara.textContent = inputVal;
    newChildToDoListBox.appendChild(newToDoListPara);
    let removeBtn = document.createElement("button");
    let removeBtnAttribute = "Remove-Btn";
    removeBtn.setAttribute("class", removeBtnAttribute);
    removeBtn.textContent = "Remove";
    newChildToDoListBox.appendChild(removeBtn);

    let allRemoveBtns = document.querySelectorAll(".Remove-Btn");
    for ( let a = 0; a < allRemoveBtns.length; a += 1 ) {
        allRemoveBtns[a].addEventListener("click", removeListItem)
    }

    function removeListItem () {
        var div = this.parentElement;
        div.style.display = "none";
    }

}
