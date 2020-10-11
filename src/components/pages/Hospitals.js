import React,{useState} from 'react';
import './Hospital.css'
import axios from 'axios';
import ScotchInfoBar from './ScotchInfoBar';

function Hospitals() {
  const [books, setBooks] = useState(null);
  const [books1, setBooks1] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      'https://api.rootnet.in/covid19-in/hospitals/beds');

     setBooks(response.data.data.regional);
     setBooks1(response.data.data.summary);
     console.log(response.data.data.summary);
  };

  return (
    <center>
    <div className="Hospitals">
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
            const asOn=book.asOn.split("T")[0];
            return (
              <div className="book" key={index}>
                
                <div className="details">
                  <p>State : {book.state}</p>
                  <p>Rural Hospitals : {book.ruralHospitals}</p>
                  <p>Rural Beds : {book.ruralBeds}</p>
                  <p>Urban Hospitals : {book.urbanHospitals}</p>
                  <p>Urban Beds : {book.urbanBeds}</p>
                  <p>Total Hospitals : {book.totalHospitals}</p>
                  <p>Total Beds : {book.totalBeds}</p>
                  <p>Last Updated On : {asOn}</p>
                </div>
              </div>
            );
          })}
      </div>

      <ScotchInfoBar seriesNumber="7" />
    </div>
    </center>
  );
}

export default Hospitals;