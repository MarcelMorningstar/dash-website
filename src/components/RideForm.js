import {useState} from 'react';

function RideForm({setChoosing}){
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
                <input 
                    type="text" 
                    name="pickuplocation"
                    value={inputs.pickuplocation || ""}
                    className='input-text'
                    onChange={handleChange}
                    placeholder="Pieņemšanas vieta"
                    onClick={() => {setChoosing(true)}}
                />
                <input 
                    type="text"
                    name="destination"
                    value={inputs.destination || ""}
                    className='input-text'
                    onChange={handleChange}
                    placeholder="Galapunkts"
                    onClick={() => {setChoosing(true)}}
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