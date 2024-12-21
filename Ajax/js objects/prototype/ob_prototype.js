/*

============================  JavaScript Object Prototypes -==========================

* All JavaScript objects inherit properties and methods from a prototype.


objecter er moddhe je propety and methods ace sob e prototype theke inherits kore 


*/


function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    
  }
  
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
/* 
    tomi jodi cao akhane theke construtore er vitore new property add korte tahole tomi seta korte pabe na 
    jodi add korte hoy tahole tomi uporer moto kore korte paro 
*/
  //Person.nationality = "English";

  //Person.prototype.nationality = "English"; // caile evabeo add kora jay 

/* ======   */

console.log(myFather);




//Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects. 