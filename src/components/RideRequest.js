import React from 'react'
import { useState } from 'react';
import "../Styles/rideheader.css";
import RideForm from './RideForm'
import RideRequestBackground from './RideRequestBackground';
import RideRequestMap from './RideRequestMap';
import AppStoreWidget from '../imgs/appstore.png';
import PlayStoreWidget from '../imgs/playstore.png';

export default function RideRequest() {
  const [isChoosing, setIsChoosing] = useState({
    state:false,
    currentChoose:""
  });

  const startMarker = {lat: 56.5097, lng: 27.3335};
  const endMarker = {lat: 56.5091, lng: 27.3335};

  return (
    <div className='ride-header-wrapper'>
      <div className='ride-header-content'>
          <div style={{
            paddingTop:'20px',
            display:'grid',
            gridTemplateColumns:'auto auto'
          }}>
            <RideForm setChoosing={setIsChoosing} chooseState={isChoosing} />
            {isChoosing.state &&
              <RideRequestMap 
                startMarker={startMarker}
                endMarker={endMarker}
              />
            }
          </div>
          <div className='ride-header-widgets'>
            <img src={AppStoreWidget}/>
            <img src={PlayStoreWidget}/>
          </div>
      </div>
      <RideRequestBackground />
    </div>
  )
  
}