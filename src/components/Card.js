import React from 'react';
import { FaCamera } from "react-icons/fa";

import "../App.css"


const CardComponent = ({ data }) => {

 // console.log(data)

 return (
  <div className="card-container" >
   <img className="card-img" alt="" src={data.img_src} />
   <div className="card-detail-ctn" >
    <h3 style={{ margin: "3px" }} >{data.rover.name} </h3>
    <p style={{ margin: "3px" }}> <FaCamera /> {data.camera.full_name} </p>
    <h5 style={{ margin: "3px" }}>{data.earth_date}</h5>
   </div>
  </div >
 );
}

export default CardComponent