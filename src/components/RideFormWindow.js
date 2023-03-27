import React, {useState, useEffect} from "react"
import Map from "./Map";
import {FiCheckCircle, FiArrowDown} from 'react-icons/fi';

import styles from '../styles/WindowForm.module.css';

function MultiPageForm(props){
    const [page, setCurrentPage] = useState(0);

    const clonedPage = React.cloneElement(props.children[page], {
        'setPage':setCurrentPage,
        'setWindowState':props.setWindowState,
        'extraData':props.extraData
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
    return (
        <div>
            <div style={{paddingBottom:20}}>
                <h2>Taksometra izsaukšana</h2>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <div>
                    <FromToInput requireStartPoint={props.extraData.requireStartPoint}/>
                    <InputSection name="Kontaktinformācija">
                        <InputGeneric placeholder="Jānis Bērziņš" name="Vārds, Uzvārds" />
                        <InputGeneric placeholder="+371 12341234" name="Telefona numurs" />
                    </InputSection>
                    <InputSection name="Brauciena informācija">
                        <InputNumber placeholder="0" name="Sēdvietu skaits" />
                        <InputDateTime name="Pieņemšanas laiks" />
                        <InputCheckmark name="Bērnu sēdeklītis" />
                        <InputTextarea name="Papildus komentāri" />
                    </InputSection>
                    <div style={{paddingBottom:30}}>
                        <InputConfirmation>
                            Es piekrītu lietošanas noteikumiem.
                        </InputConfirmation>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <InputButton name="Atcelt" click={() => {props.setWindowState({'show':false})}}/>
                    <InputButton name="Turpināt" click={() => {props.setPage(1)}}/>
                </div>
            </div>
        </div>
    )
}

function SecondDriverForm(props){
    return (
        <div>
            <div style={{paddingBottom:20}}>
                <h2>Otrā vadītāja izsaukšana</h2>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <div>
                    <FromToInput requireStartPoint={props.extraData.requireStartPoint}/>
                    <InputSection name="Kontaktinformācija">
                        <InputGeneric placeholder="Jānis Bērziņš" name="Vārds, Uzvārds" />
                        <InputGeneric placeholder="+371 12341234" name="Telefona numurs" />
                    </InputSection>
                    <InputSection name="Brauciena informācija">
                        <InputGeneric placeholder="BMW x5" name="Autotransporta modelis" />
                        <InputGeneric placeholder="KJ-1234" name="Autotransporta numurs" />
                        <InputDateTime name="Tehniskās apskates iziešanas datums" />
                        <InputDateTime name="Pieņemšanas laiks" />
                    </InputSection>
                    <div style={{paddingBottom:30}}>
                        <InputConfirmation>
                            Apstiprinu, ka mans autotransporta līdzeklis pakļaujas Otrā Vadītāja izsaukšanas noteikumiem.
                        </InputConfirmation>
                        <InputConfirmation>
                            Es piekrītu lietošanas noteikumiem.
                        </InputConfirmation>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <InputButton name="Atcelt" click={() => {props.setWindowState({'show':false})}}/>
                    <InputButton name="Turpināt" click={() => {props.setPage(1)}}/>
                </div>
            </div>
        </div>
    )
}

function CourierForm(props){
    return (
        <div>
            <div style={{paddingBottom:20}}>
                <h2>Kurjera izsaukšana</h2>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <div>
                    <FromToInput requireStartPoint={props.extraData.requireStartPoint}/>
                    <InputSection name="Kontaktinformācija">
                        <InputGeneric placeholder="Jānis Bērziņš" name="Izsūtītāja Vārds, Uzvārds" />
                        <InputGeneric placeholder="+371 12341234" name="Izsūtītāja Telefona numurs" />
                        <InputGeneric placeholder="Jānis Bērziņš" name="Saņēmēja Vārds, Uzvārds" />
                        <InputGeneric placeholder="+371 12341234" name="Saņēmēja Telefona numurs" />
                    </InputSection>
                    <InputSection name="Pasta informācija">
                        <InputGeneric placeholder="Dokuments, ēdiens" name="Pasta saturs" />
                        <InputNumber  placeholder="1"  name="Pasta svars (kg)" />
                        <InputGeneric placeholder="0.25, 0.31, 0.26"  name="Pasta izmērs (x, y, z) (m)" />
                        <InputDateTime name="Vēlamais saņemšanas datums un laiks" />
                        <InputDateTime name="Vēlamais piegādes datums un laiks" />
                    </InputSection>
                    <div style={{paddingBottom:30}}>
                        <InputConfirmation>
                            Apstiprinu, ka mans pasts pakļaujas Kurjera izsaukšanas noteikumiem.
                        </InputConfirmation>
                        <InputConfirmation>
                            Es piekrītu lietošanas noteikumiem.
                        </InputConfirmation>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <InputButton name="Atcelt" click={() => {props.setWindowState({'show':false})}}/>
                    <InputButton name="Turpināt" click={() => {props.setPage(1)}}/>
                </div>
            </div>
        </div>
    )
}

function EvacuatorForm(props){
    return (
        <div>
            <div style={{paddingBottom:20}}>
                <h2>Evakuatora izsaukšana</h2>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <div>
                    <FromToInput requireStartPoint={props.extraData.requireStartPoint}/>
                    <InputSection name="Kontaktinformācija">
                        <InputGeneric placeholder="Jānis Bērziņš" name="Vārds, Uzvārds" />
                        <InputGeneric placeholder="+371 12341234" name="Telefona numurs" />
                    </InputSection>
                    <InputSection name="Negadījuma informācija">
                        <InputGeneric placeholder="Viegla automašīna" name="Autotransporta tips"/>
                        <InputTextarea name="Aprakstiet situāciju"/>
                    </InputSection>
                    <div style={{paddingBottom:30}}>
                        <InputConfirmation>
                            Es piekrītu lietošanas noteikumiem.
                        </InputConfirmation>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <InputButton name="Atcelt" click={() => {props.setWindowState({'show':false})}}/>
                    <InputButton name="Turpināt" click={() => {props.setPage(1)}}/>
                </div>
            </div>
        </div>
    )
}

function Authorisation(props){
    return (
        <div>
            <div style={{paddingBottom:20}}>
                <h2>Autorizācija</h2>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:'600px'}}>
                <div style={{paddingTop:40, textAlign:'center'}}>
                    <p>Autorizācijas kods tika aizsūtīts uz +371 00000000</p>
                    <div style={{display:'flex', justifyContent:'center', columnGap:5, paddingTop:20}}>
                        <AuthorisationNumber/>
                        <AuthorisationNumber/>
                        <AuthorisationNumber/>
                        <AuthorisationNumber/>
                        <AuthorisationNumber/>
                        <AuthorisationNumber/>
                    </div>
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <InputButton name="Atcelt" click={() => {props.setPage(0)}}/>
                    <InputButton name="Turpināt" click={() => {props.setPage(2)}}/>
                </div>
            </div>
        </div>
    )
}

