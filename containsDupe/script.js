var containsDuplicate = function(nums) {
    let obj = {}
    for(let i=0;i<nums.length;i++){
        if(obj.hasOwnProperty(nums[i])){
            obj[nums[i]] = 2
        }
        else{
            obj[nums[i]]=1
        }
    }
    for(key in obj){
        if(obj[key]===2){
            return true
        }
    }
    return false
};