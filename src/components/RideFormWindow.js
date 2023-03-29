import React, {useState, useEffect, useRef} from "react"
import Map from "./Map";
import { usePlacesWidget } from "react-google-autocomplete";
import {FiCheckCircle, FiArrowDown} from 'react-icons/fi';

import styles from '../styles/WindowForm.module.css';


const checkRequiredInputs = (requirements, curInputs) => {
    let missingFields = [];
    
    requirements.map((requirement) => {
        if(curInputs[requirement.inputName] === undefined || curInputs[requirement.inputName] == ''){
            missingFields.push(requirement.inputName);
        }
    });

    console.log(missingFields);

    return missingFields;
}

const exists = (array, element) => {
    return array.includes(element);
}

const validateInput = (requiredFields, setMissingFields, curInputs, page, setPage) => {

    console.log(requiredFields,curInputs);

    let currentlyMissingFields = checkRequiredInputs(requiredFields, curInputs);
    if(currentlyMissingFields.length > 0){
        setMissingFields(currentlyMissingFields);
    }else{
        window.scrollTo(0, 0);
        setPage(page);
    }
}


function MultiPageForm(props){
    const [page, setCurrentPage] = useState(0);
    const [inputs, setInputs] = useState({
        'location_from':'',
        'location_to':''
    });

    useEffect(()=>{
        setInputs(values => ({...values, ['location_from']: props.extraData.inputs['pickuplocation']}));
        setInputs(values => ({...values, ['location_to']: props.extraData.inputs['destination']}));

        window.scrollTo(0, 0);
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));

        console.log(inputs);
    }

    const clonedPage = React.cloneElement(props.children[page], {
        'setPage':setCurrentPage,
        'setWindowState':props.setWindowState,
        'extraData':props.extraData,
        'setInputs':handleChange,
        'setInputsDirect':setInputs,
        'inputs':inputs
    })

    return (
        <div>
            {
                (clonedPage)
            }
        </div>
    )
}

function TaxiForm(props){
    const [missingFields, setMissingFields] = useState([]);

    const requiredFields = [
        {'inputName':'name'},
        {'inputName':'number'},
        {'inputName':'seat_amount'},
        {'inputName':'accept_time'},
        {'inputName':'location_to'},
    ];

    if(props.extraData.requireStartPoint){
        requiredFields.push({'inputName':'location_from'});
    }

    const inputData = {
        'missingFields':missingFields,
        'setInputs':props.setInputs,
        'setInputsDirect':props.setInputsDirect,
        'inputs':props.inputs
    }
    
    return (
        <div>
            <div style={{paddingBottom:20}}>
                <h2>Taksometra izsaukšana</h2>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <div>
                    <FromToInput markers={props.extraData.markers} requireStartPoint={props.extraData.requireStartPoint} inputData={inputData}/>
                    <InputSection name="Kontaktinformācija">
                        <InputGeneric placeholder="Jānis Bērziņš" name="Vārds, Uzvārds" ename='name' inputData={inputData}/>
                        <InputGeneric placeholder="+371 12341234" name="Telefona numurs" ename='number' inputData={inputData} />
                    </InputSection>
                    <InputSection name="Brauciena informācija">
                        <InputNumber placeholder="0" name="Sēdvietu skaits" ename='seat_amount' inputData={inputData} />
                        <InputDateTime name="Pieņemšanas laiks" ename='accept_time' inputData={inputData} />
                        <InputCheckmark name="Bērnu sēdeklītis" ename='child_seat' inputData={inputData} />
                        <InputTextarea name="Papildus komentāri" ename='comments' inputData={inputData} />
                    </InputSection>
                    <div style={{paddingBottom:30}}>
                        <InputConfirmation ename="conf_rules" inputData={inputData}>
                            Es piekrītu lietošanas noteikumiem.
                        </InputConfirmation>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <InputButton name="Atcelt" click={() => {props.setWindowState({'show':false})}}/>
                    <InputButton name="Turpināt" click={() => {validateInput(requiredFields, setMissingFields, props.inputs, 1, props.setPage)}}/>
                </div>
            </div>
        </div>
    )
}

