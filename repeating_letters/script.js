// Create a function that takes a string and returns a string in which 
//each character is repeated once.

// Examples

// doubleChar("String") ➞ "SSttrriinngg"

// doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

// doubleChar("1234!_ ") ➞ "11223344!!__  "

function doubleChar(str) {
	var newStr = '';
	for(var i =0;i<str.length;i++){
		newStr+= str[i]+str[i];
	}
	return newStr;
}

console.log(doubleChar('Hello World!'));