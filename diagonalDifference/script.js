//given square array give absolute difference of the diagonals.
/*
ex [[1,2,3],
    [4,5,6],
    [7,8,9]]
1+5+9=15
3+5+7 = 15
15-15=0

*/

const diagonalDifference = (arr)=>{
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    for(let i=0;i<arr.length;i++){
        firstDiagonal+= arr[i][i];
        secondDiagonal+=arr[i][arr.length-1-i];
    }
    let difference = firstDiagonal - secondDiagonal;
    return difference >= 0 ? difference : difference * -1; 
}

console.log(diagonalDifference([[1,2,3],
    [4,5,6],
    [7,8,9]]));