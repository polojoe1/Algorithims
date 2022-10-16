/*
Create a function that returns an array of strings sorted by length in ascending order.

Examples

sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]

sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]

sortByLength([]) ➞ []
*/

const sortByLength=(arr)=> {
	for(let i=0;i<arr.length;i++){
		for(let j=i+1;j<arr.length;j++){
			if(arr[j].length<arr[i].length){
				let temp = arr[j]
				arr[j]=arr[i]
				arr[i]=temp
			}
		}
	}
	return arr
}