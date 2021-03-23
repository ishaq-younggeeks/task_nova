import React from "react";
import "./ImageWithTextStyle.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ImageWithText = (props) => {
  const { images } = props;

  console.log("images are", { images });
  return (
    <>
      {images?.length
        ? images.map((item, index) => {
            return (
              <div className="imageCard" key={index}>
                <div >
                  <LazyLoadImage
                  className="imageCard_image"
                    delayTime={300}
                    visibleByDefault={false}
                    src={item.image}
                    width="200"
                    height={200 + Math.floor(Math.random() * 10) * 15}
                    alt="masonary"
                  />
                </div>
                <div className="imageCard_footer">
                  <div className="image_title">
                    <p>title</p>
                  </div>
                  <div className="image_description">
                      <div className="image_description_left">
                      <img src={process.env.PUBLIC_URL+"/img/avatar-1.jpg"}  width='20px'   height='20px'/>
                    <span>{item.text}</span>
                    </div>
                    <div className="image_description_right">
                    <span><i className="fas fa-heart" style={{color:"red"}}></i>1</span>
                    <span><i class="fas fa-comment-alt" style={{color:"grey"}}></i>2</span>

                        </div>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
};

export default ImageWithText;
