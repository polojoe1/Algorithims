/*
Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.

To illustrate:

123
We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.

Examples

reverseAndNot(123) ➞ 321123

reverseAndNot(152) ➞ 251152

reverseAndNot(123456789) ➞ 987654321123456789
*/

const reverseAndNot=(i)=> {
	let original = i.toString()
	let reversed = "";
	for(let j=original.length-1;j>=0;j--){
		reversed+=original[j]
	}
	return parseInt(reversed+original);
}

console.log(reverseAndNot(123));