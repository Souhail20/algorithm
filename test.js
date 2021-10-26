/* At this checkpoint, you are asked to write an algorithm that read a sentence, which ends with a point, character by character
--The length of the sentence (the number of characters).
--The number of words in the sentence (assuming that the words are separated by a single space).
--The number of vowels in the sentence.
You have to keep in mind that: 

Each character will be treated separately.
The last character is the point.
Use three variables as counters.*/
function calculpoint(str){
    const vowels = ["a", "e", "i", "o", "u"]
    count=0
    for (let j of str.toLowerCase()) {
        if (vowels.includes(j)) {
          count++;
        }
    }
    console.log("str contient "+str.length+" caracter"+" and contient "+str.split(" ").length+" word "+"and "+count+" voyelles")
    }calculpoint("souhail khaled ahla wnk cv labes ahla wnk ")