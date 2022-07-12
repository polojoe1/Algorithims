// Create a function that squares every digit of a number.

// Examples

// squareDigits(9119) ➞ 811181

// squareDigits(2483) ➞ 416649

// squareDigits(3212) ➞ 9414


function squareDigits(n) {
	var newN = n.toString();
	var arr =[...newN];
	var answer='';
	for(var i=0;i<arr.length;i++){
		answer+= parseInt(arr[i])**2
	}
	return parseInt(answer);
}


console.log(squareDigits(334455))