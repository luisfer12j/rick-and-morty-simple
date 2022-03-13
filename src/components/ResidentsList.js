import React from "react";
import ResidentInfo from "./ResidentInfo";

const ResidentsList = ({ residents }) => {
  return (
    <ul className="residents-list">
      {residents !== undefined &&
        residents.map((resident) => (
          <ResidentInfo resident={resident} key={resident} />
        ))}
    </ul>
  );
};

export default ResidentsList;
