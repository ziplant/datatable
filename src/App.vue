<template lang="pug">
  #app
    ChoiseLimit(v-if="!getLimit")
    Table(v-else)
</template>

<script>
  import ChoiseLimit from "./components/ChoiseLimit";
  import Table from "./components/Table";
  import { mapGetters } from "vuex";

  export default {
    name: "App",
    components: {
      ChoiseLimit,
      Table,
    },
    computed: {
      ...mapGetters(["getLimit"]),
    },
  };
</script>

<style lang="sass">
  body
    background-color: #eff
    
  .window
    height: 100%
    width: 100%
    position: fixed
    top: 0
    left: 0
    &_bg
      height: 100%
      width: 100%
      background-color: rgba(0,0,0,0.7)
    &_content
      background-color: #fff
      padding: 50px
      border-radius: 6px
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)

  .hidden
    opacity: 0
    visibility: hidden
</style>
