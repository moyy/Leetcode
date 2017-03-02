/**
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// 目前我能想到的就是计数

// 但是更好的做法是加减计数
var majorityElement = function(nums) {
    var count = 1, elem = nums[0];
    for (var i = 1; i < nums.length; ++i) {
        if (nums[i] === elem) {
            ++count;
        } else {
            if (--count === 0) {
                count = 1;
                elem = nums[i];
            }       
        }
    }
    return elem; 
};