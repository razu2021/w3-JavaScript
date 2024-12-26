/**==================== JavaScript Function call()======================= */



/**
 * 
 * 
 * Cal method use kore apni akti method likhte paren and pore eti jekono jaygay use korte paren 
 * sob function e ekti methods 
 * js sob function e ekti object methods 
 * jodi function js object er ekti method na hoy .. thaole function hocce global objects 
 * 
 */





/**  =================== What is this?====================
 * 
 * In JavaScript, the this keyword refers to an object.
 * The this keyword refers to different objects depending on how it is used:
 * ---------------
 * jokhn ekti method kono object er angso hisabe daka hoy tokhn this se object k nirdesh kore 
 * jokhn this kono mehtod or object er vitore na bahire theke call kora hoy tokhn seti global object browser  window object call kore 
 * 
 */





/**=========The JavaScript call() Method      
 * 
 * call() method hocce javascript er predifince ekti methods 
 * ektu function bivinno object er sathe use kora jay 
 * amara caile onek parameter nite pari abar caile arguments pass korte pari 
 * this er man valovabe select kora jay 
 * this-এর মান প্রতিটি অবজেক্ট অনুযায়ী পরিবর্তিত হয়েছে।
 */



const person = {
  fullName : function(age = 20){
    return this.fname + " " + this.lname ;
  }
}


const person1={
  fname: "md razu hossain ",
  lname: "Raj",
}

const person2 = {
  fname: "Jesmin Sultana ",
  lname : "Jui ",
}


// ========   use to call() methods ============

// use person1 ------------
let result1 = person.fullName.call(person1);
console.log(result1);


let result2 = person.fullName.call(person2);
console.log(result2);




/** The call() Method with Arguments    
 * 
 * 
 * 
 * 
 */

const customerOrder = {
  orderInfo:function(){
    // customer details 
    const customerName = this.name + "\n";
    const customerAge = this.age + "\n";
    const customerAddress = this.address + "\n";

    //product details 
    const productName= this.productname + "\n";
    const productModel= this.model + "\n";
    const productColor= this.color + "\n";
    const productDispaly= this.display + "\n";
    const productSsd= this.ssd + "\n";
    const productRam= this.ram + "\n";
    const productQuantity= this.quantitiy + "\n";
    const productPrice= this.price + "\n";



    return `${customerName} ${customerAge} ${customerAddress} ${productName} ${productModel} ${productColor} ${productDispaly} ${productSsd} ${productRam} ${productQuantity} ${productPrice}`;
  }
}

const customer ={
  name : "Md Razu Hossain Raj ",
  age : "23 years old ",
  address : "218 elephant road , Dhaka-1205" ,
}

const product = {
  productname : "Laptop",
  model : "M01C",
  color: "black",
  display : "15 Inch",
  ssd : 512,
  ram : "16gb",
  quantitiy : 1,
  price : 520000
}


/**   HOW TO CALL FUNCTION 
 * 
 * amara caile onekgolo object k function a arguments hisabe pass korte pari ,.. and function parameter hisabe rcv korte pari .. 
 * abar caile obek gulo object marge kore function call korte pari .. 
 *  
 * 
 */
// amara jodi avabe korte cai tahole undifine asbe ,, 

//console.log(customerOrder.orderInfo.call(customer)); // call customer information 
//console.log(customerOrder.orderInfo.call(product)); // call product information 


// ======  Marge object ===========
const margeOrder = {...customer, ...product};


console.log(customerOrder.orderInfo.call(margeOrder));




