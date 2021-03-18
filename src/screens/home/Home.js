import React,{useEffect} from 'react'
import { connect } from "react-redux";
 import {getImages} from '../../redux/actions/home'
 import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ImageWithText from '../../component/ImageWithText'
const Home = (props) => {
    const {getImages,images} = props
    useEffect(() =>{
        getImages()
    },[])

    console.log("home images",images)
    return (
        <div>
           <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
           <Masonry>
           <ImageWithText images={images}/>
           <ImageWithText images={images}/>
           <ImageWithText images={images}/>
                </Masonry>
           </ResponsiveMasonry>
        </div>
    )
}

const mapStateToProps = state => {

    const {home} = state
    return {
        images:home.imageData
  
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
        getImages: () => dispatch(getImages()),

    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(Home);