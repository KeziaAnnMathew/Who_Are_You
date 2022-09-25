const express = require("express");

const PORT = process.env.PORT || 4572;

const app = express();


// const Readline = require("@serialport/parser-readline");
const { ReadlineParser } = require('@serialport/parser-readline')
// const Readline = require("@serialport/parser-readline");
const { SerialPort } = require('serialport');
const { parse } = require("path");
const { default: test } = require("node:test");
 
// Defining the serial port
const port = new SerialPort({ path: 'COM3', baudRate: 9600 });
var testVal = [];

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
parser.on('data', console.log)
parser.on('data', function(data){
  testVal.push(data+" ");
})

app.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
  res.send({data:testVal});
});
// The Serial port parser
// const parser = new Readline();
// port.pipe(parser);

// // Read the data from the serial port
// parser.on("data", (line) =>console.log(line));

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
