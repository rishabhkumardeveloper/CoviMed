import React, { useState } from "react";
import axios from "axios";
import ScotchInfoBar from "../ScotchInfoBar";
import './Notification.css'

function Notifications() {
  const [books, setBooks] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://api.rootnet.in/covid19-in/notifications"
    );

    setBooks(response.data.data.notifications);
  };

  return (
    <div className="Notifications" style={{backgroundColor:"black"}}>
      <center>
      <h1>Notification</h1>

      {/* Fetch data from API */}
      <div style={{marginTop:2+'em'}}>
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
                  <a href={book.link}>{book.title}</a>
                </div>
              </div>
            );
          })}
      </div>

      <ScotchInfoBar seriesNumber="7" />
      </center>
    </div>
  );
}

export default Notifications;
