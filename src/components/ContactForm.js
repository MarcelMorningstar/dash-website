import React from "react";

import styles from '../styles/ContactForm.module.css';

export default function ContactForm(props){
    return(
        <div style={{backgroundColor:'rgb(0,0,0,0.2)', display:'flex', placeContent:'center', paddingTop:50, paddingBottom:50}}>
            <form className={styles['form-wrapper']}>
                <div>
                    <div className={styles['form-label']}>Vārds, uzvārds:</div>
                    <input placeholder="John Doe" className={styles['form-input']} name="name" required/>
                </div>

                <div>
                    <div className={styles['form-label']}>Telefona numurs:</div>
                    <input type="tel" placeholder="+371 12341234" className={styles['form-input']} name="number" required/>
                </div>
                
                <div>
                    <div className={styles['form-label']}>Ē-pasts:</div>
                    <input type="email" placeholder="vārds.uzvārds@domēns.lv" className={styles['form-input']} name="email" required/>
                </div>
                
                <div>
                    <div className={styles['form-label']}>Komentārs:</div>
                    <textarea style={{backgroundColor:'rgba(255,255,255,0.6)', padding:5, border:'none', borderRadius:'5px', height:150, width:'100%'}} name="comment"></textarea>
                </div>

                <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <input value="Sūtīt" className={styles['form-submit']} type="submit" />
                </div>
            </form>
        </div>
    )
}