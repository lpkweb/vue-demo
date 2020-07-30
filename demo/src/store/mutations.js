import * as types from './constants';

export default {
  [types.SAVE_DATE](state, date) {
    state.date = date;
  }
}