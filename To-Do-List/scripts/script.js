let addItemButton = document.querySelector("button");
let toDoListBox = document.querySelector(".text-box");


addItemButton.onclick = function () {
    let newChildToDoListBox = document.createElement('div');
    newChildToDoListBox.setAttribute("class", "child-to-do-list-box");
    toDoListBox.appendChild(newChildToDoListBox);
    let allChildToDoListBoxes = document.querySelectorAll(".child-to-do-list-box");
    for (let i = 0; i < allChildToDoListBoxes.length; i++ ) {
        allChildToDoListBoxes[i].style.background = "lightblue";
        allChildToDoListBoxes[i].style.height = "40px";
        allChildToDoListBoxes[i].style.width = "550px";
        allChildToDoListBoxes[i].style.margin = "0px 0px 10px 0px";
        allChildToDoListBoxes[i].style.border = "solid 2px black";
        allChildToDoListBoxes[i].style.padding = "0 0 0 10px";


    }
    let inputVal = document.querySelector("input").value;
    let newToDoListPara = document.createElement("p");
    newToDoListPara.textContent = inputVal;
    newChildToDoListBox.appendChild(newToDoListPara);

}