function SecondDriverForm(props){
    const [missingFields, setMissingFields] = useState([]);

    const requiredFields = [
        {'inputName':'name'},
        {'inputName':'number'},
        {'inputName':'automodel'},
        {'inputName':'autonumber'},
        {'inputName':'technicalchecktime'},
        {'inputName':'taketime'},
        {'inputName':'conf_driverrules'},
        {'inputName':'conf_rules'},
        {'inputName':'location_to'}
    ];

    if(props.extraData.requireStartPoint){
        requiredFields.push({'inputName':'location_from'});
    }

    const inputData = {
        'missingFields':missingFields,
        'setInputs':props.setInputs,
        'setInputsDirect':props.setInputsDirect,
        'inputs':props.inputs
    }

    return (
        <div>
            <div style={{paddingBottom:20}}>
                <h2>Otrā vadītāja izsaukšana</h2>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <div>
                    <FromToInput markers={props.extraData.markers} requireStartPoint={props.extraData.requireStartPoint} inputData={inputData}/>
                    <InputSection name="Kontaktinformācija">
                        <InputGeneric placeholder="Jānis Bērziņš" name="Vārds, Uzvārds" ename='name' inputData={inputData}/>
                        <InputGeneric placeholder="+371 12341234" name="Telefona numurs" ename='number' inputData={inputData} />
                    </InputSection>
                    <InputSection name="Brauciena informācija">
                        <InputGeneric placeholder="BMW x5" name="Autotransporta modelis" ename='automodel' inputData={inputData} />
                        <InputGeneric placeholder="KJ-1234" name="Autotransporta numurs" ename='autonumber' inputData={inputData} />
                        <InputDateTime name="Tehniskās apskates iziešanas datums" ename='technicalchecktime' inputData={inputData} />
                        <InputDateTime name="Pieņemšanas laiks" ename='taketime' inputData={inputData} />
                    </InputSection>
                    <div style={{paddingBottom:30}}>
                        <InputConfirmation ename='conf_driverrules' inputData={inputData}>
                            Apstiprinu, ka mans autotransporta līdzeklis pakļaujas Otrā Vadītāja izsaukšanas noteikumiem.
                        </InputConfirmation>
                        <InputConfirmation ename='conf_rules' inputData={inputData}>
                            Es piekrītu lietošanas noteikumiem.
                        </InputConfirmation>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <InputButton name="Atcelt" click={() => {props.setWindowState({'show':false})}}/>
                    <InputButton name="Turpināt" click={() => {validateInput(requiredFields, setMissingFields, props.inputs, 1, props.setPage)}}/>
                </div>
            </div>
        </div>
    )
}

