import React from "react";
import GoogleMapReact from 'google-map-react';

function RideRequestMap({startMarker,endMarker}){
    return(
        <div className='ride-header-map-wrapper' style={{
            display:"block",
            marginTop:'20px',
            marginLeft:'20px'
          }}>
            <RequestMapComponent
                startMarker={startMarker}
                endMarker={endMarker}
            />
        </div>
    );
}

function RequestMapComponent({startMarker,endMarker}) 
{    
    const defaultProps = {
        center: {lat: 56.5097, lng: 27.3335}, 
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
                    lat={startMarker.lat}
                    lng={startMarker.lng}
                    text="Start"
                />
                <RequestMapMarker
                    lat={endMarker.lat}
                    lng={endMarker.lng}
                    text="End"
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