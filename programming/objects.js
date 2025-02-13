/* an object is a collection of properties where each property consists of a key(name) and a value 
they help and enable us to stroe and manage related data and functions {
    an example of an object is console 
    and a function stored inside is log()
}
oject declaration is done via four ways namely{
    object literal 
    constructor function
    class
    object.create()Method
}

1:object literal method:have a variable that will denote the name of the object 
then declared the curly brackets that will contain the object 
inside this curly bracets have the key and value proprty  separated via a colon and to each pther via a comma */
/* an object is defined by curly brackets */
/* we use the bracket notation when we want to select values stored in a variable or properties that have special characters
 */
let person={
     firstName:"Stephen",
     lastName:"samlinks",
     age:30,
     fullName:function(){
        return `The name of the scholar is ${person.firstName} ${person.lastName} who is happy`;
     }
}
/* accessing object:they are accessed using the dot notation or bracket notation */
console.log(person.firstName);
console.log(person["firstName"]);
console.log(person["age"]);
console.log(`The name of the scholar is ${person.firstName} ${person.lastName} who is happy`);
//returnning a value
console.log(person.fullName());

/* how to add an object we use different methods ,the dot notation is one of the mostly used method 
here is an example 

you type in the name of the object and the property after the dot then the value of the property
as you can see i have the new key and value 

using the square brackets is for elements that are either special or have a variable or function assigned

*/

person.profession="Teacher"

console.log(person);






