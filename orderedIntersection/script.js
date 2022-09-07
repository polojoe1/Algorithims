const orderedIntersection = (arr1, arr2) => {
  let x = 0;
  let y = 0;
  let newArr = [];
  while (arr1[x] !== undefined && arr2[y] !== undefined) {
    if (arr1[x] === arr2[y]) {
      if (newArr[newArr.length - 1] !== arr1[x]) {
        newArr.push(arr1[x]);
        x++;
        y++;
      }
    }
    else {
      if (arr1[x] < arr2[y]) {
        x++;
      } else {
        y++;
      }}
  }
  return newArr;
};

console.log(orderedIntersection([0, 1, 1, 3, 4], [1, 2, 2, 3, 5, 6]));
