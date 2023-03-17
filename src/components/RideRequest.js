import React from 'react'
import { useState } from 'react';
import RideForm from './RideForm'
import RideRequestBackground from './RideRequestBackground';
import RideRequestMap from './RideRequestMap';
import AppStoreWidget from '../imgs/appstore.png';
import PlayStoreWidget from '../imgs/playstore.png';

import Image from 'next/image';

import styles from "../styles/rideheader.module.css";

export default function RideRequest() {
  const [isChoosing, setIsChoosing] = useState({
    state:false,
    currentChoose:""
  });

  const [startMarker, setStartMarker] = useState(null);
  const [endMarker, setEndMarker] = useState(null);

  return (
    <div className={styles['ride-header-wrapper']}>
      <div className={styles['ride-header-content']}>
          <div className={styles['ride-header-content-grid']}  style={{
            paddingTop:'20px',
            display:'grid'
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
          <div className={styles['ride-header-widgets']}>
            <Image src={AppStoreWidget} alt="appstore"/>
            <Image src={PlayStoreWidget} alt="playstore"/>
          </div>
      </div>
      <RideRequestBackground />
    </div>
  )
  
}