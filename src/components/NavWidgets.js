import React from "react";
import { FaBusinessTime, FaInfo, FaPhoneAlt } from "react-icons/fa";


function NavWidgets(props){
    return(
        <div style={{
            paddingTop:40, backgroundColor:'rgb(37, 37, 37)',
            color:'white'
        }}>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', padding:20, rowGap:60, columnGap:50, marginLeft:'10vw', marginRight:'10vw'}}>
                <NavWidget title='Sadarbība' 
                    icon={<FaBusinessTime color="#9A6F14" style={{paddingLeft:3, paddingTop:4}} size={30}/>} 
                    hyperlink={<p>Apskaties sadarbību lapu.</p>}
                >
                    Mēs esam gatavi sadarboties ar uzņēmumiem mūsu darba sfērā - ātri un operatīvi!
                </NavWidget>
                <NavWidget title='Info' 
                    icon={<FaInfo color="#9A6F14" style={{paddingLeft:1, paddingTop:5}} size={25}/>} 
                    hyperlink={<p>Apskaties lapu 'Par Mums'.</p>}
                >
                    Ieskaties, intereses pēc, informāciju par mums un mūsu uzņēmumu!
                </NavWidget>
                <NavWidget title='Kontakti' 
                    icon={<FaPhoneAlt color="#9A6F14" style={{paddingTop:6}} size={25}/>}
                    hyperlink={<p>Apskaties kontaktu lapu.</p>}
                >
                    Vai ir kādi jautājumi, neskaidrības? Droši sazinies ar mums!
                </NavWidget>
            </div>
        </div>
    )
}

function NavWidget(props){
    return (
        <div style={{width:400, height:200}}>
            <div style={{display:'flex', justifyContent:'flex-start', gap:10}}>
                <div style={{width:50, height:50, display:'flex', justifyContent:'center', alignContent:'center', backgroundColor:'#FFC600', borderRadius:'50%'}}>
                    <div style={{marginTop:'15%'}}>
                        {props.icon}
                    </div>
                </div>
                <div style={{height:50, display:'flex', placeContent:'center'}}>
                    <div style={{marginTop:'10px'}}>
                        <h2>{props.title}</h2>
                    </div>
                </div>
            </div>
            <div style={{paddingTop:10}}>
                {props.children}
            </div>
            <div style={{paddingTop:20, color:'#F5AD17'}}>
                {props.hyperlink}
            </div>
        </div>
    )
}

export default NavWidgets;