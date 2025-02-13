
/* 
what is an array >is a collection of logically related Datasets
the default declaration of an array is done via square brackets
there are two  ways of declaring an array{
    using the square brackets

    let vehicle=["porche","mercedes","toyota","chevrolet"]

    using the array object constructor(new Array)

    let arrayTwo=new Array("porche","mercedes","toyota","chevrolet")
  arrays start count from index zero going upwards 
} */

  let vehicle=["porche","mercedes","toyota","chevrolet"]

  console.log(vehicle.length);
  console.log(vehicle[3]);//using this(the square brackets ) we can access the item at a forsaid index 
/*    types of arrays{
    homogenous arrays>>arrays that consist of elements with similar properties(belong to the same data type)
    let arrayOne=[1,2,3,4,5];
    heterogenous array>>we have elements of different categories(different data types)
    let arrayThree=[1,2,"eggs","buggati","laptop"]
   }

   multidimesnional arrays >>arrays that consist of arrays as elements an dalso consist of nested components  */

   let newArray=[
    ["porche","mercedes","toyota"],
    ["toyota","volvo","paris","Germany"],
    ["laptop","phone","watch","person",{
        name:"john",
        height:"6'2",
        weight:"70 kg",
        newStudents:["winnie","stephen","Sandra","shirleen"]
    }
    ]
   ]
   console.log(newArray[2][4].newStudents[3])

/*    array methods>>these are methods that can be used to perform operations on arrays */
let myArrayThree=["sneakers","jordans","opens","balenciaga"]

/* pop>>removes the last element in an array
push >>adds an element to the last index of an array 
unshift>adds a new element at the beginning of an array
shift>>removes the first element from an array */
console.log(myArrayThree);

console.log(myArrayThree.pop());//removes the last element in an array(balenciaga)

console.log(myArrayThree);

myArrayThree.push("balenciaga")//adds a new element to the end
console.log(myArrayThree);


myArrayThree.shift()//removes the first element in an array
console.log(myArrayThree);

myArrayThree.unshift("sneakers")//adds an element at the bigninning of an array

console.log(myArrayThree);


/* searching through an array */
/* includes>>return a boolean if the value been serached for is present
indexof>>return the first occurence of an Element
lastIndexof>>retuns the last index of the occurence of an Element
find>>satisfies a function to return the logic in params */
let myArrayTwo=["sneakers","jordans","opens","balenciaga","fruits","grapes","sneakers"]

console.log(myArrayTwo.includes("fruits"));//returns true if the value is present in the array 
console.log(myArrayTwo.includes("jumping"));//returns a false

console.log(myArrayTwo.indexOf("sneakers"));
console.log(myArrayTwo.lastIndexOf("sneakers"));

/* modifying or reorderring components in an array */

/* in here we look into methonds used to reorder or redesign arrays{
    slice>>returns a new array based on passed indexes where the slice will occur ,it does not alter the original array
    splice >>alters the parental array by adding or removing eleents from an array ,returns the same array(we have the
     count iof item been changed,the index of the item and perhaps the name of the replacement)
    sort>>ordering elements aplhabetically wether ascending or descending order
    reverse >>reverses an array {right turns to left and vice versa}
    join >>returns a string of elements in an array using a delimenter 
    concat>>joins two arrays together
    map >>retuns a new array after perfoming a function to it 
    arrays deconstructing

} */

    console.log(myArrayTwo);
    console.log(myArrayTwo.slice(1,3));
    
 console.log(myArrayTwo);
 
    console.log(myArrayTwo.splice(1,1));//jordans have been removed
    console.log(myArrayTwo);
    
    console.log(myArrayTwo.reverse().shift());
    console.log(myArrayTwo);
    

   console.log(myArrayTwo.sort());

/*    concat>>joins the two arrays and returns a new array
 */    

let arrayFour=["peter","stephen","shirleen","winnie","sandra"]

let answer=arrayFour.concat(myArrayTwo)

console.log(answer.sort());

    
/* deconstructing an array>>bypassing the noraml way of accessing array
 */
let [a,b,c,d,e]=[1,2,3,4,5]

console.log(d);

/* joining an array
 */
let arrayFive=["peter","stephen","shirleen","winnie","sandra"]

console.log(arrayFive.join(" "));

/* merging two arrays together using the dot syntax(continuation)
 */
let arraySix=[...arrayFive,10,20,30,40,100]
console.log(arraySix)