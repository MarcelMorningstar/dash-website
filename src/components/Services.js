import React from "react";

import styles from '../styles/Services.module.css';

import taxiDriver from '../imgs/taxi.jpg';
import secondDriver from '../imgs/second-driver.jpg';
import courier from '../imgs/courier.jpg';
import towTruck from '../imgs/tow.jpg';

export default function Services(){
    return(
        <div>
            <div style={{marginTop:80, paddingTop:80, paddingBottom:80, backgroundColor:'rgba(0,0,0,0.03)'}}>
                <h1 style={{paddingLeft:5, paddingRight:5, textAlign:'center', paddingBottom:30}}>Atvedīsim tevi un ne tikai!</h1>
                <ServiceDescription offsets='30% 0%' background={taxiDriver} flexDirection='row'>
                    <h1>Taksometrs</h1>
                    <p>Ir vēlme, lai kāds tevi kaut kur aizved? Izvēlies savu galapunktu un izsauc taksi uz savu esošo atrašanās vietu ar dažiem pirkstu skārieniem!</p>
                </ServiceDescription>
                <ServiceDescription offsets='30% 70%' background={secondDriver} flexDirection='row-reverse'>
                    <h1>Otrais Vadītājs</h1>
                    <p>Ir pašam sava mašīna, bet nevari ar to braukt? Izsauc otro vadītāju, kurš aizvedīs gan tevi, gan tavu mašīnu uz tev nepieciešamo vietu!</p>
                </ServiceDescription>
                <ServiceDescription offsets='0% 70%' background={courier} flexDirection='row'>
                    <h1>Kurjers</h1>
                    <p>Ir nepieciešams atnest kādam svarīgu dokumentu vai pasta paku, bet esi pārāk tālu? Mēs aizvedīsim to pēc iespējas ātrāk!</p>
                </ServiceDescription>
                <ServiceDescription offsets='25% 50%' background={towTruck} flexDirection='row-reverse'>
                    <h1>Evakuators</h1>
                    <p>Ir iespēja pārvadāt bojātu autotransportu uz Tev nepieciešamu vietu.</p>
                </ServiceDescription>
            </div>
        </div>
    )
}

function ServiceDescription(props){
    var offsets = '0% 0%';
    if(props.offsets !== undefined)
        offsets = props.offsets;

    return(
        <div className={styles['service-block']}>
            <div className={styles['service-wrapper']} style={{flexDirection:props['flexDirection'],}}>
                <div className={styles['service-image']} style={{backgroundImage:`url(${props.background.src})`, backgroundPosition:offsets}}>

                </div>
                <div className={styles['service-description']}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}