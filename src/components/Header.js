import React, { useState } from 'react'
import Image from 'next/image';
import RideForm from './RideForm'
import Map from './Map';

import AppStoreWidget from '../imgs/appstore.png';
import PlayStoreWidget from '../imgs/playstore.png';

import styles from "../styles/Header.module.css";

export default function Header() {
  const [isChoosing, setIsChoosing] = useState({
    state: false,
    currentChoose: ""
  });

  const [startMarker, setStartMarker] = useState(null);
  const [endMarker, setEndMarker] = useState(null);

  return (
    <div className={styles['ride-header-content']}>
      <div className={styles['ride-header-content-grid']}  style={{
        paddingTop:'20px',
        display:'grid'
      }}>
        <RideForm setChoosing={setIsChoosing} chooseState={isChoosing} setStartMarker={setStartMarker} setEndMarker={setEndMarker} />

        {isChoosing.state &&
          <Map 
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
  )
}