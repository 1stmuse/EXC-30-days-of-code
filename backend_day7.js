
const getFibonacciNum = (num) => {
    let result ;
    //to get the first and second term on the fibonacci series
    if(num==0 || num==1){
        return num
    }else{
        return getFibonacciNum(num-1) + getFibonacciNum(num-2)
    }
}

console.log(getFibonacciNum(7))