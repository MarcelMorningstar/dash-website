import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import dashIcon from '../imgs/icon.png';

import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles['footer-wrapper']}>
            <div style={{paddingTop:20}}>
                <div className={styles['footer-content']}>
                    <div style={{display:'flex', placeContent:'center', flexWrap:'wrap'}}><Image width={100} alt="DASH logo" src={dashIcon} /></div>
                    <div className={styles['footer-hrefs']}>
                        <div className={styles['footer-call']}>Izsaukt DASH</div>
                        <div className={styles['footer-href']} >Par mums</div>
                        <div className={styles['footer-href']}>Privātuma politika</div>
                        <div className={styles['footer-href']}>Sadarbība</div>
                        <div className={styles['footer-href']}>Kontakti</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer