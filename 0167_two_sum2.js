/**
 * Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
 * The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
 * You may assume that each input would have exactly one solution and you may not use the same element twice.
 *  Input: numbers={2, 7, 11, 15}, target=18
 *  Output: index1=1, index2=2
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// 两边往中间移动，如果和大于目标，则右边指针左移动；如果小于目标，则左边指针往右移动
var twoSum = function(numbers, target) {
    var start = 0, end = numbers.length - 1;
    while(start < end) {
        var n = numbers[start] + numbers[end];
        if (n === target) {
            return [start + 1, end + 1];
        }
        else if (n > target) {
            --end;            
        } else {
            ++start;
        }
    }
};