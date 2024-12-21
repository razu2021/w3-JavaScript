
/*============  Object.assign() method use ================== */


/**
    *   object concate korte pari 
    *  target is modified directly
    *  terget object er property overwritte korte pari 
    *   object clone korte pari 
    * Changes to clone won't affect original.
    * new property add korte pari 
    * Multiple source objects can be passed.
    * 
    * 
        * Merge Objects	Object.assign(target, source)
    Clone Object	Object.assign({}, source)
    Add Properties	Object.assign(target, { key: value })
    Default Settings	Object.assign({}, defaults, config)
 */


// Crerate a target objects 
const targetObj = {
  name : "Target objects ",
  age: 50,
  eyeColor: "blue"
}

console.log(targetObj);

// crate a source object 
const source = {
  name1 : "source objects ",
  eyeColor1: "red",
  age1 : 23,

}

// assing Source object to Target objects 
let result  = Object.assign(targetObj,source);

// showing this result 

console.log(targetObj);






/**
 *  create a defualt objects for used ==========
 */

const defualt = {
  name : "Defualt Name ",
  age : 10 ,
  Country: "bangladesh",

}




/**
 *  Returns an array of the property values of an object
      Object.values(object)
 * 
 */
let values = Object.values(defualt);  // get object value directly 

for (let value of values) {
  console.log(value);
}












