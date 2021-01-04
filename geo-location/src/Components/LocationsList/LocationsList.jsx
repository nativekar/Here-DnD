import React from "react";
import "../../App.css";

const LocationsList = ({ locations }) => {
  return (
    <div className="address-area">
      <h3> Places: </h3>
      {locations?.map((loc, index) => (
        <React.Fragment key={loc.Name + index}>
          <div>
            <label>
              <span>Name:</span> {loc.Name}
            </label>
            <br />
            <label>
              <span>Address:</span> {loc.address}
            </label>
          </div>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
};

export default LocationsList;
