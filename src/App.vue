<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import IconSearchVue from './components/icons/IconSearch.vue';
import IconArrow from './components/icons/IconArrow.vue';
import IconFacebook from './components/icons/IconFacebook.vue';
import IconInstagram from './components/icons/IconInstagram.vue';
import IconTwitter from './components/icons/IconTwitter.vue';
import IconYoutube from './components/icons/IconYoutube.vue';

// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="logo" class="logo" src="@/assets/the-aioc.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/about">Accueil</RouterLink>
        <RouterLink to="/search">Galerie</RouterLink>
        <RouterLink to="/details">A propos</RouterLink>
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

        <div class="previous-btn nav-btn"><span>
            <IconArrow />
          </span></div>
        <div class="nav-btn"><span>1</span></div>
        <div class="nav-btn">...</div>
        <div class="nav-btn"><span>452</span></div>
        <div class="nav-btn">...</div>
        <div class="nav-btn"><span>8218</span></div>
        <div class="nav-btn next-btn">
          <IconArrow />
        </div>

      </div>
    </div>
    <div class="row-2">
      <RouterView />
    </div>
  </div>
  <footer>
    <div class="footer-left-items">
      <img src="../src/components/imgs/dark_logo.png" alt="Art Institute ">
      <p>ART INSTITUTE CHICAGO</p>
    </div>
    <div class="footer-right-items">
      <div class="social-media-items">
        <IconYoutube />
      </div>
      <div class="social-media-items">
        <IconTwitter />
      </div>
      <div class="social-media-items">
        <IconInstagram />
      </div>
      <div class="social-media-items">
        <IconFacebook />
      </div>
    </div>
  </footer>
</template>

<style scoped>  
 
.section {
  max-width: 1166px;
  min-height: 100vh;
  margin: 28px 138px auto 138px;
  font-family: 'poppins'; 
}
footer .footer-left-items {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 138px;
  gap: 10px;
}

footer .footer-right-items {
  margin-right: 138px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

footer .footer-right-items .social-media-items {
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 24px;
  height: 24px; 
  border-radius: 10px;
  border: 1px solid var(--vt-c-red-soft);
  cursor: pointer;
  transition: 0.3s ease-in;
}

footer .footer-right-items .social-media-items:hover{
  border: 1px solid var(--vt-c-red);
}
</style>