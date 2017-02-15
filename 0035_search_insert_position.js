/**
 * Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * You may assume no duplicates in the array.
 * 
 * Here are few examples.
 * [1,3,5,6], 5 → 2
 * [1,3,5,6], 2 → 1
 * [1,3,5,6], 7 → 4
 * [1,3,5,6], 0 → 0
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 二分查找，但是要注意区间, [), 小于为主
 * 另：JS如果需要整数除法，就一定要Floor！！！
 */
var searchInsert = function (nums, target) {
    var low = 0, high = nums.length;
    while (low < high) {
        var mid = Math.floor((low + high) / 2), v = nums[mid];
        if (v === target) {
            low = mid;
            break;
        }
        else if (target < v) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
};