<template lang="pug">
  .container
    h2 Выберите объем данных
    button.btn.btn-large(
      @click="setLimit(32)"
    ) Маленький
    button.btn.btn-large(
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

<style lang="sass" scoped>
  .btn
    margin-right: 20px
    width: 200px
</style>
