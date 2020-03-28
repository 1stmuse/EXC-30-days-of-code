
const getDuplicatesInArrays = (array1, array2) => {

    let dupValueObj = {}
    let result = []
    for (let i = 0; i < array2.length; i++) {
        for (let j = 0; j < array1.length; j++) {
            if(array2[i]===array1[j]){
                dupValueObj[array1[j]]= 0 || i;
            }
            
        }
    }
    for(key in dupValueObj)(
        result.push(key)
    )
    console.log(result)
}

getDuplicatesInArrays([2,3,4,5,7,9,'a'], [2,5,0,5,'a','a'])