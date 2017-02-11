/**
 *
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
 * Given two integers x and y, calculate the Hamming distance.
 * 0 ≤ x, y < 2^31.
 * Example: hammingDistance(1, 4) ==> 2
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 * 注：JS还是用循环快，而且要少判断
 */
var hammingDistance = function (x, y) {
    var count = 0;
    while (x + y > 0) {
        count += x % 2 != y % 2;
        x = Math.floor(x / 2);
        y = Math.floor(y / 2);
    }
    return count; 
};

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 * 注：JS的位操作会导致性能很慢；
 */
var hammingDistance = function (x, y) {
    var num = x ^ y;

    // 判断num有几个二进制1的函数
    var count = 0;
    while (num > 0) {
        ++count;
        num &= (num - 1);
    }
    return count; 
};