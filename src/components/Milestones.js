import React from "react";

import {FaPhoneAlt, FaUserFriends, FaChalkboardTeacher, FaCarAlt} from 'react-icons/fa'

export default function Milestones(props){
    return(
        <div style={{minHeight:400, maxHeight:'fit-content'}}>
            <div style={{display:'flex', justifyContent:'center', alignContent:'center', flexWrap:'wrap', gap:100, minHeight:400, paddingTop:30, paddingBottom:30 }}>
                <MilestoneStep
                    icon={<FaPhoneAlt/>}
                    name="Kontaktējies"
                    description="Pieraksti mums, pastāsti par savu uzņēmumu."
                />
                <MilestoneStep 
                    icon={<FaUserFriends/>}
                    name="Satiecies"
                    description="Atbrauc pie mums uz biroju, paraksti līgumus un piereģistrējies."
                />
                <MilestoneStep 
                    icon={<FaChalkboardTeacher/>}
                    name="Apmāci"
                    description="Apmāci savus darbiniekus izmantot DASH Šoferu aplikāciju."
                />
                <MilestoneStep 
                    icon={<FaCarAlt/>}
                    name="Brauc!"
                    description="Padari darbu ātrāku ar mums. Maini tarifus uzreiz!"
                />
            </div>
        </div>
    )
}

function MilestoneStep(props){
    return(
        <div style={{width:200, textAlign:'center'}}>
            <div style={{fontSize:'2.5em'}}>
                {props.icon}
            </div>
            <div style={{fontSize:'1.5em'}}>
                {props.name}
            </div>
            <div style={{fontSize:'0.8em'}}>
                {props.description}
            </div>
        </div>
    )
}