const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const pug = require("pug");
// const mongoose = require('mongoose');

const connect = require("./database.js");
const Student = require("./student.js");

const port = 3002;
const app = express();

app.use(bodyParser.json());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (request, response) => {
  // response.send("hello world!!!");
  response.render('hello_form');
});

app.get("/students", (request, response) => {
  Student.find((err, studentList) => {
    if (err)
      response.send({
        error: err.message
      });
    response.send(studentList);
  });
});

app.post("/students", (request, response) => {
  student = request.body;
  Student.create(student, (err, createData) => {
    if (err)
      response.send({
        err: err.message
      });
    response.send(createData);
  });


  // console.log(request)
  // response.send('created user')
});

function listner() {
  app.listen(port, () => console.log(`server is running in port ${port}`));
}

connect()
  .on("error", err => console.log("error occured" + err))
  .once("connected", () => listner())
  .on("disconnected", () => connect());
