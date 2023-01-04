<template>
  <main>
    <TheWelcome />
    <div class="button-column">
      <router-link to="/Bibliotheque-livres">
        <button>Button 1</button>
      </router-link>
      <router-link to="/Pret-livres">
        <button>Button 2</button>
      </router-link>
      <router-link to="/Ranger-livres">
        <button>Button 3</button>
      </router-link>
      <router-link to="/Saisie-livres">
        <button>Button 4</button>
      </router-link>
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
