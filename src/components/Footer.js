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
                        <Link className={styles['footer-call']} href="/">
                            Izsaukt DASH
                        </Link>
                        <Link className={styles['footer-href']} href="/info">
                            Par mums
                        </Link>
                        <Link className={styles['footer-href']} href="/info">Privātuma politika</Link>
                        <Link className={styles['footer-href']} href="/business">Sadarbība</Link>
                        <Link className={styles['footer-href']} href="/contact">Kontakti</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer