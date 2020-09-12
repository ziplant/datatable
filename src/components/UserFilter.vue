<template lang="pug">
	form.filter(@submit.prevent="$emit('filter', filterText)")
		input.input-field(placeholder="Поиск" type="text" v-model="filterText")
		button.btn(type="submit") Найти
</template>

<script>
  export default {
    data() {
      return {
        filterText: "",
      };
    },
  };
</script>

<style lang="sass" scoped>
  .filter
  	display: flex
  	align-items: center

  .btn
  	margin-left: 15px
</style>
