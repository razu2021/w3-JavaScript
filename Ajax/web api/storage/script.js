




let dataL = document.getElementById('localdata');
let dataS = document.getElementById('sessiondata');

// set local storage data 
function setLocalStorage(){
    localStorage.setItem("name", "Md Razu Hossain Raj ");
    dataL.innerHTML= "Local Storage Data has Seve !";
    dataL.style.color="green";
}


// Get local storage data 

function gettLocalStorage(){
   const data =  localStorage.getItem("name");
   dataL.innerHTML= data;
   dataL.style.color="black";
   dataL.style.textTransform="Uppercase";

}



/* ================   Save session storage data =============== */


// set session storage data 
function setSessionStorage(){
    sessionStorage.setItem("name", "Md Razu Hossain Raj ");
    dataS.innerHTML= "Session Storage Data has Seve !";
    dataS.style.color="green";
}


// get session storage data 
function getSessionStorage(){
    const datas= sessionStorage.getItem("name");
    dataS.innerHTML= datas;
    dataS.style.color="green";
}


