import React, { Component } from 'react'

// const Readline = require("@serialport/parser-readline");
// const { SerialPort } = require('serialport');

// const port = new SerialPort({ path: 'COM7', baudRate: 9600 })

// The Serial port parser
// const parser = new Readline();
// port.pipe(parser);

// // Read the data from the serial port
// parser.on("data", (line) => console.log(line));

// Write the data to the serial port

class Badge extends Component {
  render() {
    return (
      <div>
  
          <h1>{`Number: ${num}`}</h1>
  
      </div>
    );
  }}
  
  export default Badge;
  