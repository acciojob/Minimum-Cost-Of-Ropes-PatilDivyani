function calculateMinCost() {
  //your code here
  function connectRopes(arr) {
  let totalCost = 0;
  const heap = [];

  // Convert the input array into a min-heap
  for (let i = 0; i < arr.length; i++) {
    heap.push(arr[i]);
  }
  buildMinHeap(heap);

  while (heap.length > 1) {
    // Extract the two minimum ropes
    const rope1 = extractMin(heap);
    const rope2 = extractMin(heap);

    // Connect the ropes and calculate the cost
    const cost = rope1 + rope2;
    totalCost += cost;

    // Insert the connected rope back into the heap
    insertMin(heap, cost);
  }

  return totalCost;
}

// Utility function to build a min-heap
function buildMinHeap(arr) {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
}

// Utility function to maintain the min-heap property
function heapify(arr, n, i) {
  let smallest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] < arr[smallest]) {
    smallest = left;
  }

  if (right < n && arr[right] < arr[smallest]) {
    smallest = right;
  }

  if (smallest !== i) {
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    heapify(arr, n, smallest);
  }
}

// Utility function to extract the minimum element from the heap
function extractMin(arr) {
  const min = arr[0];
  arr[0] = arr[arr.length - 1];
  arr.pop();
  heapify(arr, arr.length, 0);
  return min;
}

// Utility function to insert an element into the min-heap
function insertMin(arr, val) {
  arr.push(val);
  let i = arr.length - 1;
  let parent = Math.floor((i - 1) / 2);

  while (i > 0 && arr[parent] > arr[i]) {
    [arr[parent], arr[i]] = [arr[i], arr[parent]];
    i = parent;
    parent = Math.floor((i - 1) / 2);
  }
}

// Example usage
const arr = [4, 2, 7, 6, 9];
const result = connectRopes(arr);
console.log(result); // Output: 62

  
  
}  
