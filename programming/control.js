/* these are used to control the flow of logic in a program

the first control structure we will llook into is the if statements 

if {
    it is used to check a condition and if the condition is true then it will execute the code inside the if block
}
if(condition){
    execute the code block if the condition is true
} */

    let age=19
    /* if(age>18){
        console.log("you are old enough");
        
    }
 */
/*     if ...else{
        it runs the code inside the if block if the condition is met and is true else it retruns the default value in the 
        else block which is a false
    } */
        age=20
        if(age>18){
            console.log("you are old enough");
            
        }
        else{
            console.log("you are a child go to sleep");
            
        }

       /*  if ..else if ...else if ...else(nested else if){
            we nest logic in else if statements and apply the to display logic in certain breakoints:if a condition in that else if is satisfied it 
            runs the code block inside it else it goes to the other else if and looks for the result to true and if not it goes to the next 
            progressively until it reaches the defaul else if no condition was met based on the argument
        } */

            let marks=60;

            if(marks>=70){
                console.log("you scored an A ,you can continue to the next year");
                
            }
            else if(marks>=60){
                console.log("you scored a B ,you can continue to the next year");
                
            }
            else if(marks>=50){
                console.log("you scored a C ,you can continue to the next year");
            }
            else if(marks>=40){
                console.log("you scored a D ,you can continue to the next year but work hard next time");
            }
            else{
                console.log("you scored an F hence you need a repeat");
                
            }

            /* the ternary operator{
                it is used in place of the if ..else statement
                it has two part where the first part executes if the condition is true else the default part will executes

                the condiution is decalred where it terminates with a question mark ,the logic to be run once the condition is true 
                then a colon to separet the truthy part and false partthe right side is the false part and left is the truthy part 
                ternary operators we should have a variable 
            }
                  */
/*   checking if a number is even or odd
 */         
            let number=77
            let result=number%2==0?"the number is even":"the number is odd";
            console.log(result);
            
/*            switch case condition  */
/* switch statements are used to check the value of a condition and execute that condition once the value are true
its like a nested if else 
we uses cases to repreesent the different logics to be implemented once a condition is met 
we use the break key word to go fromone condition to the next and 
the default keyword to represent the default condition if none of the cases are met
if you dont break form one condition you can end up in an infinte loop 
syntax:
switch(expression){
    case1:
    logic code;

    break;
    ...

    caseN:
    logic code;
    break;
    ..
    default:
        code to execute
} */

        let day="sunday"

        switch(day){
            case "monday":
                console.log("today is a shinny day");
                break;
             case "tuesday":
                    console.log("today is a cold day");
                    break; 
                    
            case "thursday":
                        console.log("today is a rainny day");
                        break;   
                        
            case "friday":
                            console.log("today is freezing hot ");
                            break;    
                            
            default:
                console.log("it is a weekend so its time for some free ice cream due to the hot weather");
                                
                
        }
/*    LOOPS IN CONTROL STRUCTURES      
loops are used to execute a block of code repeatedly for a specified number of times under a particular condition 
 */
/* for loop >>it is a oop that is used for a number of times in which the iteration is know {\it has the following 

    initialization>>we have the variable initialization (the let and var keyword)
    the condition >how many times the particluar code will run 
    the increment/decrement of the loop (++,--) enables one tomove from one section to another (eg:an iteration )
    for(let i=0;i<10;i++){
        where the code goes here
    }
} */
/* 
    for(let i=0;i<10;i++){
        console.log(i);
        
    } */

   /*  while loop>>executes a block of code as long as the condition is been satisfied 

    in this case we use an increment i++ to terminate the condition to prevent an infinite loop  */

    let i=1;

    while(i<=10){
        console.log(i);
        i++;
    }

  /*   th do ..while loop{
        it executes first without having prior knowledge of the condition under execution 
        for this it always executes oe time evne if the condition is false :this is because the condition comes after the 
        the code run nig in the loop
    } */

        let n=1;
        do{
            console.log("hello class");
            n++;
            
        }while(n<=20)

     /*  jump statements:these allow you to alter the normal flow of exectuing a code block
      they include      break,continue,return.
      break{
        thisis used to break /terminate a loop out of the normal code flow when a condition is met or where the user wants 

      } */

      for(let x=1;x<7;x++){
           if(x==3){
            break;
           }
        console.log(x);
        
      }
/*       the continue jumps statement >continues with code excection form a specified point */
     for(let x=1;x<7;x++){
        if(x==6){
          continue;
        }
       console.log(x);
 
 
    }

/*     the eturn statement is used in functions to exit the function and return a value */

function square(num){
    return num*num*num;
}
console.log(square(4));



/* exception handling (try...age.catch ...finally)
try >>contains the code that is to be run and might contain an console.error;
catch>>it hanldes the error gracefully and dispalys it to the console.
finally>>outputs a message ireegardless if the code run seccessfully or it encountered an error  */


try {
    let result = 10 % 100000000;
    console.log(result);
} catch (error) {
    console.log("An error occurred:", error.message);
}
finally{
    console.log("alwayas a pleasure doing business with you ");
    
}


/* prevents the program from crashing by catching the errors 
it provides meaningful  error messages 
 */


