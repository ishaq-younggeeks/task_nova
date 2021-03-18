import React from "react";
import './ImageWithTextStyle.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImageWithText = (props) => {
    const {images} = props

    console.log("images are",{images})
  return (
  <>
  {
      images ?.length ?  images.map((item,index) => {
          console.log("index",index)
        return (<div className="imageCard" key={index}>
                <LazyLoadImage
   src={item.image} width="200" height={200 +Math.floor(Math.random()*10)*15} alt="masonary"/>
            <p>{item.text}</p>
        </div>)
      }):null
  }

  </>);
};

export default ImageWithText;
