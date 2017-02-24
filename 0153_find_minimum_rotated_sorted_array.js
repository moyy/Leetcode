/**
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 * Find the minimum element.
 * You may assume no duplicate exists in the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var result = nums[0];
    for (var i = 1; i < nums.length; ++i) {
        if(nums[i] < nums[i - 1]) {
            result = nums[i];
            break;
        }
    }
    return result;
};

// 二分查找！！
var findMin = function(nums) {
    var begin = 0, end = nums.length - 1;
    while (begin < end && nums[begin] >= nums[end]) {
        var mid = Math.floor((begin + end) / 2);
        if (nums[mid] >= nums[begin]) {
            begin = mid + 1;
        } else { // 意味着：nums[mid] <= nums[end]
            end = mid; // 不要跳过可能的答案
        }
    }
    return nums[begin];
};