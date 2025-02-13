function addNumber(num1,num2){
    return num1+num2
}
console.log(addNumber(10,9));

let toUpperCase=function(text){
    return text.toUpperCase();
}
console.log(toUpperCase("hello there ,this is functions in javascript"));


/* ...numbers>>refers to continue looping through my numbers array
 */
let largestNumber=(numbers)=>{
    return Math.max(...numbers)

}


console.log(largestNumber([3,6,7,8,9,10,26,43,100000,34,56,78,9,1]));



/* let largestNumber = (numbers) => {
    let max = numbers[0]; // Initialize max with the first element
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]; // Update max if current number is larger
        }
    }
    return max;
};

// Example usage
console.log(largestNumber([3, 7, 2, 9, 5])); // Output: 9 */


function countWords(sentence){
    return sentence.toUpperCase().split(' ').length
}
console.log(countWords("hello there i am learning javascript"));


function joinTwo(arr1,arr2){
    return [...arr1,...arr2]
}
console.log(joinTwo([1,2,3,4],[9,8,7,6]));

/* using concat */
function joinThree(arr1,arr2){
    return arr1.concat(arr2)
}
console.log(joinThree([3,4,5,6],[9,8,7,6,5]));







