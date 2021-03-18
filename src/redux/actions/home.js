import axios from "axios";

export const getImages = () => {
  return (dispatch) => {
    let images = [];
    for (let i = 0; i < 100; i++) {
      images.push({
        image: `${process.env.PUBLIC_URL}/img/${Math.floor(
          10 * Math.random()
        )}.jpg`,
        text: "dummy " + Math.random().toString(36).substring(7),
      });
      dispatch({
        type: "SET_IMAGE_DATA",
        payload: images,
      });
    }
  };
};
