import React, { useState } from 'react'
import Image from 'next/image';
import RideForm from './RideForm'
import Map from './Map';

import dashIcon from '../imgs/icon.png';
import background from '../imgs/headerbackground.png';

import styles from "../styles/Header.module.css";

export default function Header(props) {
  const [isChoosing, setIsChoosing] = useState({
    state: false,
    currentChoose: ""
  });

  const [startMarker, setStartMarker] = useState(null);
  const [endMarker, setEndMarker] = useState(null);

  return (
    <div className={styles['ride-header-content']} style={{backgroundImage:`url(${background.src})`, backgroundSize:'cover', backgroundPosition:'10% 80%'}}>
      <div style={{display:'flex', justifyContent:'center', alignContent:'center', height:430, paddingTop:60}}>
          <Image style={{position:'absolute', top:30, left:20}} width={70} alt="DASH logo" src={dashIcon} />
          <div className={styles['ride-header-content-wrapper']} style={{paddingTop:70}}>
            <h1 style={{paddingBottom:15, color:'white'}}>Pieprasiet braucienu!</h1>
            <RideForm setChoosing={setIsChoosing} chooseState={isChoosing} setStartMarker={setStartMarker} setEndMarker={setEndMarker} onAccept={props.onAccept} markers={[startMarker, endMarker]} />
          </div>
      </div>
      <div className={styles['ride-header-map-parent']}>
          <Map 
            startMarker={startMarker}
            endMarker={endMarker}
            chooseState={isChoosing}
            setStartMarker={setStartMarker}
            setEndMarker={setEndMarker}
          />
      </div>
    </div>
  )
}