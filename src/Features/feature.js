import React from "react";
import "./features.css";


function Feature(props){
    return(
        <div class="sub-item">
           <img src={props.img} className={props.class}/>
           <h2>{props.title}</h2>
           <p>{props.description}</p>

        </div>
    );
}
export default Feature;