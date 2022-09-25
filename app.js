<<<<<<< HEAD
const express = require('express');
const app= new express();
const port = 8000;
// const StaffData=require("./modals/staffData");
const cors = require('cors');
var bodyparser= require('body-parser');
app.use(cors());
app.use(bodyparser.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(require('path').join(__dirname,'/public')));
const staffRouter= require('./routes/staffroutes')(app);
app.use('/',staffRouter);
app.listen(port,()=>{
    console.log("Server ready at port:"+port);
});
=======


const Readline = require("@serialport/parser-readline");
const { SerialPort } = require('serialport');
 
// Defining the serial port
const port = new SerialPort({ path: 'COM7', baudRate: 9600 })

// The Serial port parser
const parser = new Readline();
port.pipe(parser);

// Read the data from the serial port
parser.on("data", (line) =>console.log(line));
console.log(`Number: ${num}`)

// Write the data to the serial port
// server/index.js

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });
>>>>>>> 7f3b7d06c3a64535c8fdc7ea48ac35f7030dba73
