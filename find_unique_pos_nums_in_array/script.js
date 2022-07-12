// Write a function that takes an array and returns a new array 
//with unique positive (more than 0) numbers.

// Examples
// uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]) ➞ [1, 3]

// uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]) ➞ [3, 5]

// uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]) ➞ [10, 6, 13, 5]

function uniqueArr(arr) {
	var newArr =[];
	for(var i=0;i<arr.length;i++){
		if(arr[i]>0&&!(newArr.includes(arr[i]))){
			newArr.push(arr[i]);
		}
	}
	return newArr
}

console.log(uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]))