function getTextElementValueById(elementId){
    const phoneTotalElement=document.getElementById(elementId);
    const currentPhoneTotalString=phoneTotalElement.innerText;
    const currentPhoneTotal= parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value){
    const subTotalElement=document.getElementById(elementId);
    subTotalElement.innerText=value;
}
function calculateSubTotal(){
    const currentPhoneTotal=getTextElementValueById('phone-total');
    const currentCaseTotal=getTextElementValueById('case-total');

    const currrentSubTotal= currentPhoneTotal+ currentCaseTotal;
    setTextElementValueById('sub-total',currrentSubTotal);
    

    // calculate tax

    const taxAmountString= (currrentSubTotal * 0.1).toFixed(2);
    const taxAmount=parseFloat(taxAmountString);
    setTextElementValueById('tax-amount',taxAmount);

    const finalAmount= currrentSubTotal+ taxAmount;
    setTextElementValueById('final-total',finalAmount);

}
