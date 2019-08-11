import { GET_ITEM_DATA } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case GET_ITEM_DATA:
      return action.payload.data;
  }

  return state;
}
