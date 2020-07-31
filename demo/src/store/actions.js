import * as types from './constants';

export default {
  [types.SAVE_SCHEDULE_TEXT]({ commit }, date) {
    commit(types.SAVE_SCHEDULE_TEXT, date);
  },
  [types.IS_SHOW]({ commit }, isShow) {
    commit(types.IS_SHOW, isShow);
  }
}