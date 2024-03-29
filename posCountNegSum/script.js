/*
Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.

Examples

countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) ➞ [10, -65]
// There are a total of 10 positive numbers.
// The sum of all negative numbers equals -65.

countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]) ➞ [7, -252]

countPosSumNeg([91, -4, 80, -73, -28]) ➞ [2, -105]

countPosSumNeg([]) ➞ []
*/


const countPosSumNeg=(arr)=> {
	let count = 0;
	let sumOfNeg = 0;
	if(arr.length === 0){
		return []
	}
	for(let i=0;i<arr.length;i++){
		if(arr[i]>=0){
			count++;
		}
		else{
			sumOfNeg+=arr[i]
		}
	}
	return [count,sumOfNeg];
}

console.log(countPosSumNeg([91, -4, 80, -73, -28]));