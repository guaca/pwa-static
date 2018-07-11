<template>
  <div class="VueToNuxtContent">
    <p>En este bloque tenemos contenido que se ejecuta desde el componente <strong>AppContent</strong></p>
    <p>Y añadimos dos enlaces a subpáginas:</p>
    <div class="links">
      <a
        href="https://nuxtjs.org/"
        target="_blank"
        class="button--grey">Página 1</a>
      <a
        href="https://github.com/nuxt/nuxt.js"
        target="_blank"
        class="button--grey">Página 2</a>
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
