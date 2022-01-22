<template>
  <div id="app">
    <Whu_logo/>
    <router-view></router-view>
  </div>
</template>

<script>
import Whu_logo from './components/Whu_logo'

export default {
  name: 'App',
  components: {
    Whu_logo
  }
}
</script>

<style>

  html,body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #app{
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
  }
</style>
