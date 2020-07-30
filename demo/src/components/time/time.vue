<template>
  <div class="time-wrap">
    <ul>
      <li v-for="(item, index) of times" :key="index">
        <span class="time">{{item.time}}</span>
        <a class="line"></a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'time',
    props: {
      times: Array,
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
      vertical-align: middle;
      margin-right: 5px;
    }
    .line {
      display: inline-block;
      vertical-align: middle;
      width: 85%;
      border-bottom: 1px solid #F1EFF2;
    }
    ul {
      li {
        margin-bottom: 46px;
      }
    }
  }
</style>