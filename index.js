const express = require("express");
const path = require("path");
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api/dialogflow', require('./server/routes/dialogflow'));


const port =  6000;

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});
