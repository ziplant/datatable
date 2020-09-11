<template lang="pug">
  .datalimit
    h2.datalimit_title Выберите объем данных
    .datalimit_body.choise
      button.choise_btn(
        @click="setLimit(32)"
      ) Маленький
      button.choise_btn(
        @click="setLimit(1000)"
      ) Большой
</template>

<script>
  import { mapMutations } from "vuex";

  export default {
    methods: {
      ...mapMutations(["setLimit"]),
    },
  };
</script>

<style lang="sass"></style>
