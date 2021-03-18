import React from "react";
import './ImageWithTextStyle.css'
const ImageWithText = (props) => {
    const {images} = props

    console.log("images are",{images})
  return (
  <>
  {
      images ?.length ?  images.map((item,index) => {
          console.log("index",index)
        return (<div className="imageCard" key={index}>
            <img   src={item.image} alt="masonary"/>
            <p>{item.text}</p>
        </div>)
      }):null
  }

  </>);
};

export default ImageWithText;
