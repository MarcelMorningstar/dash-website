import React from 'react'
import { useState } from 'react';
import "../Styles/rideheader.css";
import RideForm from './RideForm'
import RideRequestMap from './RideRequestMap';
import AppStoreWidget from '../imgs/appstore.png';
import PlayStoreWidget from '../imgs/playstore.png';

export default function RideRequest() {
  const [isChoosing, setIsChoosing] = useState(false);

  if(!isChoosing){
    return (
      <div className='ride-header-wrapper'>
        <RideForm setChoosing={setIsChoosing} />
        <div className='ride-header-widgets'>
          <img src={AppStoreWidget}/>
          <img src={PlayStoreWidget}/>
        </div>
      </div>
    )
  }
  else{
    return (
      <div className='ride-header-wrapper'>
        <RideForm setChoosing={setIsChoosing} />
        <RideRequestMap />
        
        <div className='ride-header-widgets'>
          <img src={AppStoreWidget}/>
          <img src={PlayStoreWidget}/>
        </div>
      </div>
    )
  }
  
}