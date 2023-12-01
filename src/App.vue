<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="logo" class="logo" src="@/assets/the-aioc.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/">Recherche</RouterLink>
        <RouterLink to="/">A propos</RouterLink>
      </nav>
      <button id="btn-deconnexion">Déconnexion</button>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  width: 100%;
  height: 133px;
  display: flex;
  justify-content:space-between;
  justify-items: center;
  align-items: center;
  border-radius: 0px 0px 30px 30px;
  background: #1A0007;
}
.logo {
  display: block;
  width: 99px;
  height: 99px;
  margin-left: 9.51%;
}

nav {
  display: flex;
  gap: 10px;
  width: 100%;
  text-align: center;
}

nav a.router-link-exact-active {
  border-bottom: 2px solid var(--color-text);
}

nav a.router-link-exact-active:hover {
  font-weight: bold;
  border-bottom: 2px solid var(--color-text);
}

nav a {
  /* display: inline-block; */
  display: flex;
  width: 80px;
  height: 44px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.wrapper {
  display: flex;
  gap: 17px;
  margin-right: 9.51%;
}

#btn-deconnexion {
  display: inline-flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: var(--color-background-btn);
  color: var(--color-text);
  margin-left: 114px;
  border: none;
  outline: none;
  font-family: 'poppins';
  font-weight: 500;
  font-size: 11pt;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
