import React, { useState } from "react";
import "./App.css";
import FileUpload from "./Components/FileUpload/FileUpload";
import LocationsList from "./Components/LocationsList/LocationsList";

function App() {
  const [locations, setLocations] = useState([]);

  const handleDrop = (files) => {
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(files[0]);
  };

  const onReaderLoad = (event) => {
    const arr = JSON.parse(event.target.result);

    const key = "oB8ZKJN34cD_iDu89ilrcTar4f1MhxJ3tsNXcKfXWLI";

    // Generate a new API KEY. This KEY is expired.
    const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=${key}`;

    let placesData = [];

    arr.forEach(async (item) => {
      await fetch(
        `${url}&mode=retrieveAddresses&prox=${item.Latitude},${item.Longitude}`
      )
        .then((response) => response.json())
        .then((res) => {
          if (!res.error) {
            const address = res?.Response?.View[0]?.Result[0]?.Address?.Label;
            placesData.push({
              ...item,
              address,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          placesData.push({ err });
        });
    });

    console.log("placesData", placesData);
    setLocations(placesData);
  };

  return (
    <div className="App">
      <FileUpload handleDrop={handleDrop}>
        <div style={{ height: "100%", width: 200 }}>
          <label>Places</label>
        </div>
      </FileUpload>
      <LocationsList locations={locations} />
    </div>
  );
}

export default App;
