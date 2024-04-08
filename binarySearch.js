var search = function(nums, target) {
    let s=0
    let e=nums.length-1
    while (s<=e) {
        let m=Math.floor((s+e)/2)
        if (target===nums[m]) return m
        if(target < nums[m]) e=m-1
        else s=m+1
    }
    return -1
};
console.log(search([-1,0,3,5,9,12],9))