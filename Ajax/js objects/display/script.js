//**================   Js Object Display ============ */




const Person = {
    fname :"Md razu Hossain",
    lname : "Raj",
    age : 23 ,
    eyeColor: "Black",
    hobbe : ["footboll","crecket"],
    skill:["web deisnger" ,"Web Developer ","Graphics deisnger"],
    state:{
        village: "Sawallpara",
        word : 6,
        union : 3,
        post: "cadgaone",
        upName: "Vadsha",
        dis: "dhaka",
        fPlace:["placeone","place2","place3"],
    },
    fatherInfo:{
        name: "Md Abdur Rashid",
        age: 45,
    },
    motherInfo:{
        name: "marium",
        age: 42,
    },

}

let myObj = Object.values(Person);

for(let x of myObj){
    console.log(x);
}




console.log(myObj);
let infos = document.getElementById('demo1').innerHTML=myObj;







