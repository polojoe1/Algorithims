// Create a function that returns an array of all the integers between two given
// numbers start and end.

// Examples

// rangeOfNum(2, 4) ➞ [3]
// rangeOfNum(5, 9) ➞ [6, 7, 8]
// rangeOfNum(2, 11) ➞ [3, 4, 5, 6, 7, 8, 9, 10]

function rangeOfNum(start, end) {
	var newArr=[];
	for(var i=start+1;i<end;i++){
		if(start == end || start>end){
			return newArr;
		}
		else {
			newArr.push(i);
		}
	}
	return newArr;
}
console.log(rangeOfNum(24,36))