/**
 * Given an index k, return the kth row of the Pascal's triangle.
 *  For example, given k = 3,
 *  Return [1,3,3,1].
 * Note:
 *  Could you optimize your algorithm to use only O(k) extra space?
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    var last = [], curr = [];
    for (var i = 0; i < rowIndex + 1; ++i) {
        curr[0] = curr[i] = 1;
        
        // i为2时候入循环
        for (var j = 1; j < i; ++j) {
            curr[j] = last[j - 1] + last[j];
        }
        
        // 交换last和curr
        var temp = curr;
        curr = last;
        last = temp;
    }
    return last;
};

// 一个数组，从右边往左边迭代即可
var getRow = function (rowIndex) {

    var result = new Array(rowIndex + 1).fill(0);
    result[0] = 1;

    for (var i = 1; i < rowIndex + 1; ++i) {
        for (var j = i; j >= 1; --j) {
            result[j] += result[j - 1];
        }
    }
    return result;
};

