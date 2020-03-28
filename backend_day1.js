
const checkForPositiveOrNegative = (value) =>{

    let message = typeof(value) !== 'number' ? 'input should be a number' : value > 0 ? `${value} is positive` : `${value} is negative` ;
    console.log(message)
}

checkForPositiveOrNegative({})