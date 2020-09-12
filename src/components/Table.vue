<template lang="pug">
  .container
    h2.container_title Таблица данных
    .controls
      button.btn(@click="toggleForm") Добавить
      Pagination
      UserFilter(@filter="filter")
    table
      thead
        tr
          th.col(
            v-for="col in header" 
            :data-col="col"
            :class="{sorted: sortCol.col == col, 'sorted--desc': !sortCol.asc && sortCol.col == col}"
            :key="col"
            @click="sort"
          ) {{ col }}
      tbody#tablebody(v-if="loaded")
        TableRow(
          v-for="row in users" 
          :key="row.phone" 
          :user="row" 
          @rowSelected="rowSelected"
          )
      tbody#tableload(v-else)
        Preloader
    RowInfo(v-if="selectedUser" :user="selectedUser")
    AddRow(v-if="formOpened" @close="toggleForm")
</template>

<script>
  import TableRow from "./TableRow";
  import RowInfo from "./RowInfo";
  import AddRow from "./AddRow";
  import UserFilter from "./UserFilter";
  import Pagination from "./Pagination";
  import Preloader from "./Preloader";
  import { mapGetters, mapActions, mapMutations } from "vuex";

  export default {
    data() {
      return {
        header: ["id", "firstName", "lastName", "email", "phone"],
        selectedUser: null,
        users: [],
        formOpened: false,
        loaded: false,
        sortCol: {
          col: "",
          asc: false,
        },
      };
    },
    watch: {
      getUsers(promise) {
        promise.then((data) => {
          this.users = data;
          this.loaded = true;
        });
      },
    },
    components: {
      TableRow,
      RowInfo,
      AddRow,
      UserFilter,
      Pagination,
      Preloader,
    },
    computed: {
      ...mapGetters(["getUsers"]),
    },
    methods: {
      ...mapActions(["fetchUsers", "sortUsers"]),
      ...mapMutations([
        "filterUsers",
        "prevPage",
        "nextPage",
        "updatePagination",
      ]),
      filter(filterText) {
        this.loaded = false;
        this.rowSelected(null);
        this.filterUsers(filterText);
        this.updatePagination();
      },
      async sort(e) {
        this.sortCol.col = e.target.dataset.col;
        this.sortCol.asc = !this.sortCol.asc;
        this.rowSelected(null);
        await this.sortUsers({
          field: this.sortCol.col,
          asc: this.sortCol.asc,
        });
      },
      toggleForm() {
        this.formOpened = !this.formOpened;
      },
      rowSelected(user) {
        tablebody.children.forEach((el) => {
          el.classList.remove("row--active");
        });

        this.selectedUser = user;
      },
    },
    async mounted() {
      await this.fetchUsers();
    },
  };
</script>

<style lang="sass">
  tbody
    display: block
    height: 350px
    overflow-y: auto

  tr
    display: flex
    th, td
      flex: 3
    th:first-child, td:first-child
      flex: 1

  .controls
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    align-items: center
    padding: 10px 0

  .col
    user-select: none
    &:hover
      text-decoration: underline

  .sorted
    position: relative
    &::before
      position: absolute
      content: ""
      border: 5px solid transparent
      border-top: 7px solid #000
      top: 50%
      transform: translateY(-25%)
      right: 20px
    &--desc
      &::before
        transform: translateY(-75%) rotate(180deg)

  #tableload
    display: flex
    justify-content: center
    align-items: center
</style>
