const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const form = document.querySelector("form");



function startPalindromChecker(event) {
    event.preventDefault();
    const input = textInput.value;

    if (! validateInput(input)) {
        alert("Please input a value");
        return;
    }

    const cleanedInput = cleanTextInput(input);

    if (isPalindrome(cleanedInput)) {
        updateView(`${input.bold()} is a palindrome.`, 'shadow_green');
        return;
    }

    updateView(`${input.bold()} is not a palindrome.`, 'shadow_red');
}


function validateInput(input) {
    if (input.length === 0) {
        return false;
    }
    
    return true;
}


function cleanTextInput(input) {
    let cleanString = input.replace(/_/g, "-").toLowerCase();

    cleanString = cleanString.replace(/\W/g, "");

    return cleanString;
}


function isPalindrome(input) {
    const inputArray = input.split("");
    const inputArrayReverse = input.split("").toReversed();

    if (
        inputArray.length === inputArrayReverse.length &&
        inputArray.every((val, index) => val === inputArrayReverse[index])) {
            return true;
        }

        return false;
}

function updateView(message, htmlClass) {
    result.classList.remove("hidden");
    
    result.innerHTML = (message);
    form.setAttribute('class', '');
    form.classList.add(htmlClass);
}

checkButton.addEventListener("click", startPalindromChecker);