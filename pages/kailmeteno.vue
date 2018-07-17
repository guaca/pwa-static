<template>
  <section class="container">
    <div>
      <nuxt-link to="/">
        <app-logo/>
      </nuxt-link>
      <hr>
      <h1 class="title">
        Kailmeteno
      </h1>
      <h2 class="subtitle">
        Esta página vamos a indexarla e intentar posicionarla para la keyword inventada Kailmeteno
      </h2>
      <app-content/>
      <div class="static-content">
        <p>Actualmente no existe ningún resultado en Google para la keyword <strong>Kailmeteno</strong>, así que el objetivo será no solo indexar esta página si no que aparezca en resultados de búsqueda.</p>
      </div>
    </div>
    <app-footer/>
  </section>
</template>

<script type="text/javascript">
import AppLogo from '~/components/AppLogo.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppLogo,
    AppFooter
  },
  head () {
      return {
        title: 'Kailmeteno',
        meta: [
          { hid: 'description', name: 'description', content: 'En esta página trabajamos la keyword inventada Kailmeteno para comprobar la indexación de contenidos en buscadores de una PWA en static mode.' },
          { hid: 'og:title', name: 'og:title', content: 'Kailmeteno' },
          { hid: 'og:description', name: 'og:description', content: 'En esta página trabajamos la keyword inventada Kailmeteno para comprobar la indexación de contenidos en buscadores de una PWA en static mode.' }
        ]
      }
    }
}
</script>
