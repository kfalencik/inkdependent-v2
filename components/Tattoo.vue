<template>
  <section id="artists" class="tattoo" v-cloak>
    <div class="container">
      <div class="row">
        <div class="col u-text-center">
          <h2 class="h2 u-white" v-scroll-reveal="{ cleanup: true, delay: 500, duration: 1000, distance: '250px', origin: 'top', interval: 300 }">Artists</h2>
        </div>
      </div>

      <transition name="fade">
        <div v-if="tattooAlbums.length === 0" class="row">
          <div class="col u-text-center">
            <img src="@/assets/images/loading.svg" alt="Loading" />
          </div>
        </div>
      </transition>

      <transition-group class="row" name="fade">
        <template v-for="(item, index) in tattooAlbums">
          <div itemscope v-if="tattooAlbums.length > 0 && staggerTattooAlbums > index" :key="`tattoo-album-${index}`" class="tattoo__item u-text-center col-md-4 col-lg-3">
            <div class="tattoo__item-image" @click="openTattooAlbum(index)">
              <img :src="item.cover_photo.source" :alt="item.name" />
            </div>

            <div class="tattoo__item-title">
              <h3 itemprop="name" class="h3 u-white">{{ item.name }}</h3>
              <p><a rel="noopener" :href="item.instagram" target="_blank" title="Instagram"><i class="fab fa-instagram"></i> Instagram</a></p>
            </div>

            <div @click="closeTattooAlbum" v-if="tattooOverlay === true && activeTattooAlbum === index" class="tattoo__overlay">
              <button class="tattoo__overlay-nav tattoo__overlay-nav--close" @click.stop="closeTattooAlbum"><i class="fas fa-times"></i></button>
              <button class="tattoo__overlay-nav tattoo__overlay-nav--prev" v-if="activeTattooPicture - 1 >= 0" @click.stop="changeTattooPicture(activeTattooPicture - 1)"><i class="fas fa-chevron-left"></i></button>
              <button class="tattoo__overlay-nav tattoo__overlay-nav--next" v-if="activeTattooPicture + 1 < item.photos.data.length" @click.stop="changeTattooPicture(activeTattooPicture + 1)"><i class="fas fa-chevron-right"></i></button>

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
      activeTattooPicture: 0,
      staggerTattooAlbums: 0,
    }
  },

  computed: {
    ...mapGetters([
      'tattooAlbums'
    ])
  },

  mounted () {
    this.LOAD_ALBUMS()
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