const express = require('express');
const app = express();
const port= process.env.PORT || 2200;
app.use(express.json());

const db = [];

app.get('/getitem', (req, res)=>{

    if(db.length < 1){
        res.json('nothing in the database')
    }else{
        res.json(db)
    }
})

app.post('/createTrack', (req, res)=>{
    const data={
        name: req.body.name,
        track: req.body.track
    }

    db.push(data)
    res.json('creted')
})

app.listen(port, ()=>{
    console.log('server created')
})