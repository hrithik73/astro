
import React, { useRef } from 'react';

import s from './Image.module.css';

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
   <div className={s.master}>
    <img alt="smallImage" ref={smallRef} className={s.smallImage} src={smallImageSrc} />
    <img alt="BigImage" ref={imageRef} className={s.bigImage} onLoad={onImageLoad} src={originalImageSrc} />
   </div>
  </>
 )
}

export default Image;