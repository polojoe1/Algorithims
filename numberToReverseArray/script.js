/*
Create a function that takes a number and returns an array with the digits of the number in reverse order.

Examples

reverseArr(1485979) ➞ [9, 7, 9, 5, 8, 4, 1]

reverseArr(623478) ➞ [8, 7, 4, 3, 2, 6]

reverseArr(12345) ➞ [5, 4, 3, 2, 1]
*/


const reverseArr=(num)=> {
	let newStr= num.toString()
	let newArr=[];
	for(let i=newStr.length-1;i>=0;i--){
		newArr.push(parseInt(newStr[i]))
	}
	return newArr;
}

console.log(reverseArr(1485979));