<template>
  <div class="VueToNuxtContent">
    <p>En este bloque tenemos contenido que se ejecuta desde el componente <strong>AppContent</strong></p>
    <p>Y añadimos dos enlaces a subpáginas:</p>
    <div class="links">
      <nuxt-link to="/page1" class="button--grey">Página 1</nuxt-link>
      <nuxt-link to="/page2" class="button--grey">Página 2</nuxt-link>
    </div>
  </div>
</template>

<style>
  .VueToNuxtContent {
    font-size: 22px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
</style>
