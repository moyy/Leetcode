/**
 * Given a non-empty array of integers, return the third maximum number in this array. 
 * If it does not exist, return the maximum number. The time complexity must be in O(n).
 * 
 * 
 * Input: [3, 2, 1]
 * Output: 1
 * Explanation: The third maximum is 1.
 *
 * Input: [1, 2]
 * Output: 2
 * Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
 * 
 * Input: [2, 2, 3, 1]
 * Output: 1
 * Explanation: Note that the third maximum here means the third maximum distinct number.Both numbers with value 2 are both considered as second maximum.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    // 数组只保留三个数
    var three = [];

    for (var i = 0; i < nums.length; ++i) {

        for (var j = 0; j < three.length; ++j) {
            if (three[j] === nums[i] || three[j] < nums[i]) {
                break;
            }
        }

        if (three[j] !== nums[i]) {
            three.splice(j, 0, nums[i]);
            if (three.length > 3) {
                three.pop();
            }
        }

    }

    return three.length === 2 ? three[0] : three.pop();
};

// 三个数就行
var thirdMax = function (nums) {
    var f, s, t;

    for (var i = 0; i < nums.length; ++i) {
        var v = nums[i];
        if (v !== f && v !== s && v !== t) {
            if (f === undefined || v > f) {
                t = s;
                s = f;
                f = v;
            } else if (s === undefined || v > s) {
                t = s;
                s = v;
            } else if (t === undefined || v > t) {
                t = v;
            }
        }
    }

    return t !== undefined ? t : f;
};