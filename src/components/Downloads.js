import React from "react";
import { motion } from "framer-motion";

import styles from '../styles/Downloads.module.css';

export default function Downloads(){
    return (
        <div style={{
            width:'100%',
            height:'min(40%,1000px)'
        }}>
            <div style={{
                marginTop:50,
                height:'100%'
            }}>
                <div 
                    style={{
                        display:'flex',
                        gap:10,
                        justifyContent:'space-evenly',
                        width:'100%',
                        height:'80%'
                }}>
                    <DownloadsWindow 
                        title="Klients"
                        animProps={{
                            'initial':{
                                x:-150,
                                opacity:0
                            },
                            'whileInView':{
                                x:0,
                                opacity:1
                            },
                            'transition':{
                                duration:0.75
                            }
                        }}
                    >
                        <p style={{
                            textAlign:'left'
                        }}>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <br />
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </DownloadsWindow>
                    <DownloadsWindow 
                        title="Šoferis"
                        animProps={{
                            'initial':{
                                x:150,
                                opacity:0
                            },
                            'whileInView':{
                                x:0,
                                opacity:1
                            },
                            'transition':{
                                duration:0.75
                            }
                        }}
                    >
                        <p>interesanta informācija</p>
                    </DownloadsWindow>
                </div>
            </div>
        </div>
    );
}

function DownloadsWindow(props){
    return (
        <motion.div className={styles['download-window']} 
            initial={props.animProps['initial']}
            whileInView={props.animProps['whileInView']}
            transition={props.animProps['transition']}
            style={{
                width:'max(300px, 40%)',
                backgroundColor:'rgb(240,240,240)'
            }}
        >
            <div style={{
                display:'flex',
                justifyContent:'center',
                backgroundColor:'#F5AD17',
                fontSize:'1.7em',
                paddingLeft:10,
                paddingTop:10,
                paddingBottom:10
            }}>
                {props.title}
            </div>
            <div style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                margin:10,
                height:'100%',
                gap:30
            }}>
                <div>
                    {props.children}
                </div>
                <div style={{
                    display:'flex',
                    justifyContent:'center'
                }}>
                    <div className={styles['button']}>
                        Lejupielādēt
                    </div>
                </div>
            </div>
        </motion.div>
    )
}