import { FaMapMarkerAlt } from "react-icons/fa";
import { useRef, useEffect } from "react";

function RideFormInput({name, placeholder, value, handleChange, setChoosing, chooseState}){    
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