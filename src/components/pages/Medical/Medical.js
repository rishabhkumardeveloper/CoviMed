import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ScotchInfoBar from "../ScotchInfoBar";
import "./Medical.css";

function Medical() {
  const [books, setBooks] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://api.rootnet.in/covid19-in/hospitals/medical-colleges"
    );

    setBooks(response.data.data.medicalColleges);
    console.log("ss");
  };

  return (
    <div className="Medical">
      <h1>Medical Colleges</h1>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="books">
        {books &&
          books.map((book, index) => {
            return (
              <div className="book" key={index}>
                <h3 style={{ color: "black" }}>{book.name}</h3>
                <div className="details">
                  <p>City : {book.city}</p>
                  <p>State : {book.state}</p>
                  <p>Ownership : {book.ownership}</p>
                  <p>Addmission Capacity : {book.admissionCapacity}</p>
                  <p>Hospital Beds : {book.hospitalBeds}</p>
                </div>
              </div>
            );
          })}
      </div>

      <ScotchInfoBar seriesNumber="7" />
    </div>
  );
}

export default Medical;