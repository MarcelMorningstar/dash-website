import React, { useState } from 'react';
import HeaderBasic from '../components/HeaderBasic';
import Milestones from '../components/Milestones';

export default function Business(){
    return(
        <div>
            <HeaderBasic title="Sadarbība">
                Padari darbu vieglāku un ātrāku savam uzņēmumam kopā ar mums!
            </HeaderBasic>
            <Milestones />
        </div>
    )
}