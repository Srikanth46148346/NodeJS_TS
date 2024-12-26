import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function App() {
  const [records, setRecords] = useState([]);
  const [status, setStatus] = useState(""); // For status messages

  const uniqueId = useRef();
  const name = useRef();
  const price = useRef();
  const description = useRef();
  const image = useRef();

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

  // Add record function
  function addRecord() {
    // Validate input fields before sending data
    if (!uniqueId.current.value || !name.current.value || !price.current.value || !description.current.value || !image.current.value) {
      setStatus("All fields are required.");
      return;
    }

    // Send POST request with corrected data structure
    axios
      .post("http://localhost:8080/insert", {
        uniqueId: uniqueId.current.value,
        name: name.current.value,
        price: price.current.value,
        description: description.current.value,
        image: image.current.value,

      })
      .then((response) => {
        setStatus("Record added successfully!");
        // Optionally, you can refresh the records here
        console.log(response.data)
        setRecords((prevRecords) => [...prevRecords, response.data]); // Adding the new record to the state
      })
      .catch((err) => {
        console.log(err.response);
        setStatus("Error adding record.");
      });
  }

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
              <td>{e.image}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <input type='text' placeholder="ID" ref={uniqueId}></input>
      <input type='text' placeholder="Name" ref={name}></input>
      <input type='text' placeholder="Price" ref={price}></input>
      <input type='text' placeholder="Description" ref={description}></input>
      <input type='text' placeholder="Image" ref={image}></input>
      <button onClick={addRecord}>Add Record</button>

      {/* Displaying status */}
      <p>{status}</p>
    </div>
  );
}

export default App;
