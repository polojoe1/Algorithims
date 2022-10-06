/*
Stan learned something today: that directly decrementing an array’s .length immediately shortens it
by that amount. Given array arr and number X, remove all except the last X elements, and return arr
(changed and shorter). Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.
very easy.
*/

const lastFew = (arr,num)=>{
    return arr.slice(arr.length-num)
} 

console.log(lastFew([2,4,6,8,10],3));

console.log(lastFew([1,1,1,1,2,4,6,8,10],6));