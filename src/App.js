import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import Karakter from "./components/Karakter";
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [starData, setstartData] = useState(null);
  useEffect(() => {
    // Optionally the request above could also be done as
    axios
      .get("https://swapi.dev/api/people/", {
        params: {
         
        },
      })
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
  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
     < h4> Star Wars Major Characters List  </h4>
  <div className='data'>
      {starData ? starData.map((c) => <Karakter stardata={c} />) : "yükleniyor"}
      </div>
    </div>
   
  );
}

export default App;
