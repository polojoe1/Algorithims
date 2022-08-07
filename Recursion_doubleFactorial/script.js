//Create a function that takes a number num and returns its double factorial.
//Examples
//doubleFactorial(0) ➞ 1
//doubleFactorial(2) ➞ 2
//doubleFactorial(9) ➞ 945
// 9*7*5*3*1 = 945
//doubleFactorial(14) ➞ 645120

function doubleFactorial(num) {
	if(num<=0){
		return 1;
	}
	else{
		return num* doubleFactorial(num-2);
	}
}

console.log(doubleFactorial(9));