/**
 * Given an array of integers, find if the array contains any duplicates. 
 * Your function should return true if any value appears at least twice in the array, 
 * and it should return false if every element is distinct.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var obj = {}, result = false;
    for (var i = 0; i < nums.length; ++i) {
        if (obj[nums[i]] !== undefined) {
            result = true;
            break;
        }
        obj[nums[i]] = true;
    }
    return result;
};