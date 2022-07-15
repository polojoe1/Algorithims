// Create a function that takes an array of numbers and returns the second
// largest number.
// Examples
// secondLargest([10, 40, 30, 20, 50]) ➞ 40

// secondLargest([25, 143, 89, 13, 105]) ➞ 105

// secondLargest([54, 23, 11, 17, 10]) ➞ 23
function secondLargest(arr) {
	var high = Math.max(...arr);
	var second = 0;
	
	for(var i=0;i<arr.length;i++){
		if(arr[i]>=second&&arr[i]<high){
			second = arr[i];
		}
	}
	return second;	
}
