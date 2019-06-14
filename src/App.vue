<template>
  <div id="app">
    <router-view></router-view>
    <footer-menu v-show="$route.meta.showFooter"></footer-menu>
  </div>
</template>

<script>
  import footerMenu from './components/footerMenu/menu'
  export default {
    mounted(){
      this.$store.dispatch('getAddress')
    },
    components: {
      footerMenu
    }
  }
</script>

<style>

</style>
