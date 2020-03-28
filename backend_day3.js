
const countVowelsInString = (input) => {

    let count = 0;
    const inputToLowerCase = input.toLowerCase()
    const vowels = 'aeiou';
    for(i=0; i<inputToLowerCase.length; i++){
        if(vowels.includes(input[i])){
            count++
        }
    }
    console.log(count)
}

countVowelsInString('hellooiode')