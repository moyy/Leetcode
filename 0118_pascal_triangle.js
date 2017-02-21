/**
 * Given numRows, generate the first numRows of Pascal's triangle.
 * For example, given numRows = 5,
 * Return:
 * [
 *      [1],
 *     [1,1],
 *    [1,2,1],
 *   [1,3,3,1],
 *  [1,4,6,4,1]
 * ]
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var result = [];
    for (var i = 0; i < numRows; ++i)
    {
        var temp = [1];
        if (i > 0) {
            var last = result[result.length - 1];
            for (var j = 1; j < last.length; ++j) {
                temp.push(last[j - 1] + last[j]);
            }
            temp.push(1);
        }
        result.push(temp);        
    }
    return result;
};

// 巧妙设置i为0，1的情况，不用判断
var generate = function(numRows) {
    var result = [];
    for (var i = 0; i < numRows; ++i)
    {
        var temp = new Array(i + 1);
        // i为0的时候，也可以
        temp[0] = temp[i] = 1;

        // i为2的时候才能进入循环
        for (var j = 1; j < i; ++j) {
            temp[j] = result[i - 1][j - 1] + result[i - 1][j];
        }
        result.push(temp);
    }
    return result;
};