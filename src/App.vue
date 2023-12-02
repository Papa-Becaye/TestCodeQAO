<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import IconSearchVue from './components/icons/IconSearch.vue';
import IconArrow from './components/icons/IconArrow.vue';
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="logo" class="logo" src="@/assets/the-aioc.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/details">Accueil</RouterLink>
        <RouterLink to="/search">Recherche</RouterLink>
        <RouterLink to="/about">A propos</RouterLink>
      </nav>
      <button id="btn-deconnexion">Déconnexion</button>
    </div>
  </header>
  <!-- le contenu de notre page de recherche -->
  <div class="section">
    <div class="row-1">
      <div class="search_item">
        <i>
          <IconSearchVue />
        </i>
        <input type="text" placeholder="Rechercher ...">
      </div>
      <div class="navigation-btn">
        
        <div class="previous-btn nav-btn"><span><IconArrow/></span></div>
        <div class="nav-btn"><span>1</span></div>
        <div class="nav-btn">...</div>
        <div class="nav-btn"><span>452</span></div>
        <div class="nav-btn">...</div>
        <div class="nav-btn"><span>8218</span></div>
        <div class="nav-btn next-btn"><IconArrow/></div>
        
      </div>
    </div>
    <div class="row-2">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
header {
  width: 100%;
  height: 133px;
  display: flex;
  justify-content: space-between;
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
  font-weight: bold;
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

.section {
  max-width: 1166px;
  height: 100vh;
  margin: 28px 138px auto 138px;
  font-family: 'poppins';
}

.row-1 {
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 45px;
  margin-bottom: 28px;

}

.search_item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 45px;
  border-radius: 10px;
  border: 1px solid var(--vt-c-red-mute);
  background: var(--vt-c-red-soft);
}

.search_item input {
  display: flex;
  width: 284px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: rgba(26, 0, 7, 0.51);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  background: transparent;
  outline: none;
}

.search_item i {
  width: 34px;
  height: 34px;
  flex-shrink: 0;
}

.navigation-btn {
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
}

.navigation-btn .nav-btn {
  width: 26px;
  height: 26px;
  display: flex;
  justify-items: center;
  justify-content: center;
  color: var(--vt-c-red);
  text-align: center;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 10px;
  border: 1px solid var(--vt-c-red);
  background: var(--vt-c-red-soft);
  cursor: pointer;
}

.navigation-btn .nav-btn span{
  margin-top: 4px;
}

.navigation-btn .nav-btn:nth-child(2){
  background: var(--vt-c-red);
  color: var(--vt-c-red-soft);
}

.navigation-btn .nav-btn:nth-child(1) span{
  transform: rotate(180deg);
}

.row-2 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-top: 28px;
  background-color: #1A0007;
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
