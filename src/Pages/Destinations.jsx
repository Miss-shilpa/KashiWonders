import React from "react";
import "./Destinations.css";
import { destination } from "../data/destinationData.json";
import Destination from "../Components/Destinations/AllDestination/Destination";
import { Topdestination } from "../data/topDestination.json";
import TopDestination from "../Components/Destinations/TopDestinations/TopDestination";
import VaranasiMap from "../Components/Map/VaranasiMap";


function Destinations({ headerOne }) {
  return (
    <div>
      <div className="Destinations">
        <div className="DestinationsImage">
          <img src={headerOne.image} alt="Destination Image" />
        </div>
        <div className="DestinationsTitle">
          <h1 className="destinationsHeading">{headerOne.title}</h1>
        </div>
      </div>
      <div>
        <h1 className="destinationHeading">Know the Destinations</h1>
        <Destination places={destination} />
      </div>
      <div>
        <h1 className="destinationHeading">Must-Visit Destinations</h1>
        <TopDestination placeList={Topdestination}></TopDestination>
      </div>
      <div>
        <VaranasiMap />
      </div>
     
    </div>
  );
}

export default Destinations;
