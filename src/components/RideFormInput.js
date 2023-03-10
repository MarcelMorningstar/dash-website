import { FaMapMarkerAlt } from "react-icons/fa";
import { useRef, useEffect } from "react";
import { usePlacesWidget } from "react-google-autocomplete";

function RideFormInput({name, placeholder, value, handleChange, setChoosing, chooseState, setStartMarker, setEndMarker, setInputs}){    
    const { ref } = usePlacesWidget({
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        onPlaceSelected: (place) => {
            setInputs(values => ({...values, [name]: place.formatted_address}));
            
            if(name === "pickuplocation"){
                setStartMarker({'lat':place.geometry.location.lat(), 'lng':place.geometry.location.lng()});
            }else{
                setEndMarker({'lat':place.geometry.location.lat(), 'lng':place.geometry.location.lng()});
            }
        },
        options:{
            types:['address'],
            fields:['formatted_address', 'geometry', 'geometry.location', 'geometry.location.lat'],
            componentRestrictions:{country:'lv'}
        }
    })

    return(
        <div
            style={{
                display:'grid',
                
                gridTemplateColumns: chooseState.currentChoose === name ? '90% auto' : '100%',
                gridColumnGap:'5px',
                gridColumn:'span 2'
            }}
        >
            <input 
                type="text" 
                name={name}
                value={value || ""}
                className='input-text'
                onChange={handleChange}
                placeholder={placeholder}
                onClick={() => {setChoosing({state:true, currentChoose:name})}}
                ref={ref}
            />
            {
                chooseState.currentChoose === name &&
                <div
                    style={{
                        backgroundColor:'#ffffffaf',
                        position:'relative'
                    }}
                >
                    <div style={{
                        position:'absolute',
                        top:'55%',
                        left:'30%',
                        transform: 'translate(0,-50%)'
                    }}>
                        <FaMapMarkerAlt />
                    </div>
                </div>
            }
        </div>
    );
}

export default RideFormInput;