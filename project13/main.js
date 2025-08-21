const btne1 = document.getElementById('calculator-btn');
const billinput = document.getElementById('bill');
const tipinput = document.getElementById('tip');
const totalAmount = document.getElementById('total');


function calculateTotal() {
    const billvalue = billinput.value;
    const tipvalue = tipinput.value;
    

    const totalvalue = billvalue * (1 + tipvalue / 100);
    totalAmount.innerText = totalvalue.toFixed(2);
    console.log(totalvalue);

}

btne1.addEventListener("click", calculateTotal);

