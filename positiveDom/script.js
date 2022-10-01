/*
An array is positive dominant if it contains strictly more unique positive values than unique negative values. 
Write a function that returns true if an array is positive dominant.

Examples

isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
// There is only 1 unique positive value (1).
// There are 2 unique negative values (-3, -4).

isPositiveDominant([5, 99, 832, -3, -4]) ➞ true

isPositiveDominant([5, 0]) ➞ true

isPositiveDominant([0, -4, -1]) ➞ false

0 is neither positive or negative
*/

const isPositiveDominant=(a)=> {
	let negative = 0;
	let positive = 0;
	let map = {}
	for(let i=0;i<a.length;i++){
		if(!(map.hasOwnProperty(a[i]))){
			if(a[i]>0){
				positive++;
				map[a[i]]=1;
			}
			else if(a[i]<0){
				negative++;
				map[a[i]]=1;
			}
		}
	}
	return positive>negative;
}

console.log(isPositiveDominant([5, 99, 832, -3, -4]));