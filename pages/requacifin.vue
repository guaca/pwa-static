<template>
  <section class="container">
    <div>
      <nuxt-link to="/">
        <app-logo/>
      </nuxt-link>
      <hr>
      <h1 class="title">
        Requacifin
      </h1>
      <h2 class="subtitle">
        Esta página vamos a indexarla e intentar posicionarla para la keyword inventada Requacifin
      </h2>
      <app-content/>
      <div class="static-content">
        <p>Actualmente no existe ningún resultado en Google para la keyword <strong>Requacifin</strong>, así que el objetivo será no solo indexar esta página si no que aparezca en resultados de búsqueda.</p>
      </div>
    </div>
    <app-footer/>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppLogo,
    AppFooter
  }
}
</script>
