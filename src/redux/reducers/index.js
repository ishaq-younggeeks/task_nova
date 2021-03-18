import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import Home from './Home';


export default history =>
  combineReducers({
    router: connectRouter(history),
    home:Home
  });
