import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ScotchInfoBar from "../ScotchInfoBar";
import "./Contact.css";

function Contact() {
  const [books, setBooks] = useState(null);
  const [books1, setBooks1] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://api.rootnet.in/covid19-in/contacts"
    );

    setBooks(response.data.data.contacts.regional);
  };

  return (
    <div className="Contact" style={{backgroundColor:"black"}}>
      <h1 style={{color:"white"}}>Contact Details</h1>

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
                <div className="details">
                  <p>Location : {book.loc}</p>
                  <p>Number : {book.number}</p>
                </div>
              </div>
            );
          })}
      </div>

      <ScotchInfoBar seriesNumber="7" />
    </div>
  );
}

export default Contact;
