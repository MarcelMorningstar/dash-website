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
                <div className={styles['downloads-wrapper']}>
                    <DownloadsWindow 
                        title="Klients"
                        animProps={{
                            'initial':{
                                y:-20,
                                opacity:0
                            },
                            'whileInView':{
                                y:0,
                                opacity:1
                            },
                            'transition':{
                                duration:0.75
                            }
                        }}
                        buttonName="Lejupielādēt"
                    >
                        <h3>
                            DASH Taksometru mobilā aplikācija
                        </h3>
                        <br />
                        <p>-Izvēlies sev vispiemērotāko automobīli tev nepieciešamajam pakalpojumam!</p>
                        <p>-Ātri izsauc jau iepriekš pieprasītos maršrutus!</p>
                        <p>-Seko līdzi savam izsaukumam reallaikā!</p>
                        <p>-Ātri un automātiski apmaksā braucienu!</p>
                    </DownloadsWindow>
                    <DownloadsWindow 
                        title="Sadarbība"
                        animProps={{
                            'initial':{
                                y:-20,
                                opacity:0
                            },
                            'whileInView':{
                                y:0,
                                opacity:1
                            },
                            'transition':{
                                duration:0.75
                            }
                        }}
                        buttonName="Reģistrēties"
                    >
                        <h3>
                            DASH Uzņēmumu sadarbības programma
                        </h3>
                        <br />
                        <p>-Sadarbojies ar mums un reģistrē savu uzņēmumu DASH reģistrā!</p>
                        <p>-Saņem uzlabojumus un atvieglojumus pakalpojumu sniegšanā!</p>
                    </DownloadsWindow>
                    <div 
                        className={styles['download-window']} 
                        style={{
                                position:'relative',
                                backgroundColor:'rgb(240,240,240)'
                            }}>
                        
                        <div>
                            <iframe style={{border:'none', left:0, top:0, position:'absolute', height:'100%', width:'100%'}} src="https://www.youtube.com/embed/0IuZq7wq4pU?autoplay=1&mute=1" title="YouTube video player"></iframe>
                        </div>
                    </div>
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
                        {props.buttonName}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}