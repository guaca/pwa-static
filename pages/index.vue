<template>
  <section class="container">
    <div>
      <h1 class="title">
        PWA y Nuxt.js
      </h1>
      <app-logo/>
      <h2 class="subtitle">
        Esta web es una SSR PWA desarrollada con Nuxt.js para analizar el comportamiento de Google con distintos bloques de contenido y enlaces
      </h2>
      <app-content/>
      <div class="static-content">
        <p>En cambio, este es un bloque de contenido creado directamente en el template.</p>
        <p>Y también vamos a crear dos enlaces:</p>
        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green">Página 3</a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--green">Página 4</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import AppContent from '~/components/AppContent.vue'

export default {
  components: {
    AppLogo,
    AppContent
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  margin: 20px 100px;
}

.subtitle {
  font-weight: 500;
  font-size: 28px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  margin: 20px 100px;
}

.links {
  padding-top: 15px;
}

.static-content{
    font-size: 22px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}
</style>
