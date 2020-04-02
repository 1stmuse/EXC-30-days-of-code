
const convertNumToRoman = (num) =>{
    const romans = ['M', 'CM','D','CD', 'C', 'XC', 'L','XL', 'X', 'IX', 'V', 'IV', 'I'];
    const numbers =[1000, 900, 500, 400,100, 90, 50, 40,10, 9, 5, 4, 1];
    let result = '';


    for(let i =0; i<romans.length; i++){
        // if num is less than number[i], the while loop doesnt run, in goes back 
        // into the for loop to increment i
        while( num >= numbers[i]){
            result += romans[i]
            num -= numbers[i]
        }
    }
    return result
}

console.log(convertNumToRoman(66))