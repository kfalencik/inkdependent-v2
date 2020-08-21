<template>
  <section id="social" class="social u-white" v-cloak>
    <div class="container">
      <div class="row">
        <div class="col u-text-center">
          <h2 class="h2 u-cinzel">Stay up to date</h2>
          <p class="u-cinzel">Don't forget to add us on social media to see latest artwork and infromation about guestspot artists</p>
          <p>
            <a rel="noopener" href="https://www.facebook.com/inkdependenttattoos" target="_blank" title="Facebook" class="social__link"><fa :icon="['fab', 'facebook-square']" /> inkdependenttattoos</a>
            <a rel="noopener" href="https://www.instagram.com/inkdependenttattoos" target="_blank" title="Instagram" class="social__link"><fa :icon="['fab', 'instagram']" /> inkdependenttattoos</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.social{
	background: #000;
	background: url(~assets/images/graphics/social.jpg) no-repeat center / cover #000;
	position: relative;

	&::before{
		content: '';
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
		top: 0;
	}

	&__link{
		padding: 15px 35px;
		color: #fff !important;
		font-family: $font-bold;
		background: #000;
		display: inline-block;
		margin: 15px 10px;
		font-size: 20px;
		letter-spacing: 3px;

		i{
			font-size: 28px;
			vertical-align: middle;
			margin-right: 10px;
		}

		&:hover{
			background: $gold-color;
		}
	}
}
</style>