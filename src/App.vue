<template>
  <HeaderView />

  <div class="page-body">
    <router-view></router-view>
  </div>
  
</template>

<script>
import HeaderView from './components/Header.vue'

export default {
  name: 'App',
  components: { 
    HeaderView
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
.page-body{
  box-sizing: border-box;
  padding: 0 20px;
}
#app {
  font-family: 'Roboto', sans-serif;
  line-height: 1.5rem;
  color: #2c3e50;
}

</style>
