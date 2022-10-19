/*
Write a function that divides an array into chunks of size n,
where n is the length of each chunk.

Examples

chunkify([2, 3, 4, 5], 2) ➞ [[2, 3], [4, 5]]

chunkify([2, 3, 4, 5, 6], 2) ➞ [[2, 3], [4, 5], [6]]

chunkify([2, 3, 4, 5, 6, 7], 3) ➞ [[2, 3, 4], [5, 6, 7]]

chunkify([2, 3, 4, 5, 6, 7], 1) ➞ [[2], [3], [4], [5], [6], [7]]

chunkify([2, 3, 4, 5, 6, 7], 7) ➞ [[2, 3, 4, 5, 6, 7]]
*/

function chunkify(arr, size) {
	
	let result = [];
	let cart = [];
	for(let i=0;i<arr.length;i++){
		if(cart.length !== size){
			cart.push(arr[i])
			if(cart.length===size){
				result.push([...cart]);
				cart=[]
			}
		}
		
	}
	if(cart.length>0){
		result.push(cart)
	}
	return result
}