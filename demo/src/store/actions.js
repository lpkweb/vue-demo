import * as types from './constants';

export default {
  [types.SAVE_DATE]({ commit }, date) {
    commit(types.SAVE_DATE, date);
  }
}