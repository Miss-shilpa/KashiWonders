import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import { header } from "./data/header.json";
import { slides } from "./data/carouselData.json";
import { conveyance } from "./data/conveyanceData.json";

import Carousel from "./Components/Carousel/Carousel";

import Conveyance from "./Components/Conveyance/Conveyance";
import Destinations from "./Pages/Destinations";

import DivinePlaces from "./Pages/DivinePlaces";
import Ghats from "./Pages/Ghats";
import Adventure from "./Pages/Adventure";
import Museum from "./Pages/Museum";
import Historicplaces from "./Pages/Historicplaces";




function App() {
  return (
    <div>
      <Header />
      <Carousel data={slides} />
      <Conveyance info={conveyance} />
      <Destinations headerOne={header[0]} />

      <Routes>
        <Route path="/DivinePlaces" element={<DivinePlaces />} />
        <Route path="/ghats" element={<Ghats />} />
        <Route path="/museum" element={<Museum />} />
        <Route path="/historicalPlaces" element={<Historicplaces />} />
        <Route path="/adventure" element={<Adventure />} />
      </Routes>
    </div>
  );
}

export default App;
