import React from "react";

export default function Services(){
    return(
        <div>
            <div style={{paddingTop:120}}>
                <ServiceDescription flexDirection='row'>
                    <h1>Taksometrs</h1>
                    <p>Ir vēlme, lai kāds tevi kaut kur aizved? Izvēlies savu galapunktu un izsauc taksi uz savu esošo atrašanās vietu ar dažiem pirkstu skārieniem!</p>
                </ServiceDescription>
                <ServiceDescription flexDirection='row-reverse'>
                    <h1>Otrais Vadītājs</h1>
                    <p>Ir pašam sava mašīna, bet nevari ar to braukt? Izsauc otro vadītāju, kurš aizvedīs gan tevi, gan tavu mašīnu uz tev nepieciešamo vietu!</p>
                </ServiceDescription>
                <ServiceDescription flexDirection='row'>
                    <h1>Kurjers</h1>
                    <p>Ir nepieciešams atnest kādam svarīgu dokumentu vai pasta paku, bet esi pārāk tālu? Mēs aizvedīsim to pēc iespējas ātrāk!</p>
                </ServiceDescription>
                <ServiceDescription flexDirection='row-reverse'>
                    <h1>Evakuators</h1>
                    <p>Esi ticis nelaimē? Izsauc evakuatoru tagad vai uz citu laiku!</p>
                </ServiceDescription>
            </div>
        </div>
    )
}

function ServiceDescription(props){
    return(
        <div style={{paddingBottom:80, paddingLeft:110, paddingRight:110}}>
            <div style={{display:'flex', flexDirection:props['flexDirection'], columnGap:70, justifyContent:'space-evenly'}}>
                <div style={{backgroundColor:'rgba(0,0,0,0.2)', height:300, width:'700px'}}>

                </div>
                <div style={{width:'47%'}}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}