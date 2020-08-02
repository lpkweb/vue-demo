<template>
  <div class="tab">
    <router-link tag="div" to="/day" >日视图</router-link>
    <router-link tag="div" to="/week" >周视图</router-link>
    <router-link tag="div" to="/month" >月视图</router-link>
  </div>
</template>

<script>

  export default {
    name: 'tab',
  }


</script>

<style scope lang="less" rel="stylesheet/less">
  .tab {
    display: flex;
    justify-content: space-around;
    div {
      padding-top: 18px;
      padding-bottom: 10px;
      color: #666;
      &.router-link-active {
        color: #444;
        position: relative;
      }
      &.router-link-active::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 15px;
        width: 20px;
        height: 2px;
        background: #FFa800;
      }
    }
  }

</style>
