import React from "react"

export default function HeaderBasic(props){
    return(
        <div style={{backgroundColor:'#F5AD17', width:'100%', height:400}}>
            <div style={{paddingLeft:'10%', paddingTop:120}}>
                <div style={{fontSize:'clamp(5%, 5em, 15vw)'}}>{props.title}</div>
                <div>{props.children}</div>
            </div>
        </div>
    )
}