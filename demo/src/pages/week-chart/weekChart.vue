<template>
  <div>
    <van-cell is-link title="基础用法" @click="show = true" />
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>

  import { Toast } from 'vant';

  export default {
    name: 'weekChart',
    data() {
      return {
        show: false,
        actions: [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }],
      }
    },
    methods: {
      onSelect(item) {
        this.show = false;
        Toast(item.name);
      }
    }
  }
</script>

<style scope>
  
</style>