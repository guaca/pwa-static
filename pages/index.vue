<template>
  <section class="container">
    <div>
      <nuxt-link to="/">
        <app-logo/>
      </nuxt-link>
      <hr>
      <h1 class="title">
        Cómo indexar una PWA y no morir en el intento - Static Mode
      </h1>
      <h2 class="subtitle">
        Esta web es una PWA desarrollada con Nuxt.js en modo estático para analizar el comportamiento de Google con distintos bloques de contenido y enlaces
      </h2>
      <app-content/>
      <div class="static-content">
        <p>Además, también tenemos un bloque de contenido creado directamente en la página <strong>index.vue</strong>.</p>
        <p>Y también vamos a crear un enlace a otra página a indexar y posicionar por una keyword inventada:</p>
        <div class="links">
          <nuxt-link to="/rehordleca" class="button--green">Rehordleca</nuxt-link>
        </div>
      </div>
    </div>
    <app-footer/>
  </section>
</template>

<script type="text/javascript">
import AppLogo from '~/components/AppLogo.vue'
import AppContent from '~/components/AppContent.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppLogo,
    AppContent,
    AppFooter
  },
  head () {
      return {
        title: 'Cómo indexar una Static PWA y no morir en el intento',
        meta: [
          { hid: 'description', name: 'description', content: 'Esta es una PWA desarrollada con Nuxt.js como contenido estático para comprobar el comportamiento de Google con este tipo de páginas' },
          { hid: 'og:title', name: 'og:title', content: 'Cómo indexar una Static PWA y no morir en el intento' },
          { hid: 'og:description', name: 'og:description', content: 'Esta es una PWA desarrollada con Nuxt.js como contenido estático para comprobar el comportamiento de Google con este tipo de páginas' }
        ]
      }
    }
  }
</script>
