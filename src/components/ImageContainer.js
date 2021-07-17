
import React, { useRef } from 'react';

import "../App.css"

const Image = ({ originalImageSrc, smallImageSrc }) => {

 //references
 const imageRef = useRef(null);
 const smallRef = useRef(null);

 //function that fires when original image have loaded completely
 const onImageLoad = () => {
  imageRef.current.style.opacity = 1;
  smallRef.current.style.opacity = 0;
 }

 return (
  <>
   <div className="master">
    <img alt="smallImage" ref={smallRef} className="smallImage" src={smallImageSrc} />
    <img alt="BigImage" ref={imageRef} className="bigImage" onLoad={onImageLoad} src={originalImageSrc} />
   </div>
  </>
 )
}

export default Image;