function CourierForm(props){
    const [missingFields, setMissingFields] = useState([]);

    const requiredFields = [
        {'inputName':'sendername'},
        {'inputName':'senderphone'},
        {'inputName':'receivername'},
        {'inputName':'receiverphone'},
        {'inputName':'packageitems'},
        {'inputName':'packagemass'},
        {'inputName':'packagescale'},
        {'inputName':'taketime'},
        {'inputName':'providetime'},
        {'inputName':'conf_mailrules'},
        {'inputName':'conf_rules'},
        {'inputName':'location_to'},
    ];

    if(props.extraData.requireStartPoint){
        requiredFields.push({'inputName':'location_from'});
    }

    const inputData = {
        'missingFields':missingFields,
        'setInputs':props.setInputs,
        'setInputsDirect':props.setInputsDirect,
        'inputs':props.inputs
    }

    return (
        <div>
            <div style={{paddingBottom:20}}>
                <h2>Kurjera izsaukšana</h2>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <div>
                    <FromToInput markers={props.extraData.markers} requireStartPoint={props.extraData.requireStartPoint} inputData={inputData}/>
                    <InputSection name="Kontaktinformācija">
                        <InputGeneric placeholder="Jānis Bērziņš" name="Izsūtītāja Vārds, Uzvārds" ename='sendername' inputData={inputData} />
                        <InputGeneric placeholder="+371 12341234" name="Izsūtītāja Telefona numurs" ename='senderphone' inputData={inputData} />
                        <InputGeneric placeholder="Jānis Bērziņš" name="Saņēmēja Vārds, Uzvārds" ename='receivername' inputData={inputData} />
                        <InputGeneric placeholder="+371 12341234" name="Saņēmēja Telefona numurs" ename='receiverphone' inputData={inputData} />
                    </InputSection>
                    <InputSection name="Pasta informācija">
                        <InputGeneric placeholder="Dokuments, ēdiens" name="Pasta saturs" ename='packageitems' inputData={inputData} />
                        <InputNumber  placeholder="1"  name="Pasta svars (kg)" ename='packagemass' inputData={inputData} />
                        <InputGeneric placeholder="0.25, 0.31, 0.26"  name="Pasta izmērs (x, y, z) (m)" ename='packagescale' inputData={inputData} />
                        <InputDateTime name="Vēlamais saņemšanas datums un laiks" ename='taketime' inputData={inputData} />
                        <InputDateTime name="Vēlamais piegādes datums un laiks" ename='providetime' inputData={inputData} />
                    </InputSection>
                    <div style={{paddingBottom:30}}>
                        <InputConfirmation ename='conf_mailrules' inputData={inputData}>
                            Apstiprinu, ka mans pasts pakļaujas Kurjera izsaukšanas noteikumiem.
                        </InputConfirmation>
                        <InputConfirmation ename='conf_rules' inputData={inputData}>
                            Es piekrītu lietošanas noteikumiem.
                        </InputConfirmation>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <InputButton name="Atcelt" click={() => {props.setWindowState({'show':false})}}/>
                    <InputButton name="Turpināt" click={() => {validateInput(requiredFields, setMissingFields, props.inputs, 1, props.setPage)}}/>
                </div>
            </div>
        </div>
    )
}

function EvacuatorForm(props){
    const [missingFields, setMissingFields] = useState([]);

    const requiredFields = [
        {'inputName':'name'},
        {'inputName':'number'},
        {'inputName':'autotype'},
        {'inputName':'misc'},
        {'inputName':'conf_rules'},
        {'inputName':'location_to'},
    ];

    if(props.extraData.requireStartPoint){
        requiredFields.push({'inputName':'location_from'});
    }

    const inputData = {
        'missingFields':missingFields,
        'setInputs':props.setInputs,
        'setInputsDirect':props.setInputsDirect,
        'inputs':props.inputs
    }
    
    return (
        <div>
            <div style={{paddingBottom:20}}>
                <h2>Evakuatora izsaukšana</h2>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <div>
                    <FromToInput markers={props.extraData.markers} requireStartPoint={props.extraData.requireStartPoint} inputData={inputData}/>
                    <InputSection name="Kontaktinformācija">
                        <InputGeneric placeholder="Jānis Bērziņš" name="Vārds, Uzvārds" ename='name' inputData={inputData} />
                        <InputGeneric placeholder="+371 12341234" name="Telefona numurs" ename='number' inputData={inputData} />
                    </InputSection>
                    <InputSection name="Negadījuma informācija">
                        <InputGeneric placeholder="Viegla automašīna" name="Autotransporta tips" ename='autotype' inputData={inputData}/>
                        <InputTextarea name="Aprakstiet situāciju" ename='misc' inputData={inputData}/>
                    </InputSection>
                    <div style={{paddingBottom:30}}>
                        <InputConfirmation ename='conf_rules' inputData={inputData}>
                            Es piekrītu lietošanas noteikumiem.
                        </InputConfirmation>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <InputButton name="Atcelt" click={() => {props.setWindowState({'show':false})}}/>
                    <InputButton name="Turpināt" click={() => {validateInput(requiredFields, setMissingFields, props.inputs, 1, props.setPage)}}/>
                </div>
            </div>
        </div>
    )
}

