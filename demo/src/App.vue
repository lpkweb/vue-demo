<template>
  <div id="app">
    <m-header />
    <Tab />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

 import MHeader from './components/m-header/m-header.vue';
 import Tab from './components/tab/tab.vue';

export default {
  name: 'App',
  components: {
    MHeader,
    Tab,
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
