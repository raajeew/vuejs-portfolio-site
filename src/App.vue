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
.loading{
  background: url('./assets/loading.gif') no-repeat;
  height: 50px;
  width: 100px;
  position: absolute;
  top: 40%;
  left: calc(50% - 50px);
  z-index: 999;
}
a{
    text-decoration: none;
    color: #0475a9;
}
p{
  margin: 0;
  padding: 0 0 5px;
}
</style>
