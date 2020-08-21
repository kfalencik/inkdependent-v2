<template>
  <div>
    <section id="map" class="map" v-cloak></section>
    <p class="u-text-center map-link" v-cloak>
      <a rel="noopener" href="https://www.google.com/maps/place/Ink+Dependent+Tattoo+Studio/@55.944723,-3.2180096,15z/data=!4m5!3m4!1s0x0:0xdcb9b01c4d271e93!8m2!3d55.944723!4d-3.2180096" target="_blank" class="btn">See on google maps</a>
    </p>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'

export default {
  data () {
    return {
      mapboxToken: 'pk.eyJ1Ijoia2ZhbGVuY2lrIiwiYSI6Im5KTlFLZjQifQ._3v1pa90DdSiutiwCiIccg'
    }
  },

  mounted () {
    mapboxgl.accessToken = this.mapboxToken;

    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/kfalencik/cjumgmouk05dg1fmx9xw1c6hp',
      center: [-3.2179, 55.9446],
      zoom: 16.7
    });

    map.on('load', function () {
      map.loadImage('/marker.png', function(error, image) {
        if (error) {
          throw error;
        }

        map.addImage('custom-marker', image);
        map.addLayer({
          id: 'markers',
          type: 'symbol',
          /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [{
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: [-3.2179037, 55.9446]
                }
              }]
            }
          },
          layout: {
            'icon-image': 'custom-marker',
          }
        });
      });
    });

    map.scrollZoom.disable();
  }
}
</script>

<style lang="scss" scoped>
.map {
	padding: 0;
	height: 450px;
	width: 100%;
}

.map-link {
	margin-top: 50px;
}
</style>