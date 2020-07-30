<template>
  <div class="header-wrap">
    <div class="back">＜</div>
    <div class="title">日程</div>
  </div>
</template>

<script>

  export default {
    name: 'header',

  }

</script>

<style scope lang="less" rel="stylesheet/less">
  .header-wrap {
    width: 100%;
    height: 64px;
    background-color: #366CB3;
    line-height: 64px;
    text-align: center;
    .back {
      width: 20px;
      height: 20px;
      margin-left: 16px;
      font-size: 20px;
      color: #fff;
      vertical-align: middle;
    }

    .title {
      vertical-align: middle;
      display: inline-block;
      margin-top: -42px;
      color: #fff;
    }
  }

  


</style>