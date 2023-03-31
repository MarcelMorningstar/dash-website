import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import dashIcon from '../imgs/icon.png';

import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles['footer-wrapper']}>
            <div style={{paddingTop:70}}>
                <div className={styles['footer-content']}>
                    <div style={{display:'flex', placeContent:'center', flexWrap:'wrap'}}><Image width={100} alt="DASH logo" src={dashIcon} /></div>
                    <div className={styles['footer-hrefs']}>
                        <div style={{height:'fit-content'}}>Par mums</div>
                        <div style={{height:'fit-content'}}>Privātuma politika</div>
                        <div style={{height:'fit-content'}}>Sadarbība</div>
                        <div style={{height:'fit-content'}}>Kontakti</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer