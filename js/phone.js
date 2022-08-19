
function updatePhoneNumber(isIncrease){
    const phoneNumberField=document.getElementById('phone-number-field');
    const phoneNumberString=phoneNumberField.value;
    const previousPhoneNumber=parseInt(phoneNumberString);


    let  newPhoneNumber;
    if(isIncrease === true ){
        newPhoneNumber = previousPhoneNumber + 1;
    } 
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
     phoneNumberField.value= newPhoneNumber; 
     return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice= newPhoneNumber * 1278;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText=phoneTotalPrice;
    
}


document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newPhoneNumber=updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();

    // calculate phone total

    


    
})
 document.getElementById('btn-phone-minus').addEventListener('click',function(){
 const newPhoneNumber=updatePhoneNumber(false);
 updatePhoneTotalPrice(newPhoneNumber);
 calculateSubTotal();
 
 })


 

 document.getElementById('remove-phone-img').addEventListener('click',function(){
    const phoneNumberField=document.getElementById('phone-number-field');
    const phoneNumberString=phoneNumberField.value;
    const previousPhoneNumber=parseInt(phoneNumberString);

    const newPhoneNumber= previousPhoneNumber * 0;
    phoneNumberField.value=newPhoneNumber;
   

    const phoneTotalPrice= newPhoneNumber * 0;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText=phoneTotalPrice;
    
 })