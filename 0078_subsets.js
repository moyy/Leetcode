/**
 * Given a set of distinct integers, nums, return all possible subsets.
 * Note: The solution set must not contain duplicate subsets.
 * For example,
 * If nums = [1,2,3], a solution is:
 * [
 *  [3],
 *  [1],
 *  [2],
 *  [1,2,3],
 *  [1,3],
 *  [2,3],
 *  [1,2],
 *  []
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subset = function(nums, i, result, temp) {
    if (i === nums.length) {
        result.push(temp.slice());
    } else {
        temp.push(nums[i]);
        subset(nums, i + 1, result, temp);
 
        temp.pop();
        subset(nums, i + 1, result, temp);
    }
};

var subsets = function(nums) {
    var result = [];
    subset(nums, 0, result, []);
    return result;
};

// nums[0]只分配给第0个数为1的子集，nums[1]只分配给第1个数为1的子集...
// 复杂度 O(n*2^n)
var subsets = function(nums) {
    var numSubset = Math.pow(2, nums.length);
    var result = [];
    for (var i = 0; i < numSubset; ++i) {
        result.push([]);
    }
    for (var i = 0; i < nums.length; ++i) {
        for (var j = 0; j < numSubset; ++j) {
            if ( (j >> i) & 1 ) {
                result[j].push(nums[i]);
            }
        }
    }
    return result;
};
