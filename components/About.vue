<template>
  <section id="about" class="about" v-cloak>
    <div class="container">
      <div class="row">
        <div class="col u-text-center">
          <h2 class="h2" v-scroll-reveal="{ cleanup: true, delay: 500, duration: 1000, distance: '250px', origin: 'top', interval: 300 }">About us</h2>
          <p class="u-cinzel" v-scroll-reveal="{ cleanup: true, delay: 1000, duration: 1000, distance: '250px', origin: 'bottom', interval: 300 }">Inkdependent tattoo studio has been established in 2009, but our ink-adventure had started about 10 years ago. We love getting tattoos as much as we love to design them and we take it earnestly and committedly because we aware that our artwork will remain with our customers until the end.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
	background: #dadada;
	background: url(~assets/images/graphics/about-us.jpg) no-repeat center / cover #f1f1f1;
	position: relative;

	&::before {
		content: '';
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(255,255,255,0.5);
		top: 0;
	}
}

</style>