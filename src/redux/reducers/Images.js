const INIT_STATE = {
    imageData: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_DASHBOARD_DATA: {
      return { ...state, imageData: action.payload };
    }
    default:
      return state;
  }
};
