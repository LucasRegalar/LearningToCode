const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const shadow = document.querySelector("form");


//Wrapper Function
function startPalindromChecker(event) {
    event.preventDefault();                                     //Prevent Refreshing
    const input = textInput.value;

    if (! validateInput(input)) {
        alert("Please input a value");                          //Validation
        return;
    }

    const cleanedInput = cleanTextInput(input);                 //Cleaning 


    returnResult(checkingPalindrome(cleanedInput), input);      //Checking + Result
}

//Validation
function validateInput(input) {
    if (input.length === 0) {
        return false;
    }

    return true;
}


//Cleaning
function cleanTextInput(input) {
    let cleanString = input.replace(/_/g, "-").toLowerCase();

    cleanString = cleanString.replace(/\W/g, "");

    return cleanString;
}

//Checking
function checkingPalindrome(input) {
    const inputArray = input.split("");
    const inputArrayReverse = input.split("").toReversed();
    
    console.log(inputArray); //Just for testing
    console.log(inputArrayReverse);

    if (
        inputArray.length === inputArrayReverse.length &&
        inputArray.every((val, index) => val === inputArrayReverse[index])) {
            return true;
        } 
        return false;
}


//Result
function returnResult(boolean, input) {
    result.classList.remove("hidden");
   
    if (boolean) {
        result.innerHTML = (`${input.bold()} is a palindrome.`);
        shadow.classList.remove("shadow_red");
        shadow.classList.add("shadow_green");
        return;
    } else {
        result.innerHTML = (`${input.bold()} is not a palindrome.`);
        shadow.classList.remove("shadow_green");
        shadow.classList.add("shadow_red");
        return;
    }
}

checkButton.addEventListener("click", startPalindromChecker);