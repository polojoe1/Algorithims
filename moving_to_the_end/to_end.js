// Write a function that moves all elements of one type to the end of the array.
// Examples

// moveToEnd([1, 3, 2, 4, 4, 1], 1) ➞ [3, 2, 4, 4, 1, 1]
// // Move all the 1s to the end of the array.
// moveToEnd([7, 8, 9, 1, 2, 3, 4], 9) ➞ [7, 8, 1, 2, 3, 4, 9]
// moveToEnd(["a", "a", "a", "b"], "a") ➞ ["b", "a", "a", "a"]



function moveToEnd(arr, el) {
	var newArr = [];
	var count =0;
	for (var i=0;i<arr.length;i++){
		if(arr[i]!== el){
			newArr.push(arr[i]);
		}
		else {
			count++;
		}
	}
	for (var i = 0;i<count;i++){
		newArr.push(el)
	}
	return newArr
}

console.log(moveToEnd([1,2,1,3,4,5,1,6,7,1,8,9,1,10,1,2],1))