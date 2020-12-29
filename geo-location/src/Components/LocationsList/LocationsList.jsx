import React from "react";

function LocationsList({ locations }) {
  return (
    <div
      style={{
        width: "50%",
        position: "relative",
        overflowY: "auto",
        color: "red",
      }}
    >
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
