import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import LocationInfo from "./components/LocationInfo";
import SearchBox from "./components/SearchBox";
import ResidentsList from "./components/ResidentsList";
import Header from "./components/Header";
import ChargingScreen from "./components/ChargingScreen";

function App() {
  const [location, setLocation] = useState({});
  useEffect(() => {
    const random = Math.floor(Math.random() * 125 + 1);
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res) => setLocation(res.data));
  }, []);
  return (
    <div className="App">
      <Header />
      {location.residents!==undefined? 
        <>
          <SearchBox setLocation={setLocation} />
          <LocationInfo location={location} />
          <ResidentsList residents={location.residents} />
        </>
      : <ChargingScreen/>}
    </div>
  );
}

export default App;
