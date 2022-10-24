console.log('hi');
var findMedianSortedArrays = function(nums1, nums2) {
    let i = 0
    let sum = 0
    while(nums1[i]!==null || nums2[i]!==null){
        if(nums1[i]!==null){
            sum+=nums1[i]
        }
        if(nums2[i]!==null){
            sum+=nums2[i]
        }
        i++
    }
    return sum / (nums1.length + nums2.length)
};


console.log(findMedianSortedArrays([1,3],[2]));