/**
 * 500 Keyboard row
 * 
 * Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
 * 
 * Example 1:
 *  Input: ["Hello", "Alaska", "Dad", "Peace"]
 *  Output: ["Alaska", "Dad"]
 *
 * Note:
 *  You may use one character in the keyboard more than once.
 *  You may assume the input string will only contain letters of alphabet.
 */

/**
 * @param {string[]} words
 * @return {string[]}
 * 四层循环，而且算法非常难看，不如用正则！
 */
var findWords = function (words) {
    var keyboard = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
        ];
    var result = []

    for (var i = 0, len = words.length; i < len; ++i) {
        // 分割一遍
        var w = words[i].toLocaleLowerCase().split("");
        // 三重循环
        if (keyboard.some(value => w.every(v => value.includes(v)))) {
            result.push(words[i]);
        }
    }
    return result;
};

/**
 * @param {string[]} words
 * @return {string[]}
 * 超过三层以上的循环用正则！
 * 正则的写法：每个选择都要带开始结束才行！
 */
var findWords_2 = function (words) {
    return words.filter(w => /(^[qwertyuiop]+$)|(^[asdfghjkl]+$)|(^[zxcvbnm]+$)/i.test(w));
}