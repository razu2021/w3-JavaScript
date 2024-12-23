/**==============     avaScript Function Parameters   ================ */


/** NOTE: --------------------
 *  function parameter and argument check na kore e perform korte pare .. or paramitter ki ace seta se check korbe na  but jokhn condition check korbe tokhn condition onujai kono error aste pare 
 * function paramiter function () er viote thake or likhte hobe 
 * akhane function arguments hocce real value .. jeta parameter rcv kore kaj kore 
 * function parameters kono datatype check kore na 
 * ki arguments dicci setao se check korbe na but perfrome kkorbe 
 * apni koto gulo argument diccen js setao check korbe na .. but perfrome korbe ,, jodi check korte can tahole menualy check kore dekhte  hobe 
 * apni caile defualt parametes set kore dite paren  ... jodi kono argument missing thake tahole 
 * argument are passeed by value ..  argument acctual value ta pass kore ,. refarenc pass kore na 
 * 
 */







/** ===========  Function parameters ===============
 * 
 tomi jodi user theke kono input or function er vitore bahire theke kico value or kono jinis niye kaj korte caccen , tar junno apni function er vitore jekono name diye paramitter nite paren and bahire theke sei parameter er value  pass korte paren function call korar somoy ,, er por function body er vitore giye apni j kaj korte caccen ta korte paren .. exmaple 
 ------------------------------------------------------------------
 ekhane a,b name diye 2ta parameter nilam and eder multiplication dekhbo 
  function call korar soomoy function er arguments 10,15 diye dilam ,,, apni caile string or number jekono kico set kore dite paren ,, but apnar likha condition onugayi kaj korbe 
 */

 function sum(a,b){
    return a * b ;
 }
 let result = sum(10,15);  // passed the arguments is here 
 console.log(result);


/**  Default Parameter Values
 * 
 * 
 * mone kori amar 2 ta parameter ace but jokhn ami argument pass korbo tokhn 2ta korte hobe ,., but apni jodi ekta arguments pass koren tahole NaN or error aste pare .. so amara caile defualt  vabe paramitter ekti value set kore dite pare . eti es6 er por theke support korbe  example ................
 */


function mysum( x = 5,y = 6 ){
    return x * y;
}
let myResult = mysum(10,10);
console.log(myResult);





function sum2(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  let array=[10,20,30,40,50,60];
  let sumResult = sum2(...array);
  let sumResult2 = sum2(10,20,30,40,50,60);


console.log("Arguments sum Result " +sumResult2);
console.log("Array Sum Result " + sumResult);





