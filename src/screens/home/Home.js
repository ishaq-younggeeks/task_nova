import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getImages } from "../../redux/actions/home";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImageWithText from "../../component/ImageWithText";
const Home = (props) => {
  const { getImages, images } = props;
  useEffect(() => {
    getImages();
  }, []);

  console.log("home images", images);
  return (
    <div className="padBody">
      <div className="title_description">
      <h3 className="hTitle">Candy cotton candy sesame snaps biscuit</h3>
      <p className="pDsc">
        Candy cotton candy sesame #Design #HR biscuit dessert topping halvah
        marshmallow
        <br /> gummies. Pie toffee dragée chocolate toffee biscuit. Icing
        chocolate cake ice cream jelly
        <br /> beans chocolate cake soufflé candy.
      </p>
      </div>
      <div style={{marginTop:'145px'}}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
        <Masonry>
          <ImageWithText images={images} />
          <ImageWithText images={images} />
          <ImageWithText images={images} />
          <ImageWithText images={images} />
        </Masonry>
      </ResponsiveMasonry>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { home } = state;
  return {
    images: home.imageData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getImages: () => dispatch(getImages()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
