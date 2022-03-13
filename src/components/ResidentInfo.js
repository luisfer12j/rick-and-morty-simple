import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentInfo = ({ resident }) => {
  const url = resident;
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios.get(url).then((res) => setCharacter(res.data));
  }, [url]);
  return (
    <li className="residentent-info">
      <div className="status-info">
        {character.status === "unknown" ? (
          <div className="unknown"></div>
        ) : character.status === "Alive" ? (
          <div className="alive"></div>
        ) : (
          <div className="dead"></div>
        )}
        <h3>{character.status}</h3>
      </div>
      <img src={character.image} alt="" />
      <h2>{character.name}</h2>
      <div className="info-container">
        <p>RAZA<br />
          <span>{character.species}</span>
        </p>
        <p>ORIGIN<br />
          <span>{character.origin?.name}</span>
        </p>
        <p>EPISODES WHERE APEAR<br />
          <span>{character.episode?.length}</span>
        </p>
      </div>
    </li>
  );
};

export default ResidentInfo;
