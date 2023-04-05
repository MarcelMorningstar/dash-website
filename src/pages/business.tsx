import React, { useState } from 'react';
import HeaderBasic from '../components/HeaderBasic';
import Milestones from '../components/Milestones';

export default function Business(){
    return(
        <div>
            <HeaderBasic title="Sadarbība">
                Padari darbu vieglāku un ātrāku savam uzņēmumam kopā ar mums!
            </HeaderBasic>
            <div>
                <h2 style={{paddingTop:50, paddingLeft:30, paddingRight:30, textAlign:'center'}}>Lai iesāktu sadarbību ir jāizdara tik pāris lietas:</h2>
                <Milestones />
            </div>
            <div style={{height:500, display:'flex', placeContent:'center', flexWrap:'wrap', backgroundColor:'rgba(0,0,0,0.1)'}}>
                <div style={{width:'100%'}}>
                    <h2 style={{paddingTop:50, paddingLeft:30, paddingRight:30, textAlign:'center'}}>Sāc jau tagad!</h2>

                    <div style={{display:'flex', justifyContent:'center', textAlign:'center', paddingTop:30, paddingBottom:40}}>
                        <div style={{display:'flex', flexWrap:'wrap', placeContent:'center', backgroundColor:'#F5AD17', width:'min(400px, 80%)', height:60}}>
                            <div style={{height:'fit-content', fontSize:'1.5em'}}>Kontakti</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}