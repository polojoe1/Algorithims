const insertionSort = (arr)=> {
    for(let i =1;i<arr.length;i++){
        let temp = arr[i];
        for(let j = i-1;j>=-1;j--){
            if(temp<arr[j]){
                arr[j+1]=arr[j]
            }
            else{
                arr[j+1]= temp;
                break
            }
        }
    }
    return arr;
}


console.log(insertionSort([2,5,3,4,4,4,11,1,6,-1]))