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
  }
}
</script>