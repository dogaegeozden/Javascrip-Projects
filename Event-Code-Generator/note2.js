allEventChkBoxes[0].addEventListener("click", totalCal1);
allEventChkBoxes[1].addEventListener("click", totalCal2);
allEventChkBoxes[2].addEventListener("click", totalCal3);

function totalCal1 () {
    if ( allEventChkBoxes[0].checked === true ) {
        total += Number(priceInfo1);
        totalPara.textContent = "$" + total;
    } else if ( allEventChkBoxes[0].checked === false ) {
        total -= Number(priceInfo1);
        totalPara.textContent = "$" + total;
    }
}

function totalCal2 () {
    if ( allEventChkBoxes[1].checked === true ) {
        total += Number(priceInfo2);
        totalPara.textContent = "$" + total;
    } else if ( allEventChkBoxes[1].checked === false ) {
        total -= Number(priceInfo2);
        totalPara.textContent = "$" + total;
    }
}

function totalCal3 () {
    if ( allEventChkBoxes[2].checked === true ) {
        total += Number(priceInfo3);
        totalPara.textContent = "$" + total;
    } else if ( allEventChkBoxes[2].checked === false ) {
        total -= Number(priceInfo3);
        totalPara.textContent = "$" + total;
    }
}
