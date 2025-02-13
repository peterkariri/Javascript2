/* a functionn is a block of resusable code that is written to perform a specific task 
the symbol for a function syntax is {
    CALL THE FUNCTION >>WE CALL THE FUNCTION BY TYPING THE NAME OF THE FUNCTION AND HAVING BRACKETS AT THE END 
    WE CAN PASS ARGUEMENTS TO THE FUNCTION IN THOSE BRACKETS WHICH ARE REAL LIFE VALUES THAT ARE PASSED TO THE PARAMETER */
/*     function_name(parameters){
    // CODE GOES HERE
         }
        function_name()
   */
/* }
FUNCTIONS CAN BE DECLARED IN THREE WAYS NAMELY{
    FUNCTION DECLARATION{
        THIS REFERES TO THE NORMAL WAY OF DEFINING A FUNCTION WHERE WE HAVE THE FUNCTIN NAME ,THE PARAMETERS,THE CODE BLOCK AND ARGUMNETS 
        PASSED WHEN CALLING THE FUNCTION.only Function declaration support hoisting (hoisting referes to a technique where a function 
            can be called before it is even read
        )

            function getSum(num1,num2){
                return num1*num2
            }
            getSum(4,6)
    }
    FUNCTION EXPRESSION{
        refers to assiging a function to a variable that can be called later called to execute,we remove the name of the function and use 
        the name of the variable

        let sumPlus=function(num1,num2){
            return num1*num2
        }
        sumPlus(6,9)

    }
    ARROW FUNCTIONS(ECS 6){
        this referes to the shirthand notation in which functions are created using the arrow operator{offers
            flexibility in that it provides neat code and direction execution of the function
        }
        implemented by eliminating the function name and be left with the brackets and then replace the name with the arrow marks (equal sign and greater than symbol)
        if you have one parameter there is no need for brackets and if your code is one line there is no need for curly brackets 
        we soter them in a variable at first and then call them later

        let arroSum=()=>{
            return 5*6
        }
    }
}
 */


function getSum(num1,num2){
    return num1*num2
}
console.log( getSum(4,6));



let sumPlus=function(num1,num2){
    return num1*num2
}
console.log(sumPlus(6,9));



let arroSum=()=>{
    return 5*6
}
console.log(arroSum());

/* the next xoncwpt wwe will look into is the immediatley invoked function expression (IIFE)
this are functions that are made and called immediately after they are created
this is done by enclosing the function in brackets and calling them with an empty bracket,(void) at the end of the function
 */

(function greeting(){
    console.log("hello world");
    
})();

(()=>{
    console.log(5*6);
   
})();

/* we pass two main things to a function {
    parameters >>placeholders for values:they are passed by reference or by values
    arguments>>real wolrd entities passed by the user to the function which occupy the parameters and the function is executed with them
} */

//callback functions
//hign order function
//closure