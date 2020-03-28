
const validateArgument = (arg) => {
    
    let message = typeof(arg) === 'undefined' ? `Error` : typeof(arg)

    console.log(message)
}

validateArgument(0/2)