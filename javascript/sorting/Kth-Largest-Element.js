/*
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.
*/
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => b - a);

  return nums[k - 1];

  /// using heap

  /*  let pq = new MinPriorityQueue();
    for (let i = 0; i < nums.length; i++) {
        pq.enqueue(nums[i]);
    }

    let elementToRemove = nums.length - k;
    while (elementToRemove > 0) {
        pq.dequeue();
        elementToRemove--;

    }
    return pq.front()
    */
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
