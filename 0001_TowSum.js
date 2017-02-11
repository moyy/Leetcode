/**
 * 
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * Example: twoSum([2, 7, 11, 15], 9) return [0, 1]
 * 
 * 思路：已经遍历过的信息，如果需要再次遍历，最好用map存起来！ 
 */
var twoSum = function (nums, target) {
    var map = {};
    for (var i = 0, len = nums.length; i < len; ++i) {
        var n = nums[i];
        if (n in map) {
            return [map[n], i];
        } else {
            map[target - n] = i;
        }
    }
};