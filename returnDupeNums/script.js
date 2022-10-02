/*
Given an array nums where each integer is between 1 and 100, return a sorted array containing 
only duplicate numbers from the given nums array.

Examples

duplicateNums([1, 2, 3, 4, 3, 5, 6]) ➞ [3]

duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]) ➞ [72, 81, 99]

duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ null
Notes

The given array won't contain the same number three times.
*/

const duplicateNums=(nums)=> {
	let dupes ={}
	let result = []
	for(let i=0;i<nums.length;i++){
		if(!(nums[i] in dupes)){
			dupes[nums[i]]=1;
		}
		else{
			result.push(nums[i])
		}
	}
	return sort(result)
}

const sort=arr=>{
	if(arr.length===0){
		return null
	}
	for(let i=0;i<Math.floor(arr.length/2);i++){
		for(let j=arr.length-1;j>=Math.floor(arr.length/2);j--){
			if(arr[i]>arr[j]){
				let temp=arr[i]
				arr[i]=arr[j];
				arr[j]=temp;
			}
		}
	}
	return arr
}

console.log(duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]));