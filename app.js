const express = require('express');
const mongoose = require('mongoose');
const port = 3002;
const connect = require('./database.js');
const schema = require('./schema.js');
const app = express();
const Student = mongoose.model('Student', schema);


app.get('/', (request, response) => {
    response.send('hello world!!!')
});

app.get('/students', (request, response) => {
    Student.find((err, studentList) => {
        if (err) response.send({ error: err.message })
        response.send(studentList)
    })
})

app.post('/students', (request,response) => {
    student = request.body;
    Student.create(student,(err,createData)=>{
        if(err) response.send({err: err.message})
        response.send(createData);
    })
    // console.log(request)
    // response.send('created user')
});

function listner() {
    app.listen(port, () => console.log(`server is running in port ${port}`));
}

connect()
.on('error', (err) => console.log("error occured" + err))
.once('connected', () => listner())
.on('disconnected', () => connect())