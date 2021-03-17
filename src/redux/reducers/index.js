import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import Images from './Images';


export default history =>
  combineReducers({
    router: connectRouter(history),
    images:Images
  });
