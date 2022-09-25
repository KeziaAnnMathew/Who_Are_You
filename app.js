

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