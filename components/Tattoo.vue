<template>
  <section id="artists" class="tattoo" v-cloak>
    <div class="container">
      <div class="row">
        <div class="col u-text-center">
          <h2 class="h2 u-white" v-scroll-reveal="{ cleanup: false, delay: 500, duration: 1000, distance: '250px', origin: 'top', interval: 300 }">Artists</h2>
        </div>
      </div>

      <transition name="fade">
        <div v-if="albums.length === 0" class="row">
          <div class="col u-text-center">
            <img src="@/assets/images/loading.svg" alt="Loading" />
          </div>
        </div>
      </transition>

      <transition-group class="row" name="fade">
        <template v-for="(item, index) in albums">
          <div itemscope v-if="albums.length > 0" :key="`tattoo-album-${index}`" class="tattoo__item u-text-center col-md-4 col-lg-3">
            <div class="tattoo__item-image" @click="openTattooAlbum(index)">
              <img :src="item.cover_photo.source" :alt="item.name" />
            </div>

            <div class="tattoo__item-title">
              <h3 itemprop="name" class="h3 u-white">{{ item.name }}</h3>
              <p><a rel="noopener" :href="item.instagram" target="_blank" title="Instagram"><fa :icon="['fab', 'instagram']" /> Instagram</a></p>
            </div>

            <div @click="closeTattooAlbum" v-if="tattooOverlay === true && activeTattooAlbum === index" class="tattoo__overlay">
              <button class="tattoo__overlay-nav tattoo__overlay-nav--close" @click.stop="closeTattooAlbum"><i class="fas fa-times"></i></button>
              <button class="tattoo__overlay-nav tattoo__overlay-nav--prev" v-if="activeTattooPicture - 1 >= 0" @click.stop="changeTattooPicture(activeTattooPicture - 1)"><fa :icon="['fas', 'chevron-left']"/></button>
              <button class="tattoo__overlay-nav tattoo__overlay-nav--next" v-if="activeTattooPicture + 1 < item.photos.data.length" @click.stop="changeTattooPicture(activeTattooPicture + 1)"><fa :icon="['fas', 'chevron-right']"/></button>

              <template v-for="(picture, i) in item.photos.data">
                <div v-if="activeTattooPicture === i" :key="`tattoo-album-${index}-picture-${i}`" class="tattoo__overlay-item u-text-center">
                  <div class="tattoo__overlay-item-image">
                    <img :src="picture.source" :alt="'Picutre' + i" />
                  </div>
                </div>
              </template>
            </div>
          </div>
        </template>
      </transition-group>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      activeTattooAlbum: null,
      tattooOverlay: false,
      activeTattooPicture: 0
    }
  },

  computed: {
    ...mapGetters([
      'tattooAlbums'
    ]),

	albums () {
		return this.tattooAlbums && this.tattooAlbums.length ? [...this.tattooAlbums].map((item) => {
			item.photos.data = item.photos.data.reverse()
			return item
		}).sort((a, b) => a.order - b.order): []
	}
  },

  mounted () {
    this.LOAD_ALBUMS().then(() => {
		console.log('loaded', this.tattooAlbums)
	})
  },

  methods: {
    ...mapActions([
      'LOAD_ALBUMS'
    ]),

    openTattooAlbum: function(album) {
      this.activeTattooAlbum = album;
      this.tattooOverlay = true;
      this.activeTattooPicture = 0;
    },
    closeTattooAlbum: function() {
      this.tattooOverlay = false;
    },
    changeTattooPicture: function(picture) {
      this.tattooOverlay = true;
      this.activeTattooPicture = picture;
    }
  }
}
</script>

<style lang="scss" scoped>
.tattoo{

	&__item{
		margin: 20px 0;
	}

	&__item-image{
		overflow: hidden;

		img{
			width: 100%;
			height: 300px;
			object-fit: cover;
			object-position: top;
			cursor: pointer;
			transition: all .5s ease;

			@media(min-width: $breakpoint-md){
				height: 200px;
			}

			&:hover{
				transform: scale(1.1);
			}
		}
	}

	&__item-title{
		margin-top: 15px;

		.h3{
			font-family: $font-bold;
			letter-spacing: 2px;
			font-size: 20px;
		}

		a{
			color: #fff;
			font-size: 16px;
		}

	}

	&__overlay{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: 9999;
		display: flex;
		text-align: center;
		align-items: center;

		&::before{
			content: '';
			display: block;
			background: rgba(0,0,0,0.75);
			width: 100%;
			height: 100%;
			position: absolute;
		}
	}

	&__overlay-nav{
		z-index: 1000;
		background: none;
		font-size: 35px;
		color: #fff;
		border: none;
		position: absolute;
		left: 5px;
		cursor: pointer;
		text-shadow: 0 0 5px rgba(0,0,0,0.75);

		@media(min-width: $breakpoint-lg){
			left: 50px;
			font-size: 50px;
		}

		&--next{
			left: auto;
			right: 5px;

			@media(min-width: $breakpoint-lg){
				right: 50px;
			}
		}

		&--close{
			top: 50px;
			left: auto;
			right: 5px;
			font-size: 30px;

			@media(min-width: $breakpoint-lg){
				right: 50px;
			}
		}
	}

	&__overlay-item{
		position: relative;
		z-index: 999;
		width: 100%;
	}

	&__overlay-item-image{
		img{
			max-width: 96vw;
			max-height: 96vh;
			object-fit: cover;
			object-position: center;
			cursor: pointer;
		}
	}
}

</style>