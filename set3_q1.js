function rotateArray(nums, k) {
    const n = nums.length;
    k = k % n;

    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
}

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]]; // Swap
        start++;
        end--;
    }
}

function rotateAndDisplay() {
    const input = document.getElementById('array-input').value;
    const k = parseInt(document.getElementById('k-input').value);
    const array = input.split(',').map(Number); // Convert input to an array of numbers

    rotateArray(array, k);
    
    document.getElementById('result-array').innerText = array.join(', ');
}
