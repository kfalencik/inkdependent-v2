<template>
  <footer class="u-grey u-text-center">
    <div class="container">
      <div class="row">
        <div class="col">
          <p><img width="130" src="@/assets/images/logo.png" alt="Logo" /></p>
          <p>Copyright {{ year }} © Some rights reserved</p>
          <p class="u-text-small">Made by <a class="u-white" href="mailto:kfalencik@gmail.com">Kevin Falencik</a></p>
        </div>
      </div>
    </div>
    
    <template v-if="scrollToTop == true">
      <transition name="fade">
        <a class="btn btn--to-top" href="#hero"><fa :icon="['fas', 'chevron-up']"/></a>
      </transition>
    </template>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      pageOffset: 0
    }
  },

  computed: {
    scrollToTop () {
      return this.pageOffset > 0;
    },
    year () {
      return new Date().getFullYear()
    }
  },

  mounted () {
    window.addEventListener('scroll', () => this.pageOffset = window.pageYOffset);
  },
}
</script>

<style lang="scss" scoped>
footer {
	background: #000;

	p {
		margin: 25px 0;
	}
}

</style>