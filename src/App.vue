<template>
  <main>
    <TheWelcome />
    <div class="button-column">
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
      <button>Button 4</button>
    </div>
  </main>
</template>

<style>
.button-column {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 200px; /* Adjust as needed */
}
</style>

<script setup></script>
