/**
// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
Object.defineProperties(object, descriptors)

// Accessing a Property
Object.getOwnPropertyDescriptor(object, property)

// Accessing Properties
Object.getOwnPropertyDescriptors(object)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Accessing the prototype
Object.getPrototypeOf(object)



 */



const person = {
    name :"md razu hossain raj ",
    age : 23 ,
    country :"Bangladesh",
}

console.log(person); // simple output 



/**==Adding or changing an object property  JavaScript Object.defineProperty()==== */

Object.defineProperty(person, "year",{value :2022});
console.log(person.year);




/**  Changing a Property Value */

Object.defineProperty(person,"country",{value: "India"});
console.log(person.country);



// delet object propety 
delete person.age;
console.log(person);