/**
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
 * find the one that is missing from the array.
 * 
 * For example,
 *  Given nums = [0, 1, 3] return 2.
 * Note:
 *  Your algorithm should run in linear runtime complexity. 
 *  Could you implement it using only constant extra space complexity?
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var sum = 0, len = nums.length;
    for (var i = 0; i < len; ++i) {
        sum += nums[i];
    }
    
    return len * (len + 1) / 2 - sum;
};

// 可以用异或来做，但是异或对js性能不高。
