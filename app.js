const express = require('express');
const mongoose = require('mongoose');
const port = 3002;

const app = express();

// const Schema = mongoose.Schema;

// const Student = new Schema({
//     name: String,
//     age: Number
// });

const schema = new mongoose.Schema({
    studentList: {
        name: String,
        age: Number
    }
});

const Student = mongoose.model('Student', schema);

// const Blog = mongoose.model('Blog', blogSchema);

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
    student = request.body
    console.log(request)
    response.send('created user')
})

function listner() {
    app.listen(port, () => console.log(`server is running in port ${port}`));
}

function connect() {
    mongoose.connect('mongodb://localhost:27017/myapp', {
        useNewUrlParser: true
    });
    return mongoose.connection;
}

connect()
.on('error', (err) => console.log("error occured" + err))
.once('connected', () => listner())
.on('disconnected', () => connect())