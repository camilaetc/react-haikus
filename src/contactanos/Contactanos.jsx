import React from "react";
import "./Contactanos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"></i>

const onCliclk = () => {
console.log(event.target.type);
};

const Contactanos = () => {
  return (
    <div className="TextoContactanos" >
       <FontAwesomeIcon icon={faFacebook} id="IconoFacebook" />
        <FontAwesomeIcon />
    </div> 
    
      
  );
};

export default Contactanos;