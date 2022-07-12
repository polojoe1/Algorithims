// A number is said to be Disarium if the sum of its digits raised to their 
//respective positions is the number itself.
// Create a function that determines whether a number is a Disarium or not.
// Examples

// isDisarium(75) ➞ false
// // 7^1 + 5^2 = 7 + 25 = 32

// isDisarium(135) ➞ true
// // 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135

// isDisarium(544) ➞ false
// isDisarium(518) ➞ true
// isDisarium(8) ➞ true
// isDisarium(466) ➞ false

function isDisarium(n) {
	var newN = n+'';
	var arr = [...newN];
	var count = 0;
	for (var i=0;i<arr.length;i++){
		arr[i]= parseInt(arr[i]) **(i+1);
		count += arr[i];
	}
	return count === n;
}

console.log(isDisarium(518))