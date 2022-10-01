/*
Create a function which counts how many lone 1s appear in a given number.
Lone means the number doesn't appear twice or more in a row.

Examples

countLoneOnes(101) ➞ 2

countLoneOnes(1191) ➞ 1

countLoneOnes(1111) ➞ 0

countLoneOnes(462) ➞ 0
*/

function countLoneOnes(n) {
	let count=0;
	let x=n.toString()
	for(let i=0;i<x.length;i++){
		if(x[i]==="1"){
			if(x[i-1]!=="1"&&x[i+1]!=="1"){
				count++
			}
		}
	}
	return count
}

console.log(countLoneOnes(1191));