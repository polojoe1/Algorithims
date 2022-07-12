// Create a function that counts the integer's number of digits.

// Examples

// count(318) ➞ 3

// count(-92563) ➞ 5

// count(4666) ➞ 4

// count(-314890) ➞ 6

// count(654321) ➞ 6

// count(638476) ➞ 6


function count(n) {
	var str = '';
	if (n<0){
		n=n*-1;
	}
	str += n;
	return str.length;
}

console.log(count(-998877));