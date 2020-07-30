<template>
  <div>
    <span>这是 </span>{{ date || '--' }}
  </div>
</template>

<script>

  import { mapState } from 'vuex';

  export default {
    name: 'monthChart',
    computed: {
      ...mapState(['date'])
    }
  }
</script>

<style scope>
  
</style>