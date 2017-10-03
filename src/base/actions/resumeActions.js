import { database } from '../helpers/firebase';

export const receiveResume = resume => ({ type: 'LOADED', payload: resume });
export const fetchResume = () => dispatch => database
  .ref('resume/')
  .on('value', snapshot => dispatch(receiveResume(snapshot.val())));
