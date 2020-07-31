<template>
  <div class="nav">
    <router-link tag="div" :to="{ path: '/day' }" >日视图</router-link>
    <router-link tag="div" :to="{ path :'/week' }" >周视图</router-link>
    <router-link tag="div" :to="{ path : '/month' }" >月视图</router-link>
  </div>
</template>

<script>

  export default {
    name: 'nav',
  }


</script>

<style scope lang="less" rel="stylesheet/less">
  .nav {
    display: flex;
    justify-content: space-around;
    // position: fixed;
    // top: 60px;
    // margin-bottom: 60px;
    div {
      padding-top: 18px;
      padding-bottom: 10px;
      color: #666;
      &.router-link-active {
        color: #444;
        border-bottom: 2px solid #FFa800 ;
      }
    }
  }

</style>
