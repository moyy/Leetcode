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

// 用迭代器类似的方法来实现最好，不要用整数除法
var reverse = function (array, start, end) {
    while (start < end) {
        var temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        ++start;
        --end;
    }
}

// 三次反转：[1,2,3,4,5,6,7]  -> [7,6,5,4,3,2,1] -> [5,6,7,4,3,2,1] --> [5,6,7,1,2,3,4]
var rotate = function(nums, k) {
    
    reverse(nums, 0, nums.length - 1);

    // 如果k大于数组长度，减掉，效果一样
    k %= nums.length;

    reverse(nums, 0, k - 1);

    reverse(nums, k, nums.length - 1);
};