// Create a function that takes a string and returns a string with
// spaces in between all of the characters.

// Examples
// spaceMeOut("space") ➞ "s p a c e"

// spaceMeOut("far out") ➞ "f a r   o u t"

// spaceMeOut("elongated musk") ➞ "e l o n g a t e d   m u s k"


function spaceMeOut(str) {
	var newStr = '';
	for(var i=0;i<str.length;i++){
		if(i<str.length-1){
			newStr += str[i]+ ' ';
		}
		else{
			newStr += str[i];
		}
	}
	return newStr;
	
}
console.log(spaceMeOut('Hello World'));