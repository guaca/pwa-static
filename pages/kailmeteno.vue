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
        <p>El jueves 19 de julio abrimos el robots.txt para que los bots rastreen e indexen este subdominio. ¿Cuánto tardará Google en indexar esta página generada en modo estático?</p>
        <p>Los primeros resultados los veremos el próximo viernes 27 de julio en el SEOPLUS ;)</p>
        <p>Recuerda que puedes ver las distintas versiones de este experimento desde https://pwaexperiments.com</p>

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
