
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
      .then(data =>setData(data.data[0]));
  }, []);
  return (
    <div className="App">
      <h2>Staff Log</h2>
      <div className="par">
        <table>
          <tr>
            <th>name & title</th>
            {/* <th>title</th> */}
            <th>img</th>
            <th>entry Time</th>
            <th>exit Time</th>
          </tr>
          {/* for(let i=0;i<data.length;i++){ */}
             <tr>
             <td>{data.name}<br></br>{data.title}</td>
             {/* <td>{data.title}</td> */}
             <td><img src={data.img}></img></td>
             <td>{data.entrytime}</td>
           </tr>
          {/* } */}
         
        </table>
      </div>
      
      
    </div>
  );
}

export default App;
