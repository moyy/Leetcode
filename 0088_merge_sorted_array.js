/**
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * 
 * Note:
 *  You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
 *  Subscribe to see which companies asked this question.
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var result = new Array(m + n);
    var i = 0, j = 0, k = 0;
    while(i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            result[k++] = nums1[i++];
        } else {
            result[k++] = nums2[j++];
        }
    }
    
    while (i < m) {
        result[k++] = nums1[i++];
    }
    
    while (j < n) {
        result[k++] = nums2[j++];
    }

    for (i = 0; i < m + n; ++i) {
        nums1[i] = result[i];
    }
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 思路：从后面往前面读写！！
 */
var merge = function(nums1, m, nums2, n) {
    var i = m - 1, j = n - 1, k = m + n - 1;
    while (j >= 0) {
        nums1[k--] = i >= 0 && nums1[i] >= nums2[j] ? nums1[i--] : nums2[j--];
    }
};