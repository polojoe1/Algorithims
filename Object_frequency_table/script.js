/* 
    Given an array of strings
    return the number of times each string occurs (a frequency / hash table)
*/


const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};
console.log(makeFrequencyTable(arr1));

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
};
console.log(makeFrequencyTable(arr2));

//my code below

function makeFrequencyTable(arr) {
var obj = {};
for(var i =0;i<arr.length;i++){
    if(!(arr[i]in obj)){
        obj[arr[i]]=1;
    }
    else{
        obj[arr[i]]+=1;
    }
}
return obj;
}

