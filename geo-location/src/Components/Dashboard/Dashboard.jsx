import React, { useState } from "react";
import "../../App.css";
import FileUpload from "../FileUpload/FileUpload";
import LocationsList from "../LocationsList/LocationsList";

const Dashboard = () => {
  const [locations, setLocations] = useState([]);

  const handleDrop = (files) => {
    let reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(files[0]);
  };

  const onReaderLoad = (event) => {
    const arr = JSON.parse(event.target.result);
    const key = "9RI-8p6SV3TxPBBKPa81H680SFQl80d8Txr2AyXq4tU";
    const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=${key}`;
    let placesData = [];
    const promises = arr.map((item) => {
      return fetch(
        `${url}&mode=retrieveAddresses&prox=${item.Latitude},${item.Longitude}`
      ).then((response) => {
        return response.json();
      });
    });
    Promise.all(promises).then((results) => {
      console.log(results);
      results.forEach((res, index) => {
        const address =
          res?.Response?.View[0]?.Result[0]?.Location?.Address?.Label;
        placesData.push({
          ...arr[index],
          address,
        });
      });
      setLocations(placesData);
    });
  };

  return (
    <div className="dashboard">
      <FileUpload handleDrop={handleDrop} />
      <LocationsList locations={locations} />
    </div>
  );
};

export default Dashboard;
