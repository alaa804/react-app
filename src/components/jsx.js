import React from "react";
import Img1 from '../image/1_Rvs7u_g6dnDTRF-FMY4vsA.png'
import './style.css'






const myStyle = {
    border : "solid 1px black",
    maxWidth : "100vw"
}


const Code = () =>{
    return (
        <div style={myStyle}>
            <h1 className ="title-red"> ALAA TAGUIAA</h1>
            <br/>
            <img className="imag1" src={Img1} alt="react-logo"/>
            <br/>
            <img className="imag1" src="1_SAc84eMPcyrloVTsf-fEzA.jpeg" />           
        </div>
    )
}


export default Code 