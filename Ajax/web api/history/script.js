
/* 
 History method is herr 
    1. back()
    2. go(-2)
    3.forward()
    4. length ()

*/




// forward button .. after clik this button .. we will go to forard links 

function forwardButton(){
    window.history.back();
}


function backButton(){
    window.history.back();
}


function jumpButton(){
    window.history.go(1);
}



console.log(window.history.length);
