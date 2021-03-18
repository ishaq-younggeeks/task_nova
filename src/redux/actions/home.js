import axios from "axios";

export const getImages = () => {
  return (dispatch) => {
    axios
      .get(`https://5c07ecd0646dca0013f87e8b.mockapi.io/flow`)
      .then((res) => {
        console.log({ res });
        const { status, data } = res;
        if (status === 200) {
          dispatch({
            type: "SET_IMAGE_DATA",
            payload: data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
