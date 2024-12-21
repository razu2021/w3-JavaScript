// find chaild elements 
function findChild() {
    const container = document.getElementById('find_child');

    // Use firstElementChild to get the first element node
   // const firstChild = container.firstElementChild;
    const lastchild = container.lastElementChild;

    console.log(lastchild);
}













function mydetails(){
    let det = document.getElementById('details');
    let hides = document.getElementById('hide');
    let result =  det.nextElementSibling;
    //let show = result.innerHTML="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum optio ipsum sapiente maxime voluptatem suscipit officiis, alias atque quia voluptatibus?";

    if(hides.classList.contains('hide')){
        hides.classList.remove('hide');
        hides.classList.add('sh');
    }else{
        hides.classList.remove('sh');
        hides.classList.add('hide');
    }
}




// submenu 


function Mysubmenu(){
    const nextElementSibling = document.getElementById('pages').nextElementSibling.innerHTML;
    console.log(nextElementSibling);
}









// button click to next sibling show 
function myButton1() {
    const button = document.getElementById('button1');
    
    // Access the next sibling element
    const nextSibling = button.nextElementSibling;
    
    // Check if the next sibling exists
    if (nextSibling) {
        const result = nextSibling.innerHTML; // Get the content of the next sibling
        console.log(result);
        alert(`Next sibling content: ${result}`);
    } else {
        console.log("No next sibling found.");
        alert("No next sibling found.");
    }
}