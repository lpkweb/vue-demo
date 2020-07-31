<template>
  <div>
    <div class="current-month">{{currentMonth}}</div>
  </div>
</template>

<script>

  export default {
    name: 'currentDate',
    props: {
      currentMonth: String,
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .current-month {
    font-size: 16px;
    color: #366CB3;
    font-family: 'PingFangSC';
    margin: 10px 0 10px 20px;
  }
</style>