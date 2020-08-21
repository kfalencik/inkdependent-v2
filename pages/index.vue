<template>
  <div>
    <Hero />
    <Nav />
    <About />
    <Tattoo />
    <Map />
    <Contact />
    <Social />
    <Footer />
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import About from '@/components/About'
import Tattoo from '@/components/Tattoo'
import Map from '@/components/Map'
import Contact from '@/components/Contact'
import Social from '@/components/Social'
import Footer from '@/components/Footer'

export default {
  components: {
    Hero,
    Nav,
    About,
    Tattoo,
    Map,
    Contact,
    Social,
    Footer
  },

  data() {
    return {
      structuredData: {
        "@context": "http://schema.org",
        "@type" : "Organization",
        "name" : "Inkdependent",
        "url" : "http://inkdependent.eu",
        "sameAs" : [
          "https://www.facebook.com/inkdependenttattoos",
          "https://www.instagram.com/inkdependenttattoos",
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Edinburgh",
          "addressRegion": "Midlothian",
          "postalCode": "EH11 2BA",
          "streetAddress": "56 Dalry Road"
        },
        "telephone": "0131 623 65 65",
        "email": "mailto:inkdependenttattoos@gmail.com",
      }
    }
  },

  head() {
    return {
      __dangerouslyDisableSanitizers: ['script'],
      script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }]
    }
  },
}
</script>