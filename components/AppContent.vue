<template>
  <div class="VueToNuxtContent">
    <p>En este bloque tenemos contenido que se carga desde el componente <strong>AppContent</strong>.</p>
    <p>Y añadimos un enlace a una subpágina a indexar y posicionar por una keyword inventada:</p>
    <div class="links">
      <nuxt-link to="/requacifin" class="button--green">Requacifin</nuxt-link>
    </div>
  </div>
</template>

<style>
  .VueToNuxtContent {
    font-size: 22px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
    margin: 0 20px;;
  }
</style>
