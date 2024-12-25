import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/fetch")
      .then((response) => {
        setRecords(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // Add an empty dependency array to avoid infinite loop

  return (
    <div className="App">
      <h2>React App started</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {records.map((e) => (
            <tr key={e.uniqueId}>
              <td>{e.uniqueId}</td>
              <td>{e.name}</td>
              <td>{e.price}</td>
              <td>{e.description}</td>
              {/* <td>{e.image}</td> */}

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;