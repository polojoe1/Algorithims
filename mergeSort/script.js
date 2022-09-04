const sortMerge = (arr1,arr2)=> {
    let newArr=[];
    let x=0;
    let y=0;
    while(arr1[x]!==undefined&&arr2[y]!==undefined){
        if(arr1[x]<arr2[y]){
            newArr.push(arr1[x]);
            x=x+1;
        }
        else{
            newArr.push(arr2[y]);
            y=y+1;
        }
    }
    while(arr1[x]!==undefined){
        newArr.push(arr1[x]);
        x=x+1;
    }
    while(arr2[y]!==undefined){
        newArr.push(arr2[y]);
        y=y+1;
    }
    return newArr;
    }


const mergeSort = arr => {
    if(arr.length===1){
        return arr;
    }
    else{
        let mid = Math.ceil(arr.length/2);
        let arr1 = arr.slice(0,mid);
        let arr2 = arr.slice(mid);
        let bigArr1 = mergeSort(arr1);
        let bigArr2 = mergeSort(arr2);
        return sortMerge(bigArr1,bigArr2);
    }
}

console.log(mergeSort([3,2,5,200,8,4,1,0]));