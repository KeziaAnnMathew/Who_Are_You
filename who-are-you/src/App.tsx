import React from 'react';
import './App.css';
import Row from './components/Row'

function App() {

  const testaddRow = ()=>{
    const rows = [];

    // Push the main row first
    rows.push(
        <Row
          key="key"
          theme="theme"
        />
    );

    return rows;
  }

  return (
    <div className="App">
     <h2>Staff Visit History</h2>
      <div className="Logtable">
        Log History
        <table>
          {testaddRow()}
        </table>
      </div>
    </div>
  );
}

export default App;
