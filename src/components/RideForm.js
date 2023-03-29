import React, { useState, useRef, useEffect } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { usePlacesWidget } from "react-google-autocomplete";
import { TaxiForm, Authorisation, SuccessWindow, MultiPageForm, SecondDriverForm, CourierForm, EvacuatorForm } from "../components/RideFormWindow";

import styles from "../styles/Header.module.css";

function RideForm({setChoosing, chooseState, setStartMarker, setEndMarker, onAccept}){
    const [inputs, setInputs] = useState({
        'ridetype':0,
        'pickuplocation':'',
        'destination':''
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const rideTypes = [
        {
            'name':'taxi',
            'requireStartpoint':true,
            'content':
                <MultiPageForm setWindowState={onAccept} extraData={{'requireStartPoint':true, 'inputs':inputs}}>
                    <TaxiForm/>
                    <Authorisation/>
                    <SuccessWindow/>
                </MultiPageForm>
        },
        {
            'name':'secondDriver',
            'requireStartpoint':true,
            'content':
                <MultiPageForm setWindowState={onAccept} extraData={{'requireStartPoint':true, 'inputs':inputs}}>
                    <SecondDriverForm/>
                    <Authorisation/>
                    <SuccessWindow/>
                </MultiPageForm>
        },
        {
            'name':'courier',
            'requireStartpoint':true,
            'content':
                <MultiPageForm setWindowState={onAccept} extraData={{'requireStartPoint':true, 'inputs':inputs}}>
                    <CourierForm/>
                    <Authorisation/>
                    <SuccessWindow/>
                </MultiPageForm>
        },
        {
            'name':'evacuator',
            'requireStartpoint':false,
            'content':
                <MultiPageForm setWindowState={onAccept} extraData={{'requireStartPoint':false, 'inputs':inputs}}>
                    <EvacuatorForm/>
                    <Authorisation/>
                    <SuccessWindow/>
                </MultiPageForm>
        }
    ]

    //Show ride form window when submitting this temporary form
    const handleSubmit = (event) => {
        event.preventDefault();
        onAccept({
            'show':true, 
            'content':
                rideTypes[inputs.ridetype].content                
        });
        console.log(inputs);
    }

    return (
        <div className={styles['ride-header-form']} style={{display:"inline-block"}}>
            
            <form 
                onSubmit={handleSubmit} 
                style=
                    {{
                        display:"grid",
                        rowGap:'5px',
                        columnGap:'5px'
                    }}
            >
                <RideFormModeSelector
                    selections={
                        [
                            { id:0, name:'Taksometrs' },
                            { id:1, name:'Otrais vadītājs' }, 
                            { id:2, name:'Kurjers'},
                            { id:3, name:'Evakuators'}
                        ]
                    }
                    name='ridetype'
                    setInputs={setInputs}
                />

                {
                    rideTypes[inputs.ridetype].requireStartpoint &&
                    (
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
                    )
                }
                
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

function RideFormInput({name, placeholder, value, handleChange, setChoosing, chooseState, setStartMarker, setEndMarker, setInputs}){    
    const { ref } = usePlacesWidget({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
        onPlaceSelected: (place) => {
            setInputs(values => ({...values, [name]: place.formatted_address}));
            /*
            if(name === "pickuplocation"){
                setStartMarker({'lat':place.geometry.location.lat(), 'lng':place.geometry.location.lng()});
            }else{
                setEndMarker({'lat':place.geometry.location.lat(), 'lng':place.geometry.location.lng()});
            }
            */
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
                
                gridTemplateColumns: chooseState.currentChoose === name ? 'auto 40px' : '100%',
                gridColumnGap:'5px',
                gridColumn:'span 2'
            }}
        >
            <input 
                type="text" 
                name={name}
                value={value || ""}
                className={styles['input-text']}
                onChange={handleChange}
                placeholder={placeholder}
                onFocus={() => {setChoosing({state:true, currentChoose:name})}}
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

function RideFormModeSelector(props){
    const [selection,setSelection] = useState(0);

    useEffect(() => {
        props.setInputs(values => ({...values, [props.name]: 0}));
    }, []);

    return(
        <div
            style={{
                color:'black',
                display:'flex',
                justifyContent:'space-around',
                gridColumn:'span 2',
                height:40,
                fontSize:'0.9em'
            }}
        >
            {props.selections.map((mode) => (
                <RideFormModeSelection name={props.name} setSelection={setSelection} setInputs={props.setInputs} currentSelection={selection} key={mode.id} selection={mode} />
            ))}
        </div>
    );
}

function RideFormModeSelection(props){
    const _onClick = () => {
        props.setSelection(props.selection.id);
        props.setInputs(values => ({...values, [props.name]: props.selection.id}));
    }
    
    return(
        <div
            onClick={
                _onClick
            }
            style={{
                backgroundColor: (props.currentSelection == props.selection.id ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.6)'),
                color: (props.currentSelection == props.selection.id ? 'white' : 'black'),
                width:'100%',
                height:'100%',
                cursor:'pointer'
            }}
        >
            <div style={{
                display:'flex',
                justifyContent:'center',
                paddingTop:10,
                fontWeight:'light'
            }}>
                {props.selection.name}
            </div>
        </div>
    );
}

export default RideForm;
