<template>
  <footer class="u-grey u-text-center">
    <div class="container">
      <div class="row">
        <div class="col">
          <p><img width="130" src="@/assets/images/logo.png" alt="Logo" /></p>
          <p>Copyright {{ year }} Some rights reserved</p>
          <p class="u-text-small">Made by <a class="u-white" href="mailto:kfalencik@gmail.com">Kevin Falencik</a></p>
        </div>
      </div>
    </div>

    <template v-if="scrollToTop == true">
      <transition name="fade">
        <a class="btn btn--to-top" href="#hero"><i class="fas fa-chevron-up"></i></a>
      </transition>
    </template>
  </footer>
</template>

<script>
export default {
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>