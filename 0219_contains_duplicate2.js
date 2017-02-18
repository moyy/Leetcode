/**
 * Given an array of integers and an integer k, 
 * find out whether there are two distinct indices i and j in the array such that 
 * nums[i] = nums[j] and the absolute difference between i and j is at most k.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    var obj = {}, result = false;
    for (var i = 0; i < nums.length; ++i) {
        var id = obj[nums[i]];
        if (id !== undefined && Math.abs(id - i) <= k) {
            result = true;
            break;
        }
        obj[nums[i]] = i;
    }
    return result;
};