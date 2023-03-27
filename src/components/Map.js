import React from "react";
import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from "react-icons/fa";

import styles from "../styles/Header.module.css";

function RideRequestMap({startMarker,endMarker,chooseState,setStartMarker,setEndMarker}){
    return(
        <div className={styles['ride-header-map-wrapper']} /*'ride-header-map-wrapper'*/ style={{
            display:"block"
          }}>
            <RequestMapComponent
                startMarker={startMarker}
                endMarker={endMarker}
                chooseState={chooseState}
                setStartMarker={setStartMarker}
                setEndMarker={setEndMarker}
            />
        </div>
    );
}

function RequestMapComponent({startMarker,endMarker,chooseState,setStartMarker,setEndMarker}) 
{    
    const defaultProps = {
        center: {lat: 56.5097, lng: 27.3335}, 
        zoom: 12,
    }

    const _onClick = ({x,y,lat,lng,event}) => {
        if(chooseState.currentChoose === "pickuplocation"){
            setStartMarker({'lat':lat, 'lng':lng});
        }else{
            setEndMarker({'lat':lat, 'lng':lng});
        }
    }

    return (
        <div className={styles['google-map']}/*"google-map"*/ style={{height:'100%', width:'100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                onClick={_onClick}
            >
                {startMarker !== null &&
                    <RequestMapMarker
                        lat={startMarker.lat}
                        lng={startMarker.lng}
                        text="Start"
                    />
                }
                {endMarker !== null &&
                    <RequestMapMarker
                        lat={endMarker.lat}
                        lng={endMarker.lng}
                        text="End"
                    />
                }
            </GoogleMapReact>
        </div>
    )
}

function RequestMapMarker({text}){
    return (
        <div style={{position:'relative'}}>
            <div style={{
                transform:'translate(-50%,-100%)',
                width:'25px',
            }}>
                <p style={{
                    textAlign:'center'
                }}>{text}</p>
                <div style={{
                    transform:'translate(30%,0)',
                }}>
                    <FaMapMarkerAlt size="55%"/>
                </div>
            </div>
        </div>
    )
}
export default RideRequestMap;