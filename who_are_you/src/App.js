
// import Badge from "./comp/app"
import logo from './logo.svg';
import './App.css';
import React from 'react';
// arduino cdoe
// const num = 'hh';

// const Readline = require("@serialport/parser-readline");
// const { SerialPort } = require('serialport');

// const port = new SerialPort({ path: 'COM7', baudRate: 9600 })
// //com7 is j the arduino connected thing in device manager
// // const Readline = SerialPort.parsers.Readline;
// port.Open();
// _continue = true;
// readThread.Start();
// const boop = Console.ReadLine();
// console.log(boop)

// const lineStream = port.pipe(new Readline())

// // name = Console.ReadLine(

// lineStream.on("data", (line) => console.log(line));


function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:4572/")
      .then(res =>res.json())
      .then(data =>setData(data.data));
  }, [data]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
          Edit <code>src/App.js</code> and save to reload.
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Badge/> */}
      </header>
    </div>
  );
}

export default App;
