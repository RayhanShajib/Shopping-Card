//List Removing Function
function remove(id){
    document.querySelector(id).style.display = 'none';
};
// List One Price Increament
const increaseBtn1 = document.querySelector('#increaseBtn1');
increaseBtn1.addEventListener('click', ()=>{
    calculation('#input1', '#list-1-price', 1219, 1);
    btnBehavior('#input1','#decreaseBtn1')
});
// List One Price Increament
const decreaseBtn1 = document.querySelector('#decreaseBtn1');
decreaseBtn1.addEventListener('click', ()=>{
    calculation('#input1', '#list-1-price', -1219, -1);
    btnBehavior('#input1','#decreaseBtn1')
});
// List One Price Increament
const increaseBtn2 = document.querySelector('#increaseBtn2');
increaseBtn2.addEventListener('click', ()=>{
    calculation('#input2', '#list-2-price', 59, 1);
    btnBehavior('#input2','#decreaseBtn2')
});
// List One Price Increament
const decreaseBtn2 = document.querySelector('#decreaseBtn2');
decreaseBtn2.addEventListener('click', ()=>{
    calculation('#input2', '#list-2-price', -59, -1);
    btnBehavior('#input2','#decreaseBtn2')
});
// Calculation Function
function calculation(inputSelector, priceSelector, price, increamentValue){
 //Input Value Increament
    const inputValue = document.querySelector(inputSelector).value;
    const inputQuantity = parseFloat(inputValue) + increamentValue;
    document.querySelector(inputSelector).value = inputQuantity;
//Price Value Increament
    const priceValue = document.querySelector(priceSelector).innerText;
    const priceNumber = parseFloat(priceValue) ;
    const priceAmout = priceNumber + price;
    document.querySelector(priceSelector).innerText = priceAmout;
//Subtotal Value Increament
    const subTotalValue = document.querySelector('.subTotalValue').innerText;
    const subTotaAmout = parseFloat(subTotalValue) ;
    document.querySelector('.subTotalValue').innerText = subTotaAmout + price;
//Total Value Increament
    const totalValue = document.querySelector('.totalValue').innerText;
    const totalAmout = parseFloat(totalValue) ;
    document.querySelector('.totalValue').innerText = totalAmout + price;
}
//Button's Behavior Function
function btnBehavior(inputSelector, button){
    const decreamentInputValue = document.querySelector(inputSelector).value;
    const decreamentInputQuantity = parseFloat(decreamentInputValue);
    if(decreamentInputQuantity >= 1){
        document.querySelector(button).removeAttribute('disabled')
    }
    else if(decreamentInputQuantity < 1){
        document.querySelector(button).setAttribute('disabled','')
    }
}




