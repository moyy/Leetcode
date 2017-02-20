/**
 * Rotate an array of n elements to the right by k steps.
 * For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
 * Note:
 *  Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * [1,2,3,4,5,6,7] --> [7,6,5,4,3,2,1] --> [5,6,7,4,3,2,1] --> [5,6,7,1,2,3,4]
 */
var rotate = function(nums, k) {
    nums.reverse();
    
    while (k > nums.length) {
        k -= nums.length;
    }

    for (var i = 0; i < Math.floor(k / 2); ++i) {
        var t = nums[i];
        nums[i] = nums[k - i - 1];
        nums[k - i - 1] = t;
    }
    
    for (var i = 0; i < Math.floor((nums.length - k) / 2); ++i) {
        var t = nums[i + k];
        nums[i + k] = nums[nums.length - i - 1];
        nums[nums.length - i - 1] = t;
    }
};