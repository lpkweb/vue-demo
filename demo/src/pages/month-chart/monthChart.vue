<template>
  <div>
    <currentDate :currentMonth="currentMonth" />
    <vue-hash-calendar
      :visible="true"
      :isShowAction="false"
      :disabledWeekView="true"
      @change="change"
      :markDate="[{color: 'green', date: ['2020/08/02']}]"
    ></vue-hash-calendar>
  </div>
</template>

<script>

  import { getCurrentDate } from '../../common/mixin';
  import currentDate from '../../components/current-date/current-date.vue';

  export default {
    name: 'monthChart',
    mixins: [getCurrentDate],
    components: {
      currentDate
    },
    data() {
      return {
        currentMonth: '',
      }
    }
  }
</script>

<style scope>
  
</style>