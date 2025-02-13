/* a callback is a function that has been passed as an argument to another function 
the callback is passed as a parameter to the preceding function 
{the callback is the function that we wnt to pass}
*/


function greetings(callback){
    //the content of this code executes first 
    //250000lines of code >>which would take more time and thats why we use tools like call backs and asynchrouns code
    console.log("Hello, World!");
    callback()
    //the callback function executes after 
}

//callback function
//20 lines of code 
function goodbye(){
    console.log("Goodbye, World!");
}
greetings(goodbye)


//using set timeout to check for a callback
//parent function
function proseccUserInput(callback){
    let name="winnie"
    callback(name)
}
//callback function
//this is asynchrounus callback
/* the set timeout function>>this is a delay method that takes in a function and a time stamp delay (ms)
 */function greet(name){
    console.log("hello class welcome to javascript 101");
    
    setTimeout(()=>{
        console.log(`hello ${name}`);

    },3000)
    
}
proseccUserInput(greet)

/* callbacks with asynchronous fetch */
//parent function with that has the callback parameter
function fetchData(callback){
    setTimeout(()=>{
        let data={
            name:"Stephen",
            age:25,
            occupation:"Software Engineer",
            hobbies:"coding"
           }
           callback(data);//where we call the callback function
    },4000)
   
}
function displayData(data){
  console.log(`I am ${data.name} with an age of ${data.age},i am a ${data.occupation} who is interested in ${data.hobbies}`);
  
}
fetchData(displayData)

function calculates(num1,num2,callback){
    return callback(num1,num2)
}
function calculateSum(a,b){
    return a+b
}
function calculateMinus(a,b){
   return a-b
}
function calculateMultiple(a,b){
    return a*b
}
console.log( calculates(6,7,calculateSum)
);
console.log(  calculates(10,4,calculateMinus)
);
console.log(calculates(6,7,calculateMultiple)
);
///question two
function repeatAction(message,callback){
    for (let i = 0; i<3; i++) {
        callback(message);
        
    }
    
}
function message(message){
    console.log(`${message}`);
    
}
repeatAction("hello there i am repitition",message);

/* filters an array using callbacks  */

function filterArray(arr,callback){
    return arr.filter(callback)
}
function isEven(x){
    return x%2===0
}
function isGreaterThan(x){
    return x>10
}
let numbers=[2,3,5,6,8,6,4,6,5,8,9,10,24,5,5775,76,85]
console.log(filterArray(numbers,isEven));
console.log(filterArray(numbers,isGreaterThan));

