// Define a function named firstLetterName
function firstLetterName(name) {
    var firstLetter = name.charAt(0);
    alert("The name " + name + " starts with the letter " + firstLetter);
}

// Define a function named divisibleByTwo
function divisibleByTwo(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Define a function named largestNum
function largestNum(arr) {
    var largest = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
