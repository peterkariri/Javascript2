sentence = "Coding is fun and rewarding"
console.log(sentence.split(" "));

let lyrics = "Twinkle twinkle little star, how I wonder what you are"
console.log(lyrics.search(/twinkle/g));
console.log(lyrics.match(/twinkle/g).length);

let email = "john.doe@gmail.com"


firstName=email.split(".")[0]
console.log(firstName);//john

secondName=email.split('.')[1]
console.log(secondName);//doe@gmail


finalAnswer=secondName.split("@")[0]
console.log(finalAnswer);//doe


let namePerson=`${firstName} ${finalAnswer}`//concatenation

console.log(namePerson);
