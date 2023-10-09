const express = require('express');
const mongoose = require('mongoose');
var app = express();
const port = 3001;
const cors = require('cors');
const routes = require('./routes/api');

app.use(cors());



app.use('/api', routes);

mongoose.connect('mongodb+srv://Dev_Rahul:njg9WvRA5ySjVm2N@cluster0.hudmznh.mongodb.net/?retryWrites=true&w=majority', 

console.log("Db Connected"));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});