function Authorisation(props){
    const [missingFields, setMissingFields] = useState([]);
    const [focus, setFocus] = useState("0");

    const requiredFields = [
        {'inputName':'0'},
        {'inputName':'1'},
        {'inputName':'2'},
        {'inputName':'3'},
        {'inputName':'4'},
        {'inputName':'5'},
    ];

    const inputData = {
        'missingFields':missingFields,
        'setInputs':props.setInputs,
        'setInputsDirect':props.setInputsDirect,
        'inputs':props.inputs
    }

    return (
        <div>
            <div style={{paddingBottom:20}}>
                <h2>Autorizācija</h2>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:'600px'}}>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <div style={{paddingTop:40, textAlign:'center', width:'90%'}}>
                        <p>Autorizācijas kods tika aizsūtīts uz +371 00000000</p>
                        <div style={{display:'flex', justifyContent:'center', columnGap:10, paddingTop:20, width:'100%%'}}>
                            <AuthorisationNumber ename="0" focus={focus} setFocus={setFocus} missingFields={inputData.missingFields} onChange={inputData.setInputs}/>
                            <AuthorisationNumber ename="1" focus={focus} setFocus={setFocus} missingFields={inputData.missingFields} onChange={inputData.setInputs}/>
                            <AuthorisationNumber ename="2" focus={focus} setFocus={setFocus} missingFields={inputData.missingFields} onChange={inputData.setInputs}/>
                            <AuthorisationNumber ename="3" focus={focus} setFocus={setFocus} missingFields={inputData.missingFields} onChange={inputData.setInputs}/>
                            <AuthorisationNumber ename="4" focus={focus} setFocus={setFocus} missingFields={inputData.missingFields} onChange={inputData.setInputs}/>
                            <AuthorisationNumber ename="5" focus={focus} setFocus={setFocus} missingFields={inputData.missingFields} onChange={inputData.setInputs}/>
                        </div>
                    </div>
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <InputButton name="Atcelt" click={() => {props.setPage(0)}}/>
                    <InputButton name="Turpināt" click={() => {validateInput(requiredFields, setMissingFields, props.inputs, 2, props.setPage)}}/>
                </div>
            </div>
        </div>
    )
}

function AuthorisationNumber(props){
    const className = styles['input-authorisation'];
    
    var authLineClass = styles['input-authorisation-line'];
    var authDotClass = styles['input-authorisation-dot'];

    if(exists(props.missingFields, props.ename))
        authLineClass = styles['input-authorisation-line-missing'];

    const globalFocus = parseInt(props.focus);
    const localFocus = parseInt(props.ename);

    const handleChange = (e) => {
        if(!isNaN(parseFloat(e.target.value))){
            if(localFocus < 5){
                props.setFocus(parseInt(localFocus+1));
            }

            if(e.target.value.length > 1){
                e.target.value = e.target.value.slice(1,2);
            }else{
                e.target.value = e.target.value.slice(0,1);
            }

            if(isNaN(parseFloat(e.target.value)))
                e.target.value = '';
            
            props.onChange(e);
        }
        else
        {
            e.target.value = '';
            props.onChange(e);
        }
    }

    const overrideFocus = () => {
        props.setFocus(localFocus);
    }

    const inputfield = useRef(null);

    if(localFocus == globalFocus){
        if(inputfield.current){
            inputfield.current.focus();
        }

        authLineClass = styles['input-authorisation-line-focused'];
        authDotClass = styles['input-authorisation-dot-focused'];
    }

    return (
        <div>
            <div style={{display:'flex', justifyContent:'center', marginBottom:4}}>
                <div className={authDotClass} />
            </div>
            <div className={className}>
                <input onFocus={overrideFocus} ref={inputfield} name={props.ename} onChange={handleChange} placeholder="0" style={{width:'100%', height:'100%', backgroundColor:'rgba(255,255,255,0)', border:'none', textAlign:'center'}} type="text"/>
                <div className={authLineClass} />
            </div>
        </div>
    )
}

