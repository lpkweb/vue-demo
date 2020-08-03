<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>


  export default {
    name: 'addSchedule',
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