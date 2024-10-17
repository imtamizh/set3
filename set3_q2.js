function findMaximum(arr) {
    if (arr.length === 0) return null; // Return null if the array is empty

    let maxElement = arr[0]; // Start with the first element as the maximum
    for (let num of arr) {
        if (num > maxElement) {
            maxElement = num; // Update maxElement if a larger number is found
        }
    }
    return maxElement;
}

document.getElementById("findMaxButton").addEventListener("click", function() {
    const input = document.getElementById("inputArray").value;
    const array = input.split(',').map(Number); // Convert input string to an array of numbers
    const maxValue = findMaximum(array);

    // Display the result in the document
    document.getElementById("result").textContent = "The maximum element is: " + maxValue;
});