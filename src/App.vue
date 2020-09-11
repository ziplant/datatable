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
  #app
    font-family: Avenir, Helvetica, Arial, sans-serif
</style>
