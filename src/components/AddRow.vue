<template lang="pug">
.window
  .window_bg(@click="close")
  .window_content
    form.addform(@submit.prevent="addRow")
      .addform_wrap
        label(for="id") id: 
        input.input(v-model="user.id" type="text" id="id")
      .addform_wrap
        label(for="firstName") firstName: 
        input.input(v-model="user.firstName" type="text" id="firstName")
      .addform_wrap
        label(for="lastName") lastName: 
        input.input(v-model="user.lastName" type="text" id="lastName")
      .addform_wrap
        label(for="phone") phone: 
        input.input(v-model="user.phone" type="text" id="phone")
      .addform_wrap
        label(for="email") email: 
        input.input(v-model="user.email" type="text" id="email")
      button.btn.addform_submit(
          type="submit" 
          :class="{'disabled': !validForm() }"
        ) Добавить в таблицу
</template>

<script>
  import { mapMutations } from "vuex";

  export default {
    data() {
      return {
        user: {},
      };
    },
    methods: {
      ...mapMutations(["pushUser", "updatePagination"]),
      validForm() {
        if (
          !this.user.id ||
          !this.user.firstName ||
          !this.user.lastName ||
          !this.user.phone ||
          !this.user.email
        )
          return false;
        return true;
      },
      addRow(e) {
        if (!this.validForm()) return;
        this.user.address = {};
        this.pushUser(this.user);
        this.close();
      },
      close() {
        this.$emit("close");
        this.updatePagination();
      },
    },
  };
</script>

<style lang="sass" scoped>

  .addform
    display: inline-block
    &_wrap
      display: flex
      justify-content: center
      align-items: center
      text-align: right
      margin-bottom: 4px
      label
        width: 80px
        color: #000
        margin-right: 5px
    &_submit
      display: block
      margin: 20px auto 0
      width: 100%
</style>
