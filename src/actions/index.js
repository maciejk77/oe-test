import axios from 'axios';

const ROOT_URL = 'http://localhost:8080';

export const GET_ITEM_DATA = 'GET_ITEM_DATA';

export function getItemData() {
  const url = `${ROOT_URL}/`;
  const request = axios.get(url);

  return {
    type: GET_ITEM_DATA,
    payload: request
  };
}
