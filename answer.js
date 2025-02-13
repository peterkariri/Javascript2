function calculate(num1,num2,callback){
   return callback(num1,num2)
}
function addition(a,b){
    return a+b;
}
function subtraction(a,b){
    return a-b;
}
function multiplication(a,b){
    return a*b
}
function division(a,b){
    return a/b
}
console.log(calculate(5,6,addition));
console.log(calculate(9,7,subtraction));
console.log(calculate(6,7,multiplication));
console.log(calculate(4,2,division));



//function that repeats(can be achieved by a loop) an action 
function repeatAction(message,callback){
    for (let  i=0; i<3; i++) {
          callback(message)        
    }
}
function printMessage(message){
    console.log(`${message}`);
    
}
repeatAction("hello class this is callbacks",printMessage)

function filterArray(arr,callback){
    return arr.filter(callback)
}

function isEven(x){
   return x%2===0
}
function isGreaterThanTen(x){
    return x>10
}
let numbers=[2,3,5,6,8,20,10,3,6,8,9,100,299,89,45,35,6,5]
console.log(filterArray(numbers,isEven));
console.log(filterArray(numbers,isGreaterThanTen));
