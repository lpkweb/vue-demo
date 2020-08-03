<template>
  <div class="time-wrap">
    <ul>
      <li v-for="(item, index) in times" :key="index" @click="clickTime(index)">
        <div class="time">{{item.time}}</div>
        <div class="line" ref="line">
          <add-schedule v-if="indexId === index && isShow" >
            <div class="add-schedule" @click.stop="clickAddSchedule(item.id)" >再次点击新建日程</div>
          </add-schedule>
          <div v-for="(schItem, i) in scheduleText" :key="i">
            <div class="schedule-list" v-if="item.id === schItem.textId">
              <ul class="list-wrap">
                <li v-for="(listItem, index) in schItem.textArr" :key="index">
                  <div>
                    <span>{{index+1}}.{{listItem}}</span>
                  </div>
                </li>
              </ul>  
            </div>
          </div>
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
      ...mapState(['isShow', 'scheduleText'])
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
      clickAddSchedule(textId) {
        this.isShowTip(false);
        this.$router.push({
          path: '/add-text',
          query: {
            textId
          }
        });
      },
      ...mapMutations({
        isShowTip: types.IS_SHOW
      })
    },
    watch: {
      scheduleText() {
        setTimeout(() => {
          const lines = this.$refs.line;
          this.scheduleText.forEach(item => {
            lines[item.textId].style.height = "auto";
          });
        }, 20);
      }
    },
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
    .add-schedule {
      z-index: 999;
    }
    .line {
      display: inline-block;
      vertical-align: top;
      width: 85%;
      border-top: 1px solid #F1EFF2;
      height: 42px;
      margin-top: 10px;
      position: relative;
      .schedule-list {
        width: 100%;
        border-radius: 0 0 0 10px;
        background-color: rgba(226,243,255,1);
        .list-wrap {
          padding-top: 13px;
          padding-left: 12px;
          li {
            position: relative;
            width: 100%;
            color: rgba(102,102,102,1);
            font-size: 14px;
            span {
              width: 100%;
              display: block;
              border-bottom: 1px solid rgba(81,156,249,0.12);
              padding-bottom: 10px;
              margin-bottom: 10px;
            }
          }
          li::after {
            content: '';
            position: absolute;
            right: -15px;
            top: -13px;
            width: 15px;
            height: 100%;
            padding-top: 13px;
            background-color: rgba(226,243,255,1);
          }
        }
      }
    }
    ul {
      li {
        margin-bottom: 4px;
      }
    }
  }
</style>