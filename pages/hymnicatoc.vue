<template>
  <section class="container">
    <div>
      <nuxt-link to="/">
        <app-logo/>
      </nuxt-link>
      <hr>
      <h1 class="title">
        Hymnicatoc
      </h1>
      <h2 class="subtitle">
        Esta página vamos a indexarla e intentar posicionarla para la keyword inventada Hymnicatoc
      </h2>
      <div class="static-content">
        <p>Actualmente no existe ningún resultado en Google para la keyword <strong>Hymnicatoc</strong>, así que el objetivo será no solo indexar esta página si no que aparezca en resultados de búsqueda.</p>
        <p>El 19 de julio de 2018 permitimos a los bots que rastreen e indexen este subdominio. ¿Cuánto tardará Google en indexar esta página generada en modo estático?</p>
        <p>Los resultados los veremos a partir del próximo viernes 27 de julio ;)</p>
        <p>Recuerda que puedes visitar las distintas versiones de este experimento desde https://pwaexperiments.com</p>
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
        title: 'Hymnicatoc - Static PWA',
        meta: [
          { hid: 'description', name: 'description', content: 'En esta página trabajamos la keyword inventada Hymnicatoc para comprobar la indexación de contenidos en buscadores de una Static PWA.' },
          { hid: 'og:title', name: 'og:title', content: 'Hymnicatoc - Static PWA' },
          { hid: 'og:description', name: 'og:description', content: 'En esta página trabajamos la keyword inventada Hymnicatoc para comprobar la indexación de contenidos en buscadores de una Static PWA.' }
        ]
      }
    }
}
</script>
