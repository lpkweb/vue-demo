<template>
  <div>
    <van-cell title="选择单个日期" :value="date" @click="show = true"></van-cell>
    <van-calendar v-model="show" @confirm="onConfirm"></van-calendar>
    <Time :times="times" />
  </div>
</template>

<script>

  import axios from 'axios';
  import Time from '../../components/time/time.vue';
  import * as types from '../../store/constants';

  export default {
    name: 'dayChart',
    components: {
      Time
    },
    data() {
      return {
        date: '',
        show: false,
        times: [],
      }
    },
    created() {
      this.getTimes();
    },
    methods: {
      getTimes() {
        axios.get('/api/times.json').then(({ data }) => { 
          this.times = data.datas || [];
         });
      },
      onConfirm(date) {
        this.show = false;
        this.date = this.formatDate(date);
        this.$store.commit(types.SAVE_DATE, this.date);
      },
      formatDate(date) {
        return  `${date.getMonth() + 1} / ${date.getDate()}`;
      }
    }
  }
</script>

<style scope>
  
</style>