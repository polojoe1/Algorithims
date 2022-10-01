/*
Create a function that takes two "sorted" arrays of numbers and 
returns an array of numbers which are common to both the input arrays.

Examples

commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]

commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]

commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]

commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []
Notes

Arrays are sorted.
*/

const commonElements=(arr1, arr2)=> {
	let result=[];
	let x=0;
	let y=0;
	while(arr1[x]!==undefined&&arr2[y]!==undefined){
		if(arr1[x]===arr2[y]){
			result.push(arr1[x]);
			x++;
			y++;
		}
		else{
			if(arr1[x]<arr2[y]){
				x++
			}
			else{
				y++
			}
		}		
	}
	return result;
}

console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]));