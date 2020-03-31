
const getFirstFibonaccinum = (num) => {

    let [prevVal, nextVal, answer]= [0, 1,]
    
    for(i=1; i<num; i++){
        [prevVal, nextVal] = [nextVal, prevVal+nextVal]
    }

    return answer=nextVal
}

console.log(getFirstFibonaccinum(8))