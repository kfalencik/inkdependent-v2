<template>
  <section id="hero" class="hero">

    <h1 class="sr-only">INKDEPENDENT</h1>

    <button @click="changeSlide(heroCurrentSlide - 1)" class="hero__nav-item" title="Previous"><fa :icon="['fas', 'chevron-left']"/></button>
    <button @click="changeSlide(heroCurrentSlide + 1)" class="hero__nav-item" title="Next"><fa :icon="['fas', 'chevron-right']"/></button>

    
    <transition-group :name="heroSlideDirection">
      <template v-for="(item, index) in slideshow">
        <div :key="`slide-${index}`" v-show="heroCurrentSlide == index" class="hero__slide">
          <div class="hero__slide-image">
            <img :src="require(`@/assets/images/slideshow/${item.image}`)" :alt="`Slide ${index}`" />
          </div>

          <div class="hero__slide-content u-text-center">
              <img v-if="item.contentType === 'image'" :src="require(`@/assets/images/${item.content}`)" :alt="item.title" />
              <span v-if="item.contentType === 'text'" class="h1 u-white">{{item.content}}</span>
          </div>
        </div>
      </template>
    </transition-group>

    {{ heroCurrentSlide }} - {{ this.slideshow.length - 1}}
  </section>

  
</template>

<script>
export default {
  data () {
    return {
      heroSlideDirection: 'slide-right',
      heroCurrentSlide: 0,
      slideshow: [
        {
          'title': 'Inkdependent',
          'image': 'slide-1.jpg',
          'contentType': 'image',
          'content': 'logo.png'
        },
        {
          'title': 'Multi awarded artists',
          'image': 'slide-2.jpg',
          'contentType': 'text',
          'content': 'Multi awarded artists'
        },
        {
          'title': 'Custom designed tattoos',
          'image': 'slide-3.jpg',
          'contentType': 'text',
          'content': 'Custom designed tattoos'
        },
        {
          'title': 'Standard & unusual piercing',
          'image': 'slide-4.jpg',
          'contentType': 'text',
          'content': 'Standard & unusual piercing'
        }
      ]
    }
  },

  methods: {
    initHeroSlider () {
      clearInterval(this.heroInterval);
      this.heroInterval = setInterval( () => {
        this.heroSlideDirection = 'slide-right';
        if (this.heroCurrentSlide === this.slideshow.length - 1) {
          this.heroCurrentSlide = 0;
        } else {
          this.heroCurrentSlide++;
        }
      }, 8000);
    },
      
    changeSlide (slide) {
      this.heroSlideDirection = slide < this.heroCurrentSlide ? 'slide-left' : 'slide-right';
      this.heroCurrentSlide = slide === this.slideshow.length ? 0 : slide === -1 ? this.slideshow.length - 1 : slide;
      console.log(slide, this.slideshow.length - 1, this.heroCurrentSlide)
      this.initHeroSlider();
    }
  },

  mounted () {
    this.initHeroSlider();
  }
}
</script>

<style lang="scss" scoped>
.hero {
	height: calc(100vh - 70px);
	width: 100%;
	padding: 0;
	margin-top: 70px;
	overflow: hidden;
	position: relative;
	z-index: 10;

	@media (min-width: $breakpoint-lg) {
		margin-top: 0
	}

	&__slide {
		position: absolute;
		width: 100%;
		height: 100%;
		will-change: transform;
	}

	&__slide-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 86%;
		max-width: 1140px;
		opacity: 0;
		animation: fadeIn 1s 1 forwards;
		animation-delay: .5s;

		.h1 {
			font-family: $font-bold;
			letter-spacing: 10px;
			text-transform: uppercase;
			line-height: 1.7;
			margin-bottom: 0;
		}

		img {
			max-width: 230px;
		}
	}

	&__slide-image {
		height: 100%;

		&::before {
			content: '';
			display: block;
			width: 100%;
			height: 100%;
			position: absolute;
			background: rgba(0,0,0,0.3);
		}

		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}

	&__nav-item {
		background: #fff;
		color: $gold-color;
		position: absolute;
		top: 50%;
		left: 20px;
		border: none;
		width: 40px;
		height: 40px;
		z-index: 30;
		transition: all .5s ease;
		cursor: pointer;
		opacity: 0.3;
		display: none;

		@media (min-width: $breakpoint-lg) {
			display: block;
		}

		&:nth-child(3) {
			left: auto;
			right: 20px;
		}

		&:hover {
			background: $gold-color;
			color: #fff;
		}
	}

	&:hover &__nav-item {
		opacity: 1;
	}
}

</style>