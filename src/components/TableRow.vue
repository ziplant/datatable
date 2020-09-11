<template lang="pug">
  tr(@click="selectRow()")
    td {{user.id}}
    td {{user.firstName}}
    td {{user.lastName}}
    td {{user.email}}
    td {{user.phone}}
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
      selectRow() {
        console.log(this.user);
      },
    },
  };
</script>

<style lang="sass"></style>
