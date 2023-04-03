import React from "react"

export default function HeaderBasic(props){
    return(
        <div style={{backgroundColor:'#F5AD17', width:'100%', height:400}}>
            <div style={{paddingLeft:200, paddingTop:110}}>
                <div style={{fontSize:'5em'}}>{props.title}</div>
                <div>{props.children}</div>
            </div>
        </div>
    )
}