/**
 * Given a binary array, find the maximum number of consecutive 1s in this array.
 * Example 1:
 *  Input: [1,1,0,1,1,1]
 *  Output: 3
 * Explanation: The first two digits or the last three digits are consecutive 1s.
 *   The maximum number of consecutive 1s is 3.
 * Note:
 *  The input array will only contain 0 and 1.
 *  The length of input array is a positive integer and will not exceed 10,000
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    var result = 0, temp = 0, len = nums.length;
    for (var i = 0; i < len; ++i) {
        if (nums[i] === 1) {
            ++temp;
        } else {
            if (temp > result) {
                result = temp;
            }
            temp = 0;
        }
    }
    if (temp > result) {
        result = temp;
    }
    return result;
};

// 循环里面有循环
var findMaxConsecutiveOnes = function (nums) {
    var result = 0, len = nums.length;
    for (var i = 0; i < len; ++i) {
        var newOnes = 0;
        
        while (i < len && nums[i] === 1) {
            ++i;  // 注意：必须写在这里，如果写在nums[i++]，那么在0处i会被加了两次！
            ++newOnes;
        }
        
        if (newOnes > result) result = newOnes;
    }
    return result;
}