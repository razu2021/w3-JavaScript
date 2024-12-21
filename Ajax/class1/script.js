

function loadData(){
    // crete a new object instance for change content 
    const xhr = new XMLHttpRequest();


    //  what to do after geting response or after get data what can you wnat to do 

    xhr.onload= function(){
        const container = document.getElementById('demo');
        container.innerHTML= xhr.responseText;    // xhr.responseText is a buiding function 
    }



    // prepard you request 
    xhr.open("GET","file/demo.text");

    xhr.send();

    
}