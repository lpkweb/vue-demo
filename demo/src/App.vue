<template>
  <div id="app">
    <a-header />
    <h-nav />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

 import AHeader from './components/header/a-header.vue';
 import HNav from './components/nav/h-nav.vue';

export default {
  name: 'App',
  components: {
    AHeader,
    HNav,
  }
}
</script>

<style>
  body,ul,li,ol,dl,dd,h1,h2,h3,h4,h5,h6,input,p {
    margin: 0;
  }
  body, html {
    height: 100%;
  }
  /* body {
    overflow: hidden;
  } */
  ul, ol {
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
</style>
