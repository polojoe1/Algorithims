//Create a recursive function that takes two parameters and repeats 
//the string n number of times. The first parameter txt is the string to be repeated 
//and the second parameter is the number of times the string is to be repeated.
//String.prototype.repeat() is not allowed
//Examples
//repetition("ab", 3) ➞ "ababab"
//repetition("kiwi", 1) ➞ "kiwi"
//repetition("cherry", 2) ➞ "cherrycherry"

function repetition(txt, n) {
		if(n<=1){
			return txt;
		}
		else{
			--n;
			return txt+ repetition(txt,n); 
		}
	}

console.log(repetition('hello',3));