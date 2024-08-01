<template>
    <div v-if="visible" class="actions-list">
      <button @click="navigate('PostModify')">수정</button>
      <button @click="navigate('delete')">삭제</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PostActions',
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      navigate(action) {
        this.$emit('navigate', action);
      },
    },
  };
  </script>
  
  <style scoped>
  .actions-list {
    /* actions-list에 대한 스타일 정의 */
  }
  </style>