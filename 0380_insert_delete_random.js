/**
 * Design a data structure that supports all following operations in average O(1) time.
 * insert(val): Inserts an item val to the set if not already present.
 * remove(val): Removes an item val from the set if present.
 * getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
 * Example:
    // Init an empty set.
    RandomizedSet randomSet = new RandomizedSet();

    // Inserts 1 to the set. Returns true as 1 was inserted successfully.
    randomSet.insert(1);

    // Returns false as 2 does not exist in the set.
    randomSet.remove(2);

    // Inserts 2 to the set, returns true. Set now contains [1,2].
    randomSet.insert(2);

    // getRandom should return either 1 or 2 randomly.
    randomSet.getRandom();

    // Removes 1 from the set, returns true. Set now contains [2].
    randomSet.remove(1);

    // 2 was already in the set, so return false.
    randomSet.insert(2);

    // Since 2 is the only number in the set, getRandom always return 2.
    randomSet.getRandom();
 */

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.values = [];
    this.locs = {}; // 内容: 数组索引
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    var result = this.locs[val] === undefined;
    if (result) {
        this.values.push(val);
        this.locs[val] = this.values.length - 1;
    }
    return result;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 * 注：可以O(1)删除数组
 */
RandomizedSet.prototype.remove = function(val) {
    var result = this.locs[val] !== undefined;
    if(result) {
        var loc = this.locs[val];
        delete this.locs[val];

        // 删除数组
        var v = this.values[this.values.length - 1];
        this.values[loc] = v;
        this.values.pop();
        
        //如果loc不是最后一个，那么肯定改了另一个值的索引 
        if (loc !== this.values.length) {
            this.locs[v] = loc;
        }
    }
    return result;        
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    var index = Math.floor(Math.random() * this.values.length);
    return this.values[index];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */