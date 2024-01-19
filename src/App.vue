<template>
  <div>
    <b-container class="bv-body-row">
      <b-row class="bv-header-row"> 
        <CompHeader></CompHeader>
      </b-row>
    </b-container>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App."/> -->
  </div>
</template>

<script>
import CompHeader from './components/header.vue';
// import HelloWorld from './components/HelloWorld.vue';

export default {
  components: {
    CompHeader
    // HelloWorld
  }
}
</script>

<style>
div{
  border: none;
}
</style>
