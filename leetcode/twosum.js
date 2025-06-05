/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const  twoSum = function(nums, target) {
    const used = {};
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        const targetNumber = target - element;
        if (targetNumber in used) {
            console.log('targetNumber:', targetNumber, 'elements:', element);
            return [used[targetNumber], i];
        }
        used[element] = i
    }
    return [];
};

// Test cases
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1));  // Output: [0, 1]

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2));  // Output: [1, 2]

const nums3 = [3, 3];
const target3 = 6;
console.log(twoSum(nums3, target3));  // Output: [0, 1]