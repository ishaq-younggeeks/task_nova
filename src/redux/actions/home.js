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

//     axios
//       .get(`https://5c07ecd0646dca0013f87e8b.mockapi.io/flow`)
//       .then((res) => {
//         console.log({ res });
//         const { status, data } = res;
//         if (status === 200) {
//           dispatch({
//             type: "SET_IMAGE_DATA",
//             payload: data,
//           });
//         }
//       })
//       .catch((err) =>{
// console.log(err)
//       })
  };
};