function SuccessWindow(props){
    return (
        <div>
            <div style={{paddingBottom:20}}>
                <h2></h2>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:'600px'}}>
                <div style={{paddingTop:40, textAlign:'center'}}>
                    <div><FiCheckCircle style={{color:'green', height:80, width:'auto'}} /></div>
                    <div>Jūsu izsaukums tika apstiprināts!</div>
                    <div>Turpmāk mēs ar Jums sazināsimies caur Jūsu telefona numuru +371 00000000</div>
                </div>
                <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <InputButton name="Pabeigt" click={() => {props.setWindowState({'show':false})}}/>
                </div>
            </div>
        </div>
    )
}

function FromToInput(props){
    const [startMarker, setStartMarker] = useState(null);
    const [endMarker, setEndMarker] = useState(null);
    const [width, setWindowWidth] = useState(0);

    const classNameFrom = exists(props.inputData.missingFields, 'location_from') ? styles['input-missing'] : styles['input'];
    const classNameTo = exists(props.inputData.missingFields, 'location_to') ? styles['input-missing'] : styles['input'];
    const onChange = props.inputData.setInputs;
    const setInputs = props.inputData.setInputsDirect;

    var gridStyle = {display:'grid', gridTemplateColumns:'50% 45%', justifyContent:'space-between', paddingBottom:20};
    var gridStyleTiny = {display:'grid', gridTemplateColumns:'100%', justifyContent:'space-between', paddingBottom:20, rowGap:20};

    gridStyle = gridStyleTiny;

    useEffect(() => { 
        if(props.markers[0] !== null)
            setStartMarker(props.markers[0]);

        if(props.markers[1] !== null)
            setEndMarker(props.markers[1]);
        

        updateDimensions();
        
        window.addEventListener('resize', updateDimensions);
        return () => 
          window.removeEventListener('resize',updateDimensions);
    }, []);
    
    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    }

    return (
        <div>
            <div style={{paddingBottom:10}}>
                Ceļa informācija:
            </div>
            <div style={gridStyle}>
                <div style={{display:'grid', gridTemplateColumns:'45% 45%', columnGap:20, justifyContent:'space-between'}}>
                    {props.requireStartPoint &&
                        (
                        <>
                            <div>
                                <p className={styles['input-label']}>No:</p>
                                <PlacesAutocompleteInput setMarker={setStartMarker} value={props.inputData.inputs['location_from']} name='location_from' onChange={onChange} className={classNameFrom} setInputs={setInputs} />
                            </div>
                        </>
                        )
                    }
                    <div>
                        <p className={styles['input-label']}>Uz:</p>
                        <PlacesAutocompleteInput setMarker={setEndMarker} value={props.inputData.inputs['location_to']} name='location_to' onChange={onChange} className={classNameTo} setInputs={setInputs} />
                    </div>
                </div>
                <div style={{width:'100%', height:250, border:'solid'}}>
                    <Map 
                        startMarker={startMarker}
                        endMarker={endMarker}
                        setStartMarker={setStartMarker}
                        setEndMarker={setEndMarker}
                    />
                </div>
            </div>
        </div>
    )
}

