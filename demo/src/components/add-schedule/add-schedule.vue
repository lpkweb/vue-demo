<template>
  <div>
    <div class="add-schedule" @click.stop="clickAddSchedule">再次点击新建日程</div>
  </div>
</template>

<script>

  import * as types from  '../../store/constants';
  import { mapMutations } from 'vuex';

  export default {
    name: 'addSchedule',
    methods: {
      clickAddSchedule() {
        this.isShow(false);
        this.$router.push('/add-text');
      },
      ...mapMutations({
        isShow: types.IS_SHOW
      })
    },
  }
</script>

<style scope lang="less" rel="stylesheet/less">
  .add-schedule {
    width: 100%;
    height: 31px;
    padding-top: 11px;
    padding-left: 20px;
    background-color: rgba(81,156,249,1);
    border-radius: 0 0 0 10px;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    font-size: 14px;
  }
</style>