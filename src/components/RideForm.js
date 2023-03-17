import {useState} from 'react';
import RideFormInput from './RideFormInput';

import styles from "../styles/rideheader.module.css";

function RideForm({setChoosing, chooseState, setStartMarker, setEndMarker}){
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <div className={styles['ride-header-form']} style={{display:"inline-block"}}>
            <h1 style={{
                paddingBottom:'10px'
            }}>Pieprasiet braucienu!</h1>
            <form 
                onSubmit={handleSubmit} 
                style=
                    {{
                        display:"grid",
                        rowGap:'5px',
                        columnGap:'5px'
                    }}
            >
                <RideFormInput
                    name="pickuplocation"
                    value={inputs.pickuplocation || ""}
                    handleChange={handleChange}
                    placeholder="Pieņemšanas punkts"
                    setChoosing={setChoosing}
                    inputs={inputs}
                    chooseState={chooseState}
                    setStartMarker={setStartMarker}
                    setEndMarker={setEndMarker}
                    setInputs={setInputs}
                />
                
                <RideFormInput
                    name="destination"
                    value={inputs.destination || ""}
                    handleChange={handleChange}
                    placeholder="Galapunkts"
                    setChoosing={setChoosing}
                    inputs={inputs}
                    chooseState={chooseState}
                    setStartMarker={setStartMarker}
                    setEndMarker={setEndMarker}
                    setInputs={setInputs}
                />

                <input 
                    type="submit"
                    style={{gridColumn:'span 2'}}
                    value="Pieprasīt"
                />
            </form>
            <br/>
            <p>
                Uzklikšķiniet uz vienu no laukiem, lai parādītu karti. Ierakstiet laukā pieņemšanas punkts adresi, no kuras jūs vēlaties izbraukt. Laukā galapunkts ierakstiet gala punkta adresi.
            </p>
        </div>
    )
}

export default RideForm;