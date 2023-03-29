import React from "react";

import styles from '../styles/Services.module.css';

import taxiDriver from '../imgs/taxi.jpg';
import secondDriver from '../imgs/second-driver.jpg';
import courier from '../imgs/courier.jpg';
import towTruck from '../imgs/tow.jpg';

export default function Services(){
    return(
        <div>
            <div style={{paddingTop:120}}>
                <ServiceDescription background={taxiDriver} flexDirection='row'>
                    <h1>Taksometrs</h1>
                    <p>Ir vēlme, lai kāds tevi kaut kur aizved? Izvēlies savu galapunktu un izsauc taksi uz savu esošo atrašanās vietu ar dažiem pirkstu skārieniem!</p>
                </ServiceDescription>
                <ServiceDescription background={secondDriver} flexDirection='row-reverse'>
                    <h1>Otrais Vadītājs</h1>
                    <p>Ir pašam sava mašīna, bet nevari ar to braukt? Izsauc otro vadītāju, kurš aizvedīs gan tevi, gan tavu mašīnu uz tev nepieciešamo vietu!</p>
                </ServiceDescription>
                <ServiceDescription offsets='0% 70%' background={courier} flexDirection='row'>
                    <h1>Kurjers</h1>
                    <p>Ir nepieciešams atnest kādam svarīgu dokumentu vai pasta paku, bet esi pārāk tālu? Mēs aizvedīsim to pēc iespējas ātrāk!</p>
                </ServiceDescription>
                <ServiceDescription offsets='0% 50%' background={towTruck} flexDirection='row-reverse'>
                    <h1>Evakuators</h1>
                    <p>Esi ticis nelaimē? Izsauc evakuatoru tagad vai uz citu laiku!</p>
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