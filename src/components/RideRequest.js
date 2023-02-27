import React from 'react'
import RideForm from './RideForm'
import AppStoreWidget from '../imgs/appstore.png';
import PlayStoreWidget from '../imgs/playstore.png';

export default function RideRequest() {
  return (
    <div className='ride-header-wrapper'>
      <RideForm />
      <div className='ride-header-widgets'>
        <img src={AppStoreWidget}/>
        <img src={PlayStoreWidget}/>
      </div>
    </div>
  )
}