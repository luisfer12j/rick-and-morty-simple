import React from "react";
import ResidentInfo from "./ResidentInfo";

const ResidentsList = ({ residents }) => {
  let aux = residents.length
  return (
      (aux === 0) ? 
        <div className="none-population"><p>Without population</p></div> 
        :
        <ul className="residents-list">
        {residents !== undefined &&
          residents.map((resident) => (
            <ResidentInfo resident={resident} key={resident} />
          ))}
        </ul> 
  );
};

export default ResidentsList;
