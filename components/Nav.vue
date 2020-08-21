<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col">
          <a href="/"><img src="@/assets/images/logo-small.png" alt="Logo" /></a>

          <nav class="main-nav u-text-right">
            <button class="main-nav__toggler" @click="menuStatus = !menuStatus"><fa :icon="['fas', 'bars']"/></button>
            <ul @click="menuStatus = !menuStatus" :class="{'mobile-on': menuStatus}">
              <li class="main-nav__link"><a href="/#hero" :class="{'active': currentSection == 'hero'}">Home</a></li>
              <li class="main-nav__link"><a href="/#about" :class="{'active': currentSection == 'about'}">About</a></li>
              <li class="main-nav__link"><a href="/#artists" :class="{'active': currentSection == 'artists'}">Artists</a></li>
              <li class="main-nav__link"><a href="/#map" :class="{'active': currentSection == 'map'}">Map</a></li>
              <li class="main-nav__link"><a href="/#contact" :class="{'active': currentSection == 'contact'}">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      menuStatus: false,
      currentSection: 'hero'
    }
  },

  computed: {
    currentMenuLink: function() {
      const sections = document.querySelectorAll('section');
      let currentScroll = window.pageYOffset;
      let findSection = null

      sections.forEach(section => {
        let sectionPosition = section.offsetTop;
        if (currentScroll + 100 > sectionPosition) {
          findSection = section.getAttribute('id');
        }
      });

      return findSection
    }
  }
}
</script>

<style lang="scss" scoped>
header {
	background: #fff;
	padding: 15px 0;
	position: fixed;
	top: 0;
	z-index: 9999;
	width: 100%;
	box-shadow: 0 5px 5px rgba(0,0,0,0.2);

	@media(min-width: $breakpoint-lg) {
		position: -webkit-sticky; /* Safari */
		position: sticky;
		z-index: 9999;
	}
}

.main-nav {
	float: right;
	width: calc(100% - 300px);
	overflow: hidden;

	&__toggler {
		-moz-appearance: none;
		-webkit-appearance: none;
		font-size: 30px;
		color: #333;
		background: none;
		border: none;

		@media(min-width: $breakpoint-lg) {
			display: none;
		}
	}

	ul {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: #fff;
		padding-top: 50px;
		z-index: 999;
		transform: translateX(100%);
		transition: transform .5s ease;
		box-shadow: -5px 0 10px rgba(0,0,0,0.2);

		&.mobile-on {
			transform: translateX(0);
		}

		@media(min-width: $breakpoint-lg) {
			float: right;
			display: block;
			position: relative;
			width: auto;
			height: auto;
			padding: 0;
			transform: translateX(0);
			box-shadow: none;
		}
	}

	&__link {
		

		@media(min-width: $breakpoint-lg) {
			float: left;
			margin-left: 35px;
		}

		a {
			color: #333;
			font-family: $font-bold;
			font-size: 30px;
			text-transform: uppercase;
			cursor: pointer;
			width: 100%;
			display: block;
			text-align: left;
			padding: 20px;

			@media(min-width: $breakpoint-lg) {
				color: #333;
				font-family: $font-bold;
				font-size: 14px;
				text-transform: uppercase;
				padding: 15px 0;
			}

			&:hover, &.active {
				color: $gold-color;
			}
		}
	}
}

</style>