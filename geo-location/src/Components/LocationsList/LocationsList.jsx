import React from "react";

function LocationsList({ locations }) {
  return (
    <div
      style={{
        height: "100%",
        width: "50%",
        position: "relative",
        overflowY: "auto",
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
