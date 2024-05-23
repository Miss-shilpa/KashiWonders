import React from 'react'

import { slides } from "../data/adventureImages.json";
import Carousel from "../Components/Carousel/Carousel";
import { Topdestination } from "../data/topAdventure.json";
import Details from "../Components/Details/Details";
import { divine } from "../data/adventureData.json";
import TopDestination from "../Components/Destinations/TopDestinations/TopDestination";
import AdventureMap from '../Components/Map/AdventureMap';
function Adventure() {
  return (
    <div>
      <div>
        <Carousel data={slides} />
      </div>

      <div>
        <h1 className="ghatHeading">Popular Travel Spots</h1>
        <TopDestination placeList={Topdestination}></TopDestination>
      </div>

      <div>
        <h1 className="ghatHeading">Exploring Kashi’s Adventures</h1>
        <div>
          <Details divineInfo={divine}></Details>
        </div>
      </div>

      <div>
      <AdventureMap/>
      </div>
    </div>
  );
}

export default Adventure




