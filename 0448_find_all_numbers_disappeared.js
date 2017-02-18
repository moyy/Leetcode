/**
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
 * Find all the elements of [1, n] inclusive that do not appear in this array.
 * Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
 * Example:
 *  Input:  [4,3,2,7,8,2,3,1]
 *  Output: [5,6]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * 看答案的，因为是1-n连续，所以 第i个元素放到num[i]中 用正负号代表是否访问过元素
 */
var findDisappearedNumbers = function(nums) {
    var result = [];
    for (var i = 0; i < nums.length; ++i) {
        var id = Math.abs(nums[i]) - 1;
        if (nums[id] > 0) {
            nums[id] = -nums[id];
        }
    }
    
    // 大于0的就是缺失的数
    for (var i = 0; i < nums.length; ++i) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }
    return result;
};