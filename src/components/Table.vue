<template lang="pug">
 .datatable
    h2.datatable_title Таблица данных
    table#datatable
      tr
        th(v-for="col in header" :key="col") {{ col }}
      TableRow(v-for="row in getUsers" :key="row.id" :user="row")
</template>

<script>
  import TableRow from "./TableRow";
  import { mapGetters, mapActions } from "vuex";

  export default {
    data() {
      return {
        header: ["id", "firstName", "lastName", "email", "phone"],
      };
    },
    components: {
      TableRow,
    },
    computed: {
      ...mapGetters(["getUsers"]),
    },
    methods: {
      ...mapActions(["fetchUsers"]),
    },
    async mounted() {
      await this.fetchUsers();
    },
  };
</script>

<style lang="sass"></style>
