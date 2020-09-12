<template lang="pug">
ul.infolist
  li.infolist_item Выбран пользователь <b>{{user.firstName}} {{user.lastName}}</b>
  li.infolist_item Описание:
    textarea(readonly) {{user.description}}
  li.infolist_item Адрес проживания: <b>{{user.address.streetAddress || '-'}}</b>
  li.infolist_item Город: <b>{{user.address.city || '-'}}</b>
  li.infolist_item Провинция/штат: <b>{{user.address.state || '-'}}</b>
  li.infolist_item Индекс: <b>{{user.address.zip || '-'}}</b>
</template>

<script>
  export default {
    props: {
      user: {
        type: Object,
      },
    },
  };
</script>

<style lang="sass">
  .infolist
    padding-top: 10px
    list-style: none
    .infolist_item
      margin-bottom: 10px
      display: flex
      align-items: top
      b
        padding-left: 5px
      textarea
        padding-left: 5px
        font-size: 1rem
        resize: none
        width: 300px
        height: 70px
        background-color: transparent
        border: none
</style>
