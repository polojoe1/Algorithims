/*
Given an array and chunk size "n", create a function such that it divides the array into many subarrays where each subarray is of length size "n".

Examples

chunk([1, 2, 3, 4], 2) ➞ [
  [1, 2], [3, 4]
]

chunk([1, 2, 3, 4, 5, 6, 7], 3) ➞ [
  [1, 2, 3], [4, 5, 6], [7]
]

chunk([1, 2, 3, 4 ,5], 10) ➞ [
  [1, 2, 3, 4, 5]
]
*/


const chunk=(array, size)=> {
	let result = [];
	let inserts=[];
	for(let i=0;i<array.length;i++){
			inserts.push(array[i])
		if(inserts.length===size){
			result.push([...inserts])
			inserts = []
		}
		
	}
	if(inserts.length>0){
	result.push([...inserts])
	}
	return result
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3));