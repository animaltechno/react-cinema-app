import { SET_ERROR } from '../types';

const initState = '';

export default (state = initState, action) => {
  switch(action.type) {
    case SET_ERROR:
      return action.payload;
    default:
      return state;
  }
};

