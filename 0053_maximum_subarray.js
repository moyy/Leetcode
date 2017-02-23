/**
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
 * For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
 * the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 */

/**
 * @param {number[]} nums
* @return {number}
*/
// 根据数据找到了规律，就是判断条件多多多
var maxSubArray = function (nums) {
    var sum = nums[0], result = -Infinity;
    for (var i = 1; i < nums.length; ++i) {
        // 递减情况，马上判断
        if (sum + nums[i] < sum) {
            result = Math.max(sum, result);
        }
        // 小于0情况，截断
        if (sum + nums[i] < 0) {
            sum = nums[i];
        } else {
            // sum为负数情况，不要加了
            if (sum < 0) {
                sum = 0;
            }
            // 其他情况，加上去
            sum += nums[i];
        }
    }
    // 末尾做一次比较
    result = Math.max(sum, result);
    return result;
};

// 这是一道动规题：子问题A[0,i]，以A[i]结尾的子数组的最大值
// 状态方程：A[0, i] = A[i] + (A[0,i-1] > 0 ? A[0,i-1] : 0)
var maxSubArray = function (nums) {
    var n = nums.length;
    var dp = []; //dp[i] means the maximum subarray ending with A[i];

    dp[0] = nums[0];
    var max = dp[0];

    for (var i = 1; i < n; ++i) {
        dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
        max = Math.max(max, dp[i]);
    }

    return max;
};

// 进一步优化：因为A[0,i] 只涉及到 A[0,i-1]，所以保存一个变量就可以了。
var maxSubArray = function (nums) {
    var n = nums.length;
    
    var dp = nums[0];
    
    var max = dp;

    for (var i = 1; i < n; ++i) {
        dp = nums[i] + (dp > 0 ? dp : 0);
        max = Math.max(max, dp);
    }

    return max;
};