import {useState} from 'react';

function RideForm(){
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
        <div className='ride-header-form'>
            <h1 style={{
                paddingBottom:'10px'
            }}>Request a Ride Now</h1>
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
                    placeholder="Pickup Location"
                />
                <input 
                    type="text"
                    name="destination"
                    value={inputs.destination || ""}
                    className='input-text'
                    onChange={handleChange}
                    placeholder="Destination"
                />
                <input 
                    type="submit"
                    style={{gridColumn:'span 2'}}
                    value="Request Now"
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