<template lang="pug">
  tr.row(@click="selectRow")
    td.row_cell {{user.id}}
    td.row_cell {{user.firstName}}
    td.row_cell {{user.lastName}}
    td.row_cell {{user.email}}
    td.row_cell {{user.phone}}
</template>

<script>
  export default {
    props: {
      user: {
        type: Object,
        required: true,
      },
    },
    methods: {
      selectRow(e) {
        if (e.target.parentNode.classList.contains("row--active")) {
          this.$emit("rowSelected", null);
          e.target.parentNode.classList.remove("row--active");
        } else {
          this.$emit("rowSelected", this.user);
          e.target.parentNode.classList.add("row--active");
        }
      },
    },
  };
</script>

<style lang="sass">
  .row
    &:hover
      background-color: #80cbc4
    &--active
      background-color: #4db6ac
</style>
