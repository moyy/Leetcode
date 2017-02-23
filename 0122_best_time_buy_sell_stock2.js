/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 *  Input: [7, 1, 5, 3, 6, 4]
 */

/**
 * @param {number[]} prices
 * @return {number}
 * 贪心法：a ... b c ... d, 只要 b > c, 那么：d - a < (b - a) + (d - c)
 * 所以只要股价下跌，就卖出股价
 * 
 */
var maxProfit = function(prices) {
	var profit = 0, buy = prices[0];
	for (var i = 1; i < prices.length; ++i) {
		if (prices[i] < prices[i - 1]) {
			profit += prices[i - 1] - buy;
			buy = prices[i];
		} else if (i === prices.length - 1) {
			profit += prices[i] - buy;
		}
	}
	return profit;
};

/**
 * 进一步简化代码：
 * 因为 如果一直升，那么d - a = (d-c) + (c - b) + (b - a);
 */
var maxProfit = function(prices) {
	var profit = 0;
	for (var i = 1; i < prices.length; ++i) {
		profit += Math.max(0, prices[i] - prices[i - 1]);
	}
	return profit;
};

/**
 * a <= b <= c <= d --> 利润：d - a = (b - a) + (c - b) + (d - c)
 * a <= b >= b' <= c <= d --> 利润：(b - a) + (d - b')
 */