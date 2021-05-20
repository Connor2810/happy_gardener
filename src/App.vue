<template>
<div>
<Navbar />
<ImageCarousel />

  
  </div>
  <router-view />
  <Footer />
  
</template>
<script>
import Navbar from '@/components/Navigation'
import ImageCarousel from '@/components/ImageCarousel'
import Footer from '../src/components/Footer'
export default {
  name: 'App',
  components: {
    Navbar,
    ImageCarousel,
    Footer,
  }
}
</script>

<style>




</style>
