import React from "react";
import {FiX} from 'react-icons/fi';

import styles from '../styles/Window.module.css'

export default function Window(props){
    return(
        <div className={styles['window-root']}>
            <div className={styles['window-wrapper']}>
                <div className={styles['window-dragbar']}>
                    <div className={styles['window-close']} onClick={()=>{props.changeContent({'show':false})}}>
                        <div className={styles['window-close-icon']}>
                            <FiX/>
                        </div>
                    </div>
                </div>
                <div className={styles['window-content']}>
                    {props.children}
                </div>
            </div>
            <div className={styles['window-background-parent']}>
                <div className={styles['window-background']} />
            </div>
        </div>
    );
}