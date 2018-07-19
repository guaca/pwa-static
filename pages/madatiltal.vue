<template>
  <section class="container">
    <div>
      <nuxt-link to="/">
        <app-logo/>
      </nuxt-link>
      <hr>
      <h1 class="title">
        Madatiltal
      </h1>
      <h2 class="subtitle">
        Esta página vamos a indexarla e intentar posicionarla para la keyword inventada Madatiltal
      </h2>
      <app-content/>
      <div class="static-content">
        <p>Actualmente no existe ningún resultado en Google para la keyword <strong>Madatiltal</strong>, así que el objetivo será no solo indexar esta página si no que aparezca en resultados de búsqueda.</p>
        <p>Desde esta página, vamos a enlazar a otra subpágina a indexar y posicionar por otra keyword inventada:</p>
          <nuxt-link to="/hymnicatoc" class="button--green">Hymnicatoc</nuxt-link>
        <p>El 19 de julio de 2018 abrimos el robots.txt para permitir el rastreo e indexación de este subdominio. ¿Cuánto tardará Google en indexar esta página generada en Static mode?</p>
        <p>Los resultados los analizaremos a partir del próximo viernes 27 de julio ;)</p>
        <p>Y recuerda que puedes visitar las otras versiones de este experimento desde https://pwaexperiments.com</p>

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
        title: 'Madatiltal',
        meta: [
          { hid: 'description', name: 'description', content: 'En esta página trabajamos la keyword inventada Madatiltal para comprobar la indexación de contenidos en buscadores de una PWA en static mode.' },
          { hid: 'og:title', name: 'og:title', content: 'Madatiltal' },
          { hid: 'og:description', name: 'og:description', content: 'En esta página trabajamos la keyword inventada Madatiltal para comprobar la indexación de contenidos en buscadores de una PWA en static mode.' }
        ]
      }
    }
}
</script>
