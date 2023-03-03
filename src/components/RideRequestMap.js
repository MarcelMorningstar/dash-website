import React from "react";
import GoogleMapReact from 'google-map-react';

function RideRequestMap(){
    return(
        <div className='ride-header-map-wrapper' style={{
            display:"inline-block", 
            position:"absolute",
            marginTop:'20px',
            marginLeft:'20px'
          }}>
            <RequestMapComponent />
        </div>
    );
}

function RequestMapComponent() 
{
    const defaultProps = {
        center: {lat: 40.73, lng: -73.93}, 
        zoom: 12,
    }

    return (
        <div className="google-map" style={{height:'100%', width:'100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <RequestMapMarker
                    lat={defaultProps.center.lat}
                    lng={defaultProps.center.lng}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    )
}

function RequestMapMarker({text}){
    return (
        <div>{text}</div>
    )
}
export default RideRequestMap;