import React from "react";

const Images=(props)=>{
    const name=props.name;
    const type=props.type;
    const base64=props.base64;
    return(
        <img className="images" src={"data:"+type+";base64," + base64} alt={name}/>
    );
};

export default Images;