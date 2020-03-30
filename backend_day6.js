

const returnSquares = (array) => {

    const squares = array.map(element=> {
       let newArray = typeof(element)!=='number'? `cannot get square of a ${typeof(element)} ` : element*element;
       return newArray
    });
    console.log(squares)
}

returnSquares([2,3,4,5, 'w',()=>{}])