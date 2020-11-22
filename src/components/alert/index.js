import React from "react";
import "./alert.css";

const Alert = ({type,text}) => {
  return (
    <div className={`alert-container-${type}`}>
      <p  className="color-white">{text}</p>
    </div>
  );
};

export default Alert;
