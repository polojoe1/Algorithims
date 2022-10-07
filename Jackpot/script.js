// Create a function that takes in an array (slot machine outcome) and 
//returns true if all elements in the array are identical, and false otherwise. 
//The array will contain 4 elements.
// Examples
// testJackpot(["@", "@", "@", "@"]) ➞ true
// testJackpot(["abc", "abc", "abc", "abc"]) ➞ true
// testJackpot(["SS", "SS", "SS", "SS"]) ➞ true
// testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false
// testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false.

function testJackpot(result){
    return result[0]===result[1]&&result[0]===result[2]&&result[0]===result[3];
}

console.log(testJackpot(["@", "@", "@", "@"]));