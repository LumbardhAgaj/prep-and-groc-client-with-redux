import { combineReducers } from 'redux';
import userReducer, { USER_INIT_STATE } from './user';
import prepareReducer, { PREPARE_INIT_STATE } from './prepare';
import modalReducer, { MODAL_INIT_STATE } from './modal';
import pageReducer, { PAGE_INIT_STATE } from './page';
import notificationReducer, { NOTIFICATIONS_INIT_STATE } from './notification';

export default combineReducers({
  user: userReducer,
  prepare: prepareReducer,
  modal: modalReducer,
  page: pageReducer,
  notification: notificationReducer
});

const APP_INIT_STATE = {
  user: USER_INIT_STATE,
  prepare: PREPARE_INIT_STATE,
  modal: MODAL_INIT_STATE,
  page: PAGE_INIT_STATE,
  notification: NOTIFICATIONS_INIT_STATE
};

export { APP_INIT_STATE };
