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

  const [startMarker, setStartMarker] = useState(null);
  const [endMarker, setEndMarker] = useState(null);

  return (
    <div className='ride-header-wrapper'>
      <div className='ride-header-content'>
          <div style={{
            paddingTop:'20px',
            display:'grid',
            gridTemplateColumns:'auto auto'
          }}>
            <RideForm setChoosing={setIsChoosing} chooseState={isChoosing} setStartMarker={setStartMarker} setEndMarker={setEndMarker} />
            {isChoosing.state &&
              <RideRequestMap 
                startMarker={startMarker}
                endMarker={endMarker}
                chooseState={isChoosing}
                setStartMarker={setStartMarker}
                setEndMarker={setEndMarker}
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