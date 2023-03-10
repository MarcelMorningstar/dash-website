import {useState} from 'react';
import RideFormInput from './RideFormInput';

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
        <div className='ride-header-form' style={{display:"inline-block"}}>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veritatis id, tempora accusantium maxime ut quo doloremque veniam ullam dolore animi aperiam odit atque, facilis dolorem hic! Asperiores, aperiam nulla.
            </p>
        </div>
    )
}

export default RideForm;