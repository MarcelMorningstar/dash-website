import React, { useState } from 'react'
import Image from 'next/image';
import RideForm from './RideForm'
import Map from './Map';

import AppStoreWidget from '../imgs/appstore.png';
import PlayStoreWidget from '../imgs/playstore.png';
import headerImage from '../imgs/header-bg.png';

import styles from "../styles/Header.module.css";

export default function Header(props) {
  const [isChoosing, setIsChoosing] = useState({
    state: false,
    currentChoose: ""
  });

  const [startMarker, setStartMarker] = useState(null);
  const [endMarker, setEndMarker] = useState(null);

  return (
    <div className={styles['ride-header-content']}>
      <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
          <div style={{paddingTop:20}}>
            <h1>Pieprasiet braucienu!</h1>
            <RideForm setChoosing={setIsChoosing} chooseState={isChoosing} setStartMarker={setStartMarker} setEndMarker={setEndMarker} onAccept={props.onAccept} />
          </div>
      </div>
      <div>
        { isChoosing.state &&
            <Map 
              startMarker={startMarker}
              endMarker={endMarker}
              chooseState={isChoosing}
              setStartMarker={setStartMarker}
              setEndMarker={setEndMarker}
            />
          }
      </div>
    </div>
  )
}