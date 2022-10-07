/*
Given an array of numbers, write a function that returns an array that...

Has all duplicate elements removed.
Is sorted from least to greatest value.
Examples

uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]

uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]

uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]
*/


const uniqueSort=(arr)=> {
	let obj={}
	let result = []
	for(let i=0;i<arr.length;i++){
		if(!(arr[i] in obj)){
			result.push(arr[i])
			obj[arr[i]]=1;
		}
	}
	return sort(result)
}

const sort=(arr)=>{
	for(let i=0;i<arr.length;i++){
		for(let j=i+1;j<arr.length;j++){
			if(arr[j]<arr[i]){
				let temp = arr[i]
				arr[i]=arr[j]
				arr[j]=temp
			}
		}
	}
	return arr
}


console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]));