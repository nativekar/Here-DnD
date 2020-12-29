import React from "react";
import "../../App.css";

function LocationsList({ locations }) {
  return (
    <div className="address-area">
      {locations?.map((loc, index) => (
        <div key={loc.Name + index}>
          <label>Name: {loc.Name}</label>
          <br />
          <label>Address: {loc.address}</label>
        </div>
      ))}
    </div>
  );
}

export default LocationsList;
