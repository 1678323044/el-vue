<template>
  <section>
    <head-title title="搜索"></head-title>
    <mt-search v-model="value" @blur.native.capture="searchShop"></mt-search>
  </section>
</template>

<script>
  import headTitle from '../../components/header/header'
  export default {
    data(){
      return{
        value: ''
      }
    },
    components: {
      headTitle
    },
    methods: {
      searchShop(){
        const val = {val: this.value}
        this.$store.dispatch('getSearchShops',val)
      }
    }
  }
</script>

<style>
  .mint-search input{
    margin-top: 14px;
    background-color: transparent!important;
  }
</style>
