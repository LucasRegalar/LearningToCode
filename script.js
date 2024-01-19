const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const shadow = document.querySelector("form");




function checkInputValue(event) {

    event.preventDefault();

    if (textInput.value.length === 0) {
        console.log("Please input a value");
        alert("Please input a value");
    } else {
        checkForPalindrome();
    }
}




function checkForPalindrome() {
    
    const cleanTextInput = textInput.value.replace(/_/g, "-").toLowerCase();
    console.log(cleanTextInput);
    const cleanTextInput2 = cleanTextInput.replace(/\W/g, "");
    console.log(cleanTextInput2);
    
    const inputArray = cleanTextInput2.split("");
    const inputArrayReverse = inputArray.toReversed();

    console.log(inputArray);
    console.log(inputArrayReverse);

    result.classList.remove("hidden");

    if (
        inputArray.length === inputArrayReverse.length &&
        inputArray.every((val, index) => val === inputArrayReverse[index])) {
        result.innerHTML = (`${textInput.value.bold()} is a palindrome.`);
        shadow.classList.remove("shadow_red");
        shadow.classList.add("shadow_green");

    } else {
        result.innerHTML = (`${textInput.value.bold()} is not a palindrome.`);
        shadow.classList.remove("shadow_green");
        shadow.classList.add("shadow_red");
    }
}


checkButton.addEventListener("click", checkInputValue);