// Tip amount: take value user inputted from Bill amount and multiply it 
// by the value of percentage
// function is ran on the click of button
function getTip(){
    let tip = document.getElementById('bill').value * document.getElementById('percent').value * 0.01;
    // set to two decimal points
    tip = tip.toFixed(2);
    //Add dollar sign to beginning
    // parsefloat for addition instead of concatenation
    let fullAmnt = parseFloat(tip) + parseFloat(document.getElementById('bill').value);
    fullAmnt = fullAmnt.toFixed(2);
    // show tip and full amounts with innerhtml
    const tippy = document.getElementById('tipAmount').innerHTML = tip;
    const fully = document.getElementById('totalBill').innerHTML = fullAmnt;
}
