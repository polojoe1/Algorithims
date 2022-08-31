const selectionSort = arr => {
    for(let i = 0;i<arr.length;i++){
        let minimumIndex = i;
        for(let j = i+1;j<arr.length;j++){
            if(arr[minimumIndex]>arr[j]){
                minimumIndex=j;
                
            }
            
        }
        if(i!==minimumIndex){
            let temp = arr[i];
            arr[i]= arr[minimumIndex];
            arr[minimumIndex]=temp
        }
    }
    return arr;
}



console.log(selectionSort([5,-6,7,-8,1,10,-10]));