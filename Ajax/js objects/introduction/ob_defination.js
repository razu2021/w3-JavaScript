
/*====================   JAVASCRIPT OBJEC DAFINATION =================== */



/*==========  tomi caile 4 vabe object create kkorte paro 

    *  object literal use kore korte paro 
    *  new keyword diye create korte paro 
    * assign kore create korte paro 
    * 
    * Note: tobe jodi literal use korar option thake tahole ata use kore objecet create korari valo hobe 
*/



// JavaScript Object Literal
//==============================  eta hocce js literal   avabe likhte hoy 

const create1 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};


// how to create object with new keyword 
/*
 Create an empty JavaScript object using new Object(), and add 4 properties:
 // Create an Object
const person = new Object();

 */

const create2 = new Object(); 

    create2.name = "new objects";



/* asign object use  */

const create3= {};
create3.name="razu";
create3.age = 23 ;





/**================================================================
 *  Create a literal object example here .. 
 *  how to create object 
 * how to show result in consol.log
 */


const person1 = {
    personName :  "Md Razu hossain raj ",
    persionAge :  23,
    personEyeColor: "black",
    personCountry: "Bangladesh " // akhane koma use kore korte hoy
}

console.log(person1);// ekhane ekti object return korbe 
console.log(person1.personName); // amra caile value gula access korte parbo 



let result = "";  // ekhane amara akti empty string nilam jekhane value pore assign kore dibo 

for(let x in person1){
    result +=  person1[x]  // get the object value one by one 
};

console.log(result); // show result inside of console 












/*================  Object Constructor Functions  ==================== */
/*
    * Sometimes we need to create many objects of the same type.

    *  To create an object type we use an object constructor function.

    * It is considered good practice to name constructor functions with an upper-case first letter.

Note : tomar jodi akoi dhoroner onek gula object dorkar hoy tahole ba akoi dhoroner data tahole tomi 
tomi object construtor function use kore korte paro ..
exapmle : studet data .. alada alada hote pare  so incase tomi student name ekti obje create kore felte paro 
and akhane value change hobe amon kico 

*/

 
function studnet1(name,age,Class,role){ // this is a construtore function 
    this.studentName = name;
    this.studentAge = age;
    this.studentClass = Class;
    this.studentRole = role;
    // create a constructor function is here 

}

// asssign the value outside of construction fucntion  here are deferent value 
const razu = new studnet1("Md Razu Hossain Raj ",23,10 , 2025);
const jui = new studnet1("Jesmin sultana jui ",20,10 , 2015);

console.log(jui.studentName); // cal the function 
console.log(razu.studentName); // call the function 
//console.log(razu);

//  show resutl use in for in loop 
for(let studentinfo in razu ){
    console.log(razu[studentinfo]);
}





// The most common way to protect an object from being changed is by using the const keyword.

//With const you can not re-assign the object, but you can still change the value of a property, delete a property or create a new property.

////////////////////////////////////////////////////////////////////////////////////////////
