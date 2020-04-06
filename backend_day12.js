
const convertStringToNumber =  (string) =>{
    try{
        const number =Number.parseInt(string);
        if(Number(number) && String(number).length ===string.length){
            return number
        }
        throw 'invalid string'
    }catch (err){
        return err
    }
}

console.log(convertStringToNumber('5ee4'))

