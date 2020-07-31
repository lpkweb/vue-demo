<template>
  <div class="day-chart">
    <currentDate :currentMonth="currentMonth" />
    <div class="calendar-box" ref="calendarBox">
      <vue-hash-calendar
        :visible="true"
        :isShowAction="false"
        :isShowWeekView="isShowWeekView"
        @change="change"
        @touchend="touchend"
        ref="hashCalendar"
      ></vue-hash-calendar>
      <div class="horizonLine" @click="clickShrink"></div>
    </div>
    <Time :times="times" />
    <div v-for="(item, index) of scheduleText" :key="index">{{item}}</div>
  </div>
</template>

<script>

  import axios from 'axios';
  import currentDate from '../../components/current-date/current-date.vue';
  import Time from '../../components/time/time.vue';
  import { getCurrentDate } from '../../common/mixin';
  import { mapState } from 'vuex';

  export default {
    name: 'dayChart',
    mixins: [getCurrentDate],
    components: {
      currentDate,
      Time
    },
    data() {
      return {
        date: '',
        show: false,
        times: [],
        currentMonth: '',
        isShowWeekView: true,
        isShow: false,
      }
    },
    created() {
      this.getTimes();
    },
    mounted() {
      this.setCalendarBoxHeight();
    },
    computed: {
      ...mapState(['scheduleText'])
    },
    methods: {
      setCalendarBoxHeight() {
        setTimeout(() => {
          const height = this.$refs.hashCalendar.calendarContentHeight;
          this.$refs.calendarBox.style.height = `${height + 32}px`;
        }, 20);
      },
      touchend() {
        this.setCalendarBoxHeight();
      },
      clickShrink() {
        this.setCalendarBoxHeight();
        this.isShowWeekView = !this.isShowWeekView;
      },
      getTimes() {
        axios.get('/api/times.json').then(({ data }) => { 
          this.times = data.datas || [];
         });
      },
    },
  }
</script>

<style scope lang="less" rel="stylesheet/less">

  .day-chart {
    .calendar-box {
      background-color: #FFF;
      box-shadow:0px 10px 0px 0px rgba(0, 0, 0, 0.01);
      border-radius: 0pt 0pt 10pt 10pt;
      position: relative;
      .horizonLine {
        position: absolute;
        bottom: 10px;
        width: 20px;
        height: 3px;
        left: 50%;
        margin-left: -10px;
        background-color: rgba(54,108,179,1);
      }
    }
  }
</style>