<template>
  <div id="app">

    <myheader></myheader>
    <div>
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import myheader from '@/components/header/header'
export default {
  name: 'app',
  components:{
    myheader
  }
}
</script>

<style>
*{margin:0;padding:0;}
li{list-style: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 text-align: center;
  color: #2c3e50;
  
}
</style>
