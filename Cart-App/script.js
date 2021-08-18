let addToCart = document.querySelectorAll(".Add-To-Cart");
let cartBox = document.querySelector(".Cart-Box");
let cartTotal = 0;

for ( let i = 0; i < addToCart.length ; i += 1 ) {
    addToCart[i].addEventListener("click", Cart);
    function Cart () {
        // alert("Test is succesful");

        let productInformation = document.querySelectorAll(".product-information");
        let productInformationText = productInformation[i].textContent
        let productPrice = productInformationText.split(":")[1];
        let productName = productInformationText.split(":")[0];
        let itemInCartBox = document.createElement("div");
        let itemInCartBoxAttribute = "Item-In-Cart-Box";
        itemInCartBox.setAttribute("class", itemInCartBoxAttribute);
        cartBox.appendChild(itemInCartBox);
        let allItemInCartDivs = document.querySelectorAll(".Item-In-Cart-Box");
        for (let x = 0; x < allItemInCartDivs.length; x += 1 ) {
            allItemInCartDivs[x].style.margin = "0px 0px 45px 0px";
        }
        let itemInCart = document.createElement("p");
        let itemInCartAttribute = "Item-In-Cart";
        itemInCart.setAttribute("class", itemInCartAttribute);
        itemInCart.textContent = `${productName}: ${productPrice}`;
        itemInCartBox.appendChild(itemInCart);
        let allItemsInCart = document.querySelectorAll(".Item-In-Cart");
        for (let y = 0; y < allItemsInCart.lenght; i += 1 ) {
        }
        let itemInCartRemoveBtn = document.createElement("button");
        let itemInCartRemoveBtnAttribute = "Item-In-Cart-Box-Remove-Button";
        itemInCartRemoveBtn.setAttribute("class", itemInCartRemoveBtnAttribute);
        itemInCartRemoveBtn.textContent = "Remove";
        itemInCartRemoveBtn.addEventListener("click", substractItemPrice);
        itemInCartBox.appendChild(itemInCartRemoveBtn);
        let allRemoveBtns = document.querySelectorAll(".Item-In-Cart-Box-Remove-Button");
        for ( let a = 0; a < allRemoveBtns.length; a += 1 ) {
            allRemoveBtns[a].addEventListener("click", removeItem);

        }

        function removeItem () {
            var div = this.parentElement;
            div.style.display = "none";
        }

        let numberProductPrice = Number(productPrice.slice(2,3));
        cartTotal += numberProductPrice;
        let totalValue = document.querySelector(".total");
        totalValue.textContent = `Total: $${cartTotal}`;

        function substractItemPrice () {
            cartTotal -= numberProductPrice;
            totalValue.textContent = `Total: $${cartTotal}`;
        }

    }

}
