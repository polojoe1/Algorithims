//Create a standalone function that accepts a string
//and an integer, and rotates the characters in the
//string to the right by that amount.
//this one must be done without built in methods
//("Did I shine my shoes today?", 9) ->
//"es today?Did I shine my sho"

//myCode
const rotateString = (str, num) => {
    var newStr = '';
    for(var i = str.length;i>=str.length-(num);i--){
        newStr = str[i]+ newStr;
    }
    for(var i =0;i<str.length-num;i++){
        newStr+=str[i];
    }
    return newStr;
}

// let testString = "012345";
// console.log(rotateString(testString, 3));
let shoes = "Did I shine my shoes today?";
console.log(rotateString(shoes, 9));

