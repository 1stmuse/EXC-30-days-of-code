const express = require('express');
const app = express();
const port= process.env.PORT || 2200;
app.use(express.json());

const db = [];


const sumGrades=(grades)=>{
    let totalGrade=0
    grades.forEach(grade => {
       totalGrade +=grade
    });
    return totalGrade
}
const sumUnits=(units)=>{
    let totalUnit=0
    units.forEach(unit => {
       totalUnit +=unit
    });
    return totalUnit
}
const getUnit =(results)=>{
   let units=[]
   results.map(result=>{
       const {unit} =result
       units.push(unit)
   })
   return units
}

const setGetGrades = (results)=>{
    let grades=[];
    results.map(result=>{
    const {score, unit}=result;
    if(score > 70){
        result.grade=5
    }else if (score >=60 && score <70){
        result.grade=4
    }else{
        result.grade=3
    }
    grades.push(result.grade* unit)

})
return grades
}


app.get('/getCGPA', (req, res)=>{

    if(db.length < 1){
        res.json('nothing in the database')
    }else{
        const getCGPA = (array)=>{
            const resultArray =  array[0].result
            const units = getUnit(resultArray)
            const grades = setGetGrades(resultArray)
            const totalGrade =sumGrades(grades)
            const totalUnit =sumUnits(units)
            
            const CGPA = totalGrade/totalUnit;
            
            return CGPA
            
            
            
        }
        const response =getCGPA(db)
        res.json(response)
    }
})

app.post('/studentInfo', (req, res)=>{
    const data = req.body

    db.push(data)
    res.json(db)
})

app.listen(port, ()=>{
    console.log('server created')
})