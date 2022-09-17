/*
Create a function that takes an array of numbers
and return "Boom!" if the digit 7 appears in the array.
Otherwise, return "there is no 7 in the array".

Examples

sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.
*/

const sevenBoom=(arr)=> {
	let count=0;
	for(let i=0;i<arr.length;i++){
		if(arr[i].toString().length > 1){
			for(let j=0;j<arr[i].toString().length;j++){
				count = arr[i].toString()[j]==7?count+1:count;
			}
		}
		else{
		count = arr[i]===7?count+1:count;
		}
	}
	return count>=1?"Boom!":"there is no 7 in the array"
}


console.log(sevenBoom([2, 55, 60, 97, 86]));//Boom

console.log(sevenBoom([8, 6, 33, 100])); //no 7