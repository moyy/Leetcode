/**
 * Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
 * 
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 * 
 * For example,
 *  Given input array nums = [1,1,2],
 *  Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. 
 *  It doesn't matter what you leave beyond the new length.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var j = 1, len = nums.length;
    for (var i = 1; i < len; ++i) {
        if (nums[i] !== nums[i - 1]) {
            nums[j++] = nums[i];
        }
    }
    return len === 0 ? 0 : j;
};