function PlacesAutocompleteInput(props){
    const { ref } = usePlacesWidget({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
        onPlaceSelected: (place) => {
            props.setInputs(values => ({...values, [props.name]: place.formatted_address}));
            props.setMarker({'lat':place.geometry.location.lat(), 'lng':place.geometry.location.lng()});
        },
        options:{
            types:['address'],
            fields:['formatted_address', 'geometry', 'geometry.location', 'geometry.location.lat'],
            componentRestrictions:{country:'lv'}
        }
    })

    return (
        <>
            <input ref={ref} placeholder='Matīsa iela 105' value={props.value} name={props.name} onChange={props.onChange} className={props.className} type="text" />
        </>
    );
}

function InputGeneric(props){    
    const className = exists(props.inputData.missingFields, props.ename) ? styles['input-missing'] : styles['input'];
    const onChange = props.inputData.setInputs;
    const value = props.inputData.inputs[props.ename];
    
    return (
        <div>
            <div>
                <p className={styles['input-label']}>{props.name}:</p>
            </div>
            <div>
                <input value={value} name={props.ename} placeholder={props.placeholder} onChange={onChange} className={className} type="text" />
            </div>
        </div>
    )
}

function InputNumber(props){
    const className = exists(props.inputData.missingFields, props.ename) ? styles['input-missing'] : styles['input'];
    const onChange = props.inputData.setInputs;
    const value = props.inputData.inputs[props.ename];
    
    return (
        <div>
            <div>
                <p className={styles['input-label']}>{props.name}:</p>
            </div>
            <div>
                <input value={value} name={props.ename} onChange={onChange} placeholder={props.placeholder} className={className} type="number" />
            </div>
        </div>
    )
}

function InputDateTime(props){
    const className = exists(props.inputData.missingFields, props.ename) ? styles['input-missing'] : styles['input'];
    const onChange = props.inputData.setInputs;
    const value = props.inputData.inputs[props.ename];
    
    return (
        <div>
            <div>
                <p className={styles['input-label']}>{props.name}:</p>
            </div>
            <div>
                <input value={value} name={props.ename} onChange={onChange} className={className} type="datetime-local" />
            </div>
        </div>
    )
}

function InputCheckmark(props){
    const className = exists(props.inputData.missingFields, props.ename) ? styles['input-missing'] : styles['input'];
    const onChange = props.inputData.setInputs;
    const value = props.inputData.inputs[props.ename];

    return (
        <div>
            <div>
                <p className={styles['input-label']}>{props.name}:</p>
            </div>
            <div>
                <input value={value} name={props.ename} onChange={onChange} type="checkbox" />
            </div>
        </div>
    )
}

function InputTextarea(props){
    const className = exists(props.inputData.missingFields, props.ename) ? styles['input-missing'] : styles['input'];
    const onChange = props.inputData.setInputs;
    const value = props.inputData.inputs[props.ename];
    
    return (
        <div style={{gridColumn:'span 2'}}>
            <div>
                <p className={styles['input-label']} style={{width:'100%'}}>{props.name}:</p>
            </div>
            <div>
                <textarea name={props.ename} onChange={onChange} className={className}>
                    {value}
                </textarea>
            </div>
        </div>
    )
}

function InputSection(props){
    return (
        <div style={{paddingBottom:40}}>
            <div style={{paddingBottom:10}}>{props.name}:</div>
            <div style={{}} className={styles['input-section']}>
                {props.children}
            </div>
        </div>
    )
}

function InputConfirmation(props){
    const onChange = props.inputData.setInputs;
    const value = props.inputData.inputs[props.ename];

    return (
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <div>{props.children}</div>
            <div><input name={props.ename} onChange={onChange} type="checkbox" /></div>
        </div>
    )
}

function InputButton(props){
    function _onClick(){
        props.click();
    }
    
    return (
        <div onClick={_onClick} className={styles['input-button']}>
            <div>
                {props.name}
            </div>
        </div>
    )
}

export {
    TaxiForm,
    Authorisation,
    SuccessWindow,
    MultiPageForm,
    SecondDriverForm,
    CourierForm,
    EvacuatorForm
};