<template>
  <div class="time-wrap">
    <ul>
      <li v-for="(item, index) of times" :key="index" @click="clickTime(index)">
        <div class="time">{{item.time}}</div>
        <div class="line">
          <AddSchedule v-if="indexId === index && isShow" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

  import AddSchedule from '../add-schedule/add-schedule.vue';
  import * as types from  '../../store/constants';
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'm-time',
    components: {
      AddSchedule,
    },
    props: {
      times: Array,
    },
    data() {
      return {
        indexId: 100,
      }
    },
    computed: {
      ...mapState(['isShow'])
    },
    methods: {
      clickTime(index) {
        if (this.isShow && index !== this.indexId) {
          this.changeShowState(false);
          this.indexId = 100;
          return;
        }
        this.changeShowState(true);
        this.indexId = index;
      },
      // 改变浮层的显示
      changeShowState(flag) {
        this.isShowTip(flag);
      },
      ...mapMutations({
        isShowTip: types.IS_SHOW
      })
    }
  }
</script>

<style scope lang="less" rel="stylesheet/less">

  .time-wrap {
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
    .time {
      color: #999;
      display: inline-block;
      vertical-align: top;
      margin-right: 5px;
    }
    .line {
      display: inline-block;
      vertical-align: top;
      width: 85%;
      border-top: 1px solid #F1EFF2;
      height: 42px;
      margin-top: 10px;
      position: relative;
    }
    ul {
      li {
        margin-bottom: 4px;
      }
    }
  }
</style>