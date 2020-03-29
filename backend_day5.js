
const checkIfPalindrome = (input) => {

    const inputToLowerCase = input.toLowerCase().replace(' ', '');
    const splitToArray = inputToLowerCase.split('');
    const reverseArray = splitToArray.reverse();
    const reversedInput = reverseArray.join('');
    
    let result = inputToLowerCase === reversedInput ? `${input} is a palindrome` : `${input} is not a palindrome`;
    console.log(result)
}

checkIfPalindrome('race car')