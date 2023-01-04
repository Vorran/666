<!-- eslint-disable prettier/prettier -->
<template>
    <div>
      <h1>Pret</h1>
      <button @click="showMessage">Click me</button>
      <p v-if="show">Hello!</p>
    </div>
  </template>

<style>
/* styles for the page */
</style>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showMessage() {
      this.show = true;
    },
  },
};
</script>
