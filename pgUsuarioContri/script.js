//cart 

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//abrir carrinho

cartIcon.onclick = () => {
    cart.classList.add("active");
}

//fechar carrinho

closeCart.onclick = () => {
    cart.classList.remove("active");
}

//carrinho função

if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

// fazendo funcionar

function ready(){
    //remover itens do carrinho
    let removeCartButtons = document.getElementsByClassName("cart-remove")
    console.log(removeCartButtons)
    for (let i = 0; i < removeCartButtons.length; i++){
        let button = removeCartButtons[i]
        button.addEventListener('click', removeCartitems)
    }
    // mudança na quantidade
    let quantityInputs = document.getElementsByClassName("cart-quantity");
    for (let i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i];
        input.addEventListener("change", quantityChanges);
    }
}

//remover itens do carrinho

function removeCartitems(event){
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

//quantity changes

function quantityChanges(event){
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}

//atualizar total

function updatetotal(){
    let cartContent = document.getElementsByClassName("cart-content")[0];
    let cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i=0;i < cartBoxes.length; i++){
        let cartbox = cartBoxes[i];
        let priceElement = cartBox.getElementsByClassName("cart-price")[0];
        let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        let price = parseFloat(priceElement.innerText.replace("$", ""));
        let quantity = quantityElement.value;
        total = total + (price * quantity);

        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    }

}

function redirecionar() {
    window.location.href = "../pgConfirm/index.hmtl";
  }