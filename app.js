const express = require('express') 
const bodyparser = require('body-parser')  
const Volunteer = require("./db")
const app = express()  

app.use(express.static('public')) 
//localhost:3000/index.html
app.use(bodyparser.json())  

app.post('/login', function (req, res) {
    const number = req.body.Number
    Volunteer.find({Number:number},(err, docs) => {
        console.log(docs)
        res.send(docs)
    })
})

app.listen(3000, () => {  
    console.log('OK')
})