



function Checkvalidation(){
    // find input feild id 
    const inputObject = document.getElementById('input1');








// value missing validation  cumsom mssagees validation 

    if(inputObject.validity.valueMissing){
        document.getElementById('show').innerHTML= inputObject.setCustomValidity("Input value is required !");
    } else if(inputObject.validity.rangeOverflow){
        document.getElementById('show').innerHTML= inputObject.setCustomValidity("input value must be less than 300");
    } else if(inputObject.validity.rangeUnderflow){
        document.getElementById('show').innerHTML= inputObject.setCustomValidity("input value must be gratter than 100");
    }






    if(!inputObject.checkValidity()){
        document.getElementById('show').innerHTML= inputObject.validationMessage;

    }



}


