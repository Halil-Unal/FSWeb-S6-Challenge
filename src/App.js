import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import Karakter from "./components/Karakter";

const App = () => {
  const [starData, setstartData] = useState([]);
  const [querry, setquerry] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then(function (response) {
        console.log(response);
        setstartData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    console.log("sayfam render oldu");
  }, []);

  const handleChange = (event) => {
    setquerry(event.target.value);
  };

  const filteredStarData = starData.filter((character) => {
    return character.name.toLowerCase().includes(querry.toLowerCase());
  });

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <label>Search</label>
      <input type="text" value={querry} onChange={handleChange} />

      <h4>Star Wars Major Characters List</h4>

      <div className="data">
        {filteredStarData.length > 0 ? (
          filteredStarData.map((character) => (
            <Karakter key={character.name} stardata={character} />
          ))
        ) : (
          <p>No matching characters found.</p>
        )}
      </div>
    </div>
  );
};

export default App;
