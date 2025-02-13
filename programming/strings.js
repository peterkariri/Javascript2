/* strings are a sequence of characters that make up text 
they are declared in three ways {
    using single quotes 
    let song='i love pop songs'
    using double quote
    let songTwo='i love trap songs'
    sstring literals >>declared via backticks 

    let songThree=`i love songs by migos`

} */

/*     string concatenation{
        to concatenate means to add one or more strings together 
        we use the addition sign with a delimeter to space the strings
        we can use a temporal string by passing the string vsriable with the dollar symbol preceding enclosing the strig name with curly brackets
    } */

        let day='monday'
        let month="January"
        let year="2024"

        let answer= "Today is "+" "+day+" "+month+" "+year

        console.log(answer);

        let answerTwo=` Today is ${day} ${month} ${year}`
        console.log(answerTwo);
        
/*         STRING METHONDS */

/*    string.length>>used to tell the lenght of a string 
 */   

let sentence="i am very happy to be in session today"

console.log(sentence.length);


/* toUpperCase{
    used to tranform string to uppercase
}
 */
   
console.log(sentence.toUpperCase());
/* 

to lowercase{
    used to tranform the string trext to lowercase
} */

    console.log(sentence.toLowerCase());
    
/* charAt{
    used to uotput the charater at a specified index
}

 */

console.log(sentence.charAt(17));

let sentenceTwo="i am very happy to be in session today"
/* indexOf{
retirns the substring at a specified index
} */

console.log(sentenceTwo.indexOf("session"));


/* includes()>>searches a string to find out if the specified keyword is niclusive of the string set 
retrns a boolean wehter true or false that somethoing is indeed present in the string
*/

console.log(sentenceTwo.includes("today"));
console.log(sentenceTwo.includes("tomorrow"));

/* startsWith and EndsWith 
startsWidth>>checks if a string starts with a specified condition or word
Endswith >>checks if a string Ends with a specified condition or word

*/

let sentenceThree="i am very happy to be in session today"
console.log(sentenceThree.startsWith("very"));
console.log(sentenceThree.endsWith("today"));

/* slice>>it extracts a section of a string and retiurns a new string 
it has the startpoint and endpoint index

slice will always accept negative indexes 
by default a slice will start the counting from the left side 
but with a negative index it is the latter
 */
console.log(sentenceThree.slice(17,25));
console.log(sentenceThree.slice(17,-12));

/* 
substring()>>it uotputs a substring but does not take negative values {but willonly use a positive value if two are provided and the signs are opposite}
if it takes negative vaue it return -1 by default 
it has the start and end index where it is going to perform the slice to outputt the substring
*/

/* console.log(sentenceThree.substring(2,14)); */
console.log(sentenceThree.substring(2,-14))


/* replace()>>it replaces the first occurence of a siubstring in a string of word withthe specified string
 */
let example="i want to go out to play  and also play and play" 


console.log(example);
console.log(example.replace("play", "work"));

/* replaceAll()>used to replace all the occurences of a substring oin a String */
console.log(example.replaceAll("play", "work"));

/* split()>this methond is used to split a string into an array and it uses a delimeter to do the split
the delimeter is the quotes and the sapceing between the quotes controlls where the array will be broken at
also the delimeter can be a word */
console.log(example.split(""));

/* 
search>>uses RegExp(regiular expression){
    regex are shorthand notations used to give shortcuts to a compiler 

    g>search globally
    ^>start from the top
    /the beginning of regex
    / the beginning and end of regex/
    *{search all }
    ~

} */

    let sentenceWeather='today the rain brought mainly pain due to flood such as cains when he killed Abel which yield less gains'


    console.log(sentenceWeather.search(/ain/));
/* 
    we use the match method to know the number of times a partiucular word has been repeated 
    it outputs an array of the word that have been repeated anbd the number oif times can be delivered
     */

    console.log(sentenceWeather.match(/ain/g));
    

    console.log(sentenceWeather.toUpperCase().split("PAIN"));
    