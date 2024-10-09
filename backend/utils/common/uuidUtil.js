import {v1, v4} from 'uuid';

const getId = () => {
  return v4().replaceAll('-', '');
}

export const uuid = {
  getId
}