const express = require('express');
const app = express();
const bcrypt = require('bcrypt')
const port= process.env.PORT || 2200;
app.use(express.json());

const db = [];

const hashPassword = async (passwrd, rounds)=>{
    const salt = await bcrypt.genSalt(rounds)
    const hashedPasswrd = await bcrypt.hash(passwrd, salt)
    return hashedPasswrd
}

const comparePasswrd = async (passwrd, hashedPasswrd)=>{
    return await bcrypt.compare(passwrd, hashedPasswrd)
}
const checkEmail = (email, db)=>{
   if(db[0].email ===email) return true
}


app.post('/login', async (req, res)=>{

    if(db.length < 1) return res.status(400).json('nothing in the database')
    if(!checkEmail(req.body.email, db)) return res.status(400).json('email does not exist')
    const passwrdCorrect =await comparePasswrd(req.body.password, db[0].password)
    if(!passwrdCorrect) return res.status(400).json('invalid password') 

    const user={
        user: db[0].username,
        email: db[0].email
    }
    res.json(user)
    
})

app.post('/signUp', async (req, res)=>{

    const hashedPassword = await hashPassword(req.body.password, 10)
    const user={
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword
    }
    try {
        db.push(user)
        res.json(db)
    } catch (error) {
        res.json( ' from server',error)
    }
})

app.listen(port, ()=>{
    console.log('server created')
})