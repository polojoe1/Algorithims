var removeDuplicates = function(nums) {
    let result = [];
    for(let i=0;i<nums.length;i++){
        if(result[result.length-1]!==nums[i]){
            result.push(nums[i])
        }
    }
    return result
};

console.log(removeDuplicates([0,1,1,1,1,1,3,4,4,4,4,5,6]));