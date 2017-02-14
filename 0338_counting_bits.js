/**
 * Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.
 *
 * Example:
 *  For num = 5 you should return [0,1,1,2,1,2].
 * Follow up:
 *  It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
 *  Space complexity should be O(n).
 *  Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.
 */

/**
 * @param {number} num
 * @return {number[]}
 * 分析：都是前面数字+1
 * 0 --> 01 --> 01, 12 --> 01,12,1223 --> ...
 */
var countBits = function (num) {
    var result = new Array(num + 1);
    
    result[0] = 0;
    var count = 1, pow2 = 1;

    while(count <= num) {
        for (var i = 0; i < pow2 && count <= num; ++i, ++count) {
            result[count] = result[i] + 1;
        }
        pow2 *= 2;
    }

    return result;
};