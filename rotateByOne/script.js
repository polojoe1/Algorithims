function rotateByOne(arr) {
	let result = [arr[arr.length-1]]
	for(let i=0;i<arr.length;i++){
		if(arr[i]!==arr[arr.length-1]){
			result.push(arr[i])
		}
	}
	return result
}	