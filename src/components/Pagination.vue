<template lang="pug">
.pagination
  .pagination_total total: {{getUsersAmount}}
  .pagination_btn(
    @click="prevPage()" 
    :class="{hidden: getPagination.currentPage <= 1}"
  ) &larr;
  .pagination_pages {{getPagination.currentPage}} / {{getPagination.pages}}
  .pagination_btn(
    @click="nextPage()"
    :class="{hidden: getPagination.currentPage >= getPagination.pages}"
  ) &rarr;
</template>

<script>
  import { mapGetters, mapMutations } from "vuex";
  export default {
    computed: {
      ...mapGetters(["getPagination", "getUsersAmount"]),
    },
    methods: {
      ...mapMutations(["prevPage", "nextPage"]),
    },
  };
</script>

<style lang="sass">
  .pagination
    display: flex
    align-items: center
    padding: 5px
    &_btn
      background-color: transparent
      border: none
      font-size: 2rem
      user-select: none
      cursor: pointer
      &:hover
        text-shadow: 0 0 1px #000
    &_pages,
    &_total
      padding: 0 15px
      font-size: 1.1rem
      user-select: none
</style>
