/*
Write a function that moves all the zeroes to the end of an array.
Do this without returning a copy of the input array.

Examples

zeroesToEnd([1, 2, 0, 0, 4, 0, 5]) ➞ [1, 2, 4, 5, 0, 0, 0]

zeroesToEnd([0, 0, 2, 0, 5]) ➞ [2, 5, 0, 0, 0]

zeroesToEnd([4, 4, 5]) ➞ [4, 4, 5]

zeroesToEnd([0, 0]) ➞ [0, 0]
Notes

You must mutate the original array.
Keep the relative order of the non-zero elements the same.
*/


const zeroesToEnd=(a)=> {
	for(let i=0;i<a.length;i++){
		if(a[i]===0){
			for(let j=i+1;j<a.length;j++){
				if(a[j]!==0){
					a[i]=a[j];
					a[j]=0;
					break
				}
			}
		}
	}
	return a
}

console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5]));