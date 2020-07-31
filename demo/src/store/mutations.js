import * as types from './constants';

export default {
  [types.SAVE_SCHEDULE_TEXT](state, text) {
    state.scheduleText = text;
  },
  [types.IS_SHOW](state, isShow) {
    state.isShow = isShow;
  },
}