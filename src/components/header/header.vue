<template>
  <header class="mint-header">
    <slot name="left"></slot>
    <h1 class="mint-header-title">{{title}}</h1>
    <slot name="right"></slot>
  </header>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style>

</style>
