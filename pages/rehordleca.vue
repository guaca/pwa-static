<template>
  <section class="container">
    <div>
      <nuxt-link to="/">
        <app-logo/>
      </nuxt-link>
      <hr>
      <h1 class="title">
        Rehordleca
      </h1>
      <h2 class="subtitle">
        Esta página vamos a indexarla e intentar posicionarla para la keyword inventada Rehordleca
      </h2>
      <div class="static-content">
        <p>Actualmente no existe ningún resultado en Google para la keyword <strong>Rehordleca</strong>, así que el objetivo será no solo indexar esta página en Google si no que aparezca en resultados de búsqueda.</p>
        <p>Desde esta página, vamos a enlazar a otra subpágina a indexar y posicionar por otra keyword inventada:</p>
        <nuxt-link to="/kailmeteno" class="button--green">Kailmeteno</nuxt-link>
        <p>El 19 de julio de 2018 abrimos el robots.txt para permitir el rastreo y la indexación de este subdominio. ¿Cuánto tardará Google en indexar estas páginas generadas en modo estático de Nuxt.js?</p>
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
        title: 'Rehordleca - Static PWA',
        meta: [
          { hid: 'description', name: 'description', content: 'En esta página trabajamos la keyword inventada Rehordleca para comprobar la indexación de contenidos en buscadores de una PWA en static mode.' },
          { hid: 'og:title', name: 'og:title', content: 'Rehordleca - Static PWA' },
          { hid: 'og:description', name: 'og:description', content: 'En esta página trabajamos la keyword inventada Rehordleca para comprobar la indexación de contenidos en buscadores de una PWA en static mode.' }
        ]
      }
    }
}
</script>
