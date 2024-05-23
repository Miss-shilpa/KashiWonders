import React from 'react'

import { slides } from "../data/historicImages.json"
import Carousel from "../Components/Carousel/Carousel";
import { Topdestination } from "../data/topHistoricalPlaces.json";
import Details from "../Components/Details/Details";
import { divine } from "../data/historialData.json";
import TopDestination from "../Components/Destinations/TopDestinations/TopDestination";
import HistoricalMap from '../Components/Map/HistoricalMap';

function Historicplaces() {
  return (
    <div>
      <div>
        <Carousel data={slides} />
      </div>

      <div>
        <h1 className="ghatHeading">Destination Highlights</h1>
        <TopDestination placeList={Topdestination}></TopDestination>
      </div>

      <div>
        <h1 className="ghatHeading">
          Exploring Kashi's Historical Treasures
        </h1>
        <div>
          <Details divineInfo={divine}></Details>
        </div>
      </div>

      <div>
       <HistoricalMap/>
      </div>
    </div>
  );
}

export default Historicplaces