function AuthorisationNumber(props){
    return (
        <div style={{width:35, height:40, backgroundColor:'rgba(255,255,255,0.5)'}}>
            <input placeholder="0" style={{width:'100%', height:'100%', backgroundColor:'rgba(255,255,255,0)', border:'none', textAlign:'center'}} type="text"/>
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

    return (
        <div>
            <div style={{paddingBottom:10}}>
                Ceļa informācija:
            </div>
            <div style={{display:'grid', gridTemplateColumns:'45% 45%', justifyContent:'space-between', paddingBottom:20}}>
                <div>
                    {props.requireStartPoint &&
                        (
                        <>
                            <div>
                                <p className={styles['input-label']}>No:</p>
                                <input className={styles['input']} type="text" />
                            </div>
                            <div style={{paddingTop:10, paddingBottom:10}}>
                                <FiArrowDown />
                            </div>
                        </>
                        )
                    }
                    <div>
                        <p className={styles['input-label']}>Uz:</p>
                        <input className={styles['input']} type="text" />
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

function InputGeneric(props){    
    return (
        <div>
            <div>
                <p className={styles['input-label']}>{props.name}:</p>
            </div>
            <div>
                <input placeholder={props.placeholder} className={styles['input']} type="text" />
            </div>
        </div>
    )
}

function InputNumber(props){
    return (
        <div>
            <div>
                <p className={styles['input-label']}>{props.name}:</p>
            </div>
            <div>
                <input placeholder={props.placeholder} className={styles['input']} type="number" />
            </div>
        </div>
    )
}

function InputDateTime(props){
    return (
        <div>
            <div>
                <p className={styles['input-label']}>{props.name}:</p>
            </div>
            <div>
                <input className={styles['input']} type="datetime-local" />
            </div>
        </div>
    )
}

function InputCheckmark(props){
    return (
        <div>
            <div>
                <p className={styles['input-label']}>{props.name}:</p>
            </div>
            <div>
                <input type="checkbox" />
            </div>
        </div>
    )
}

function InputTextarea(props){
    return (
        <div style={{gridColumn:'span 2'}}>
            <div>
                <p className={styles['input-label']} style={{width:'100%'}}>{props.name}:</p>
            </div>
            <div>
                <textarea className={styles['input']}>

                </textarea>
            </div>
        </div>
    )
}

function InputSection(props){
    return (
        <div style={{paddingBottom:40}}>
            <div style={{paddingBottom:10}}>{props.name}:</div>
            <div style={{display:'grid', gridTemplateColumns:'45% 45%', rowGap:15, justifyContent:'space-between',}} className={styles['input-section']}>
                {props.children}
            </div>
        </div>
    )
}

function InputConfirmation(props){
    return (
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <div>{props.children}</div>
            <div><input type="checkbox" /></div>
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