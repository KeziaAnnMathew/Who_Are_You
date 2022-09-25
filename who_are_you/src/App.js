
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
  }, []);
  return (
    <div className="App">
      <h2>Staff Log</h2>
      <div>
        <table>
          <tr>
            <th>name</th>
            <th>title</th>
            <th>specialty</th>
            <th>img</th>
            <th>entrytime</th>
            <th>exittime</th>
          </tr>
          {data.map(d => (
          <tr>
            <td>{d.name}</td>
             <td>{d.title}</td>
             <td>{d.specialty}</td>
             <td><img src={d.img}></img></td>
             <td>{d.entrytime}</td>
             <td>{d.exittime}</td>
          </tr>
        ))}
      </table>
      </div>
      
      
    </div>
  );
}

export default